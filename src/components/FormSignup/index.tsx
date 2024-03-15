import Input from "../Input";
import MarvelLogo from "../MarveteLogo";
import { useContext, useRef } from "react";
import { AuthContext } from "../../providers/Auth/AuthContext";
import { AuthInfo } from "../../hooks/useAuth";
import { RoutesPath } from "../../routes/useRoutes";
import FormConatainer from "../FormConatainer";
import MarvelBtn from "../MarvelBtn";
import ChangeForm from "../ChangeForm";
import * as Yup from "yup";
import { notifyError } from "../../notify";

const schema = Yup.object().shape({
  name: Yup.string().required('The name field cannot be empty'),
  email: Yup.string().email('Type a valid email address').required('The email field cannot be empty'),
  password: Yup.string().required('The password field cannot be empty'),
  passwordConfirm: Yup.string()
    .test('passwords-match', 'Passwords do not match', function (value) {
      return this.parent.password === value;
    })
    .required('The password confirm field cannot be empty'),
}).strict();

export default function FormSignup(){
    const {handleBasicSignup} = useContext(AuthContext) as AuthInfo;

    const userInfo = useRef<{name:string,email:string,password:string,passwordConfirm:string}>({name:'',email:'',password:'',passwordConfirm:''});
    
    const handleSubmit = () => {
      schema.validate(userInfo.current)
      .then(()=>handleBasicSignup(userInfo.current) )
      .catch(e=>{
        notifyError(e.message)
      })
    }
    
    return(
        <FormConatainer style={{gap:"1.2vh"}}>
        <MarvelLogo style={{fontSize:40}}>MARVETE</MarvelLogo>
        <Input
          inputProps={{
            id:"name",
            placeholder:"Name",
            autoCorrect:'off',
            type:"text",
            onChange:(event)=>{userInfo.current.name = event.target.value}
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
        <MarvelBtn onClick={()=>handleSubmit()}>
          Sign up
        </MarvelBtn>
        <ChangeForm href={RoutesPath.LOGIN}>
          Don't have an account yet? So Log in.
        </ChangeForm>
      </FormConatainer>
    )
}