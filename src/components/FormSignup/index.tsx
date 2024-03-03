import Input from "../Input";
import MarvelLogo from "../MarveteLogo";
import { useContext, useRef } from "react";
import { AuthContext } from "../../providers/Auth/AuthContext";
import { AuthInfo } from "../../hooks/useAuth";
import { RoutesPath } from "../../routes/useRoutes";
import FormConatainer from "../FormConatainer";
import MarvelBtn from "../MarvelBtn";
import ChangeForm from "../ChangeForm";


export default function FormSignup(){
    const {handleBasicLogin} = useContext(AuthContext) as AuthInfo;

    const userInfo = useRef<{email:string,password:string,passwordConfirm:string}>({email:'',password:'',passwordConfirm:''});
    return(
        <FormConatainer style={{gap:25}}>
        <MarvelLogo style={{fontSize:40,marginBottom:10}}>MARVETE</MarvelLogo>
        <Input
          inputProps={{
            id:"name",
            placeholder:"Name",
            autoCorrect:'off',
            type:"text",
            onChange:(event)=>{userInfo.current.email = event.target.value}
          }}
          labelProps={{htmlFor:"name"}}
        >
          Name
        </Input>
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

        <Input

          inputProps={{
            id:"password",
            placeholder:"Password Confirm",
            autoCorrect:'off',
            type:"password",
            onChange:(event)=>{userInfo.current.passwordConfirm = event.target.value}
          }}
          labelProps={{htmlFor:"password"}}
        >
          Password Confirm
        </Input>
        <MarvelBtn onClick={()=>handleBasicLogin(userInfo.current.email,userInfo.current.password)}>
          Sign up
        </MarvelBtn>
        <ChangeForm href={RoutesPath.LOGIN}>
          Don't have an account yet? So Log in.
        </ChangeForm>
      </FormConatainer>
    )
}