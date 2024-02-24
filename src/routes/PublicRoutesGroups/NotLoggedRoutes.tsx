import { useContext} from "react";
import { CircularProgress } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../providers/Auth/AuthContext";
import { AuthInfo } from "../../hooks/useAuth";
import { RoutesPath } from "../useRoutes";

export default function NotLoggedRoutes(){
    const {loading,isAuth} = useContext(AuthContext) as AuthInfo;

    return(
        !loading ?
      <>
        {isAuth ?
  
        <Navigate to={RoutesPath.HOME} /> 
        
        : <Outlet /> }
        </>
        : <CircularProgress/>
      );
}