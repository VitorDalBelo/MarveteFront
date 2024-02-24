import { createContext } from "react";
import useAuth, { AuthInfo } from "../../hooks/useAuth";
import {PropsChildren} from "../../intefaces/Props";


const AuthContext = createContext<AuthInfo|undefined>(undefined);


const AuthProvider = ({ children }:PropsChildren) => {
  const auth = useAuth();

	return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
