import { useContext} from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../providers/Auth/AuthContext";
import { AuthInfo } from "../../hooks/useAuth";
import { RoutesPath } from "../useRoutes";
import PublicForm from "../../layouts/PublicForm";

export default function NotLoggedRoutes(){
    const {isAuth} = useContext(AuthContext) as AuthInfo;

    return(
      isAuth ? <Navigate to={RoutesPath.HOME} /> : <PublicForm><Outlet /></PublicForm>
    );
}