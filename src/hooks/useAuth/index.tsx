import React, {useState} from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Buffer } from 'buffer';
import { RoutesPath } from "../../routes/useRoutes";
import { notifyError } from "../../notify";

export interface User{
    user_id: number,
    
    name: string,
    
    email: string,
    
    photo: string,
    
    googleAccont: boolean,
}

export interface AuthInfo{
  isAuth:boolean,
  user:User | undefined,
  loading:boolean,
  refresh:() => Promise<void> ,
  setUser:React.Dispatch<React.SetStateAction<User|undefined>>,
  setLoading:React.Dispatch<React.SetStateAction<boolean>>,
  handleBasicLogin: (email:string,password:string) => Promise<User | null>,
  handleGoogleLogin: (code:string,mode?:"login"|"signup") => Promise<User | null>,
  handleLogout: () => Promise<void> 
}

export default function useAuth() : AuthInfo{

  
  const history = useNavigate();
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [user, setUser] = useState<User|undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  
  const refresh = async ()=>{
        setLoading(true);
         await api.post("/auth/refresh")
        .then(resp=>{
          localStorage.setItem("access_token",resp.data.access_token);
          setUser(resp.data.user);
          setIsAuth(true);
          setLoading(false);
        })
        .catch(e=>{
          console.log(e);
          handleLogout()
          notifyError("Unable to authenticate your user");
          setLoading(false);
        })
  }

    api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");
        if (token) {
          config.headers["Authorization"] = `Bearer ${JSON.parse(token)}`;
          setIsAuth(true);
        }
        return config;
      },
      (error) => {
        Promise.reject(error);
      },
    );
  
    api.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const originalRequest = error.config;
        if (error?.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
  
          const { data } = await api.post("/auth/refresh");
  
          if (data) {
            localStorage.setItem("token", JSON.stringify(data.access_token));
            api.defaults.headers.Authorization = `Bearer ${data.access_token}`;
          }
          return api(originalRequest);
        }
        setIsAuth(false);
        return Promise.reject(error);
      },
    );


  const handleLogout = async () : Promise<void> => {
      setIsAuth(false);
      setUser(undefined);

      localStorage.removeItem("access_token");
      // @ts-ignore
      api.defaults.headers.Authorization = undefined;

      history(RoutesPath.LOGIN);

  };

  const handleBasicLogin = async (email:string,password:string) : Promise<User | null> => {
    setLoading(true);
    try {
      const base64Credentials = Buffer.from(`${email}:${password}`).toString('base64');
      api.defaults.headers.Authorization = `Basic ${base64Credentials}`;
      const { data } = await api.post("/auth/login");
      api.defaults.headers.Authorization = `Bearer ${data.access_token}`;
      localStorage.setItem("access_token",data.access_token)
      setUser(data.user as User);
      setIsAuth(true);
      setLoading(false);
      history(RoutesPath.HOME)

      return data.user
    } catch (err) {
      setLoading(false);
      notifyError("Unable to authenticate your user");
      await handleLogout();
      return null
    }
  };

  const handleGoogleLogin = async (code:string,mode?:"login"|"signup") : Promise<User | null> => {
    setLoading(true);
    try {
      api.defaults.headers.code = code;
      const endpoint = mode ===  'signup' ? "/auth/signup/oauth" : "/auth/login/oauth"
      const { data } = await api.post(endpoint);
      api.defaults.headers.Authorization = `Bearer ${data.access_token}`;
      localStorage.setItem("access_token",data.access_token)
      setUser(data.user as User);
      
      setIsAuth(true);
      setLoading(false);
      history(RoutesPath.HOME)
      return data.user
    } catch (err : any) {
      setLoading(false);
      if(err.response && err.response.status == 404) notifyError("We have not registered this account, select the option to create an account");
      else notifyError("Unable to authenticate your user");
      await handleLogout();
      return null
    }
  };

    return {
      isAuth,
      user,
      loading,
      refresh,
      setUser,
      setLoading,
      handleBasicLogin,
      handleGoogleLogin,
      handleLogout
    }
}