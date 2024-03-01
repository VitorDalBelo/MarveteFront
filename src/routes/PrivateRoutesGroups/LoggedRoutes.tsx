import { useContext} from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../providers/Auth/AuthContext";
import { AuthInfo } from "../../hooks/useAuth";
import { RoutesPath } from "../useRoutes";
import LoggedLayout from "../../layouts/LoggedLayout";

export default function LoggedRoutes(){
    const {isAuth} = useContext(AuthContext) as AuthInfo;
    
    return(
      isAuth ?
      <LoggedLayout>
        <Outlet /> 
      </LoggedLayout> 
      : <Navigate to={RoutesPath.LOGIN} />
    );
}