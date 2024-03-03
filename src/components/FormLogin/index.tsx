import Input from "../Input";
import MarvelLogo from "../MarveteLogo";
import { useContext, useRef } from "react";
import { AuthContext } from "../../providers/Auth/AuthContext";
import { AuthInfo } from "../../hooks/useAuth";
import { RoutesPath } from "../../routes/useRoutes";
import FormConatainer from "../FormConatainer";
import MarvelBtn from "../MarvelBtn";
import ChangeForm from "../ChangeForm";



export default function FormLogin(){
    const {handleBasicLogin} = useContext(AuthContext) as AuthInfo;

    const userInfo = useRef<{email:string,password:string}>({email:'',password:''});
    return(
        <FormConatainer>
        <MarvelLogo style={{fontSize:40,marginBottom:35}}>MARVETE</MarvelLogo>
        <Input
          inputProps={{
            id:"email",
            placeholder:"Email",
            autoCorrect:'off',
            autoComplete:'email',
            type:"email",
            onChange:(event)=>{userInfo.current.email = event.target.value}
          }}
          labelProps={{htmlFor:"email"}}
        >
          Email
        </Input>
        <Input

          inputProps={{
            id:"password",
            placeholder:"Password",
            autoCorrect:'off',
            autoComplete:'current-password',
            type:"password",
            onChange:(event)=>{userInfo.current.password = event.target.value}
          }}
          labelProps={{htmlFor:"password"}}
        >
          Password
        </Input>

        <MarvelBtn onClick={()=>handleBasicLogin(userInfo.current.email,userInfo.current.password)}>LOG IN</MarvelBtn>
        <ChangeForm href={RoutesPath.SIGNUP}>
          Don't have an account yet? So sign up
        </ChangeForm>
      </FormConatainer>
    )
}