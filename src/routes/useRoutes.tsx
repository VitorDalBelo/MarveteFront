import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Oauth from "../pages/Oauth"
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/Auth/AuthContext";
import { AuthInfo } from "../hooks/useAuth";
import api from "../services/api";
import LoggedRoutes from "./PrivateRoutesGroups/LoggedRoutes";
import NotLoggedRoutes from "./PublicRoutesGroups/NotLoggedRoutes";

export enum RoutesPath {
    LOGIN = "/login",
    OAUTH = "/login/oauth",
    HOME  = "/"
  }

export default function ProviderRoutes() {
    const {refresh,setLoading} = useContext(AuthContext) as AuthInfo;

    useEffect(()=>{
      const token = localStorage.getItem("access_token");
      if(token){
        setLoading(true)
        api.defaults.headers.Authorization = `Bearer ${token}`;
        refresh()
      }
      setLoading(false)
    },[])
    
    return(
        <Routes>
            <Route path={RoutesPath.OAUTH} element={<><Oauth/></>}/>
            <Route   element={<LoggedRoutes />}>
                <Route path={RoutesPath.HOME} element={<><h1>ola mundo</h1></>}/>
            </Route>
            <Route   element={<NotLoggedRoutes />}>
                <Route path={RoutesPath.LOGIN} element={<Login/>}/>
            </Route>
        </Routes>
        
    )
}