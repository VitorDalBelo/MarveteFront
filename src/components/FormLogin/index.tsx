import Input from "../Input";
import { styled } from '@mui/material'
import MarvelLogo from "../MarveteLogo";
import Props from "../../intefaces/Props";
import { useContext, useRef } from "react";
import { AuthContext } from "../../providers/Auth/AuthContext";
import { AuthInfo } from "../../hooks/useAuth";

const FormConatainer = styled("div")(()=>({
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"center",
    gap:40,
    width:"100%"
  }))

const MarvelBtn = styled(MarvelLogo)(({theme}:Props)=>({
    fontSize:27,
    borderRadius:15,
    padding:"5px 20px",
    cursor:"pointer",
    border:"0.5px solid",
    width:"fit-content",
    transition:"0.5s filter",
    "&:hover":{
      backgroundColor:theme?.palette.mode=='dark'?theme.palette.secondary.light:theme?.palette.secondary.dark,
    },
    "&:active":{
      outline:`2px solid ${theme?.palette.secondary.main}` ,
    }
  }))

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
      </FormConatainer>
    )
}