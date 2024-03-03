import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Home from "../pages/Home"
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/Auth/AuthContext";
import { AuthInfo } from "../hooks/useAuth";
import api from "../services/api";
import LoggedRoutes from "./PrivateRoutesGroups/LoggedRoutes";
import NotLoggedRoutes from "./PublicRoutesGroups/NotLoggedRoutes";
import LoadingFullScreen from "../components/LoadingFullScreen";
import Signup from "../pages/Signup";

export enum RoutesPath {
    LOGIN = "/login",
    HOME  = "/",
    SIGNUP = "/signup"
  }

export default function ProviderRoutes() {
    const {refresh,setLoading,loading} = useContext(AuthContext) as AuthInfo;

    useEffect(()=>{
      const token = localStorage.getItem("access_token");
      if(token){
        api.defaults.headers.Authorization = `Bearer ${token}`;
        refresh()
      }
      else{
        setLoading(false)
      }
    },[])
    
    return(
      loading ? <LoadingFullScreen />:
      <>
        <Routes>
            <Route   element={<LoggedRoutes />}>
                <Route path={RoutesPath.HOME} element={<Home/>}/>
            </Route>
            <Route   element={<NotLoggedRoutes />}>
                <Route path={RoutesPath.SIGNUP} element={<Signup/>}/>
                <Route path={RoutesPath.LOGIN} element={<Login/>}/>
            </Route>
        </Routes>
      </>
        
    )
}