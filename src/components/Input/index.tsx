import React from 'react'
import { styled } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import * as ThemeProps from '../../intefaces/Props'
const InputBox = styled("input")(({theme}:ThemeProps.default)=>({
    boxSizing:"border-box",
    fontSize: ".875rem",
    lineHeight: "1.5rem",
    backgroundColor:theme?.palette.primary.dark,
    display:"block",
    border:0,
    outline:0,
    height:60,
    width:"100%",
    borderRadius:".375rem",
    padding:"1rem",
    backgroundPosition:"94.3% 50%",
    color:theme?.palette.text.primary,
    appearance:"none",
    "&:hover":{
      // backgroundImage:"linear-gradient(to bottom,transparent,transparent 58px,#aeb0b5 58px,#aeb0b5);",
      backgroundImage:`linear-gradient(to bottom,transparent,transparent 58px,${theme?.palette.secondary.light} 58px,${theme?.palette.secondary.light});`,
      backgroundSize:"100%",
    },
    "&:focus":{
      // backgroundImage:"linear-gradient(to bottom,transparent,transparent 58px,#000000 58px,#000000);",
      backgroundImage:`linear-gradient(to bottom,transparent,transparent 58px,${theme?.palette.secondary.main} 58px,${theme?.palette.secondary.main});`,
      backgroundSize:"100%",
    },
    "&:focus , &:not(:placeholder-shown)":{
      paddingTop: "22px",
      paddingBottom: "10px",
    },

    "&:focus + label":{
      transform:"scale(.75) translateY(-.5rem) translateX(.15rem)"
    },
    "&:not(:placeholder-shown)~label":{
      transform:"scale(.75) translateY(-.5rem) translateX(.15rem)"
    },

    "&::placeholder": {
      color: "transparent"
    },

}))

const InputContainer = styled("div")(()=>({
    position:"relative",
    width: "100%"
}))

const InputLabel = styled("label")(()=>({
    position: "absolute",
    fontSize:".875rem",
    lineHeight:"1.5rem",
    color:"#5f6166",
    top: 0,
    left: 0,
    width:"100%",
    padding: "1rem",
    overflow: "hidden",
    textAlign: "start",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    pointerEvents: "none",
    border: "1px solid transparent",
    transformOrigin: "0 0",
    transition: "opacity .1s ease-in-out,transform .1s ease-in-out",
}))

const VisibilityContainer = styled("div")(()=>({
  cursor:"pointer",
  position:"absolute",
  top:0,
  right:0,
  padding: "1.1rem",
  color:"#5f6166",
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
}))


  interface Props{
    containerProps?:React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    inputProps?:React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    labelProps?:React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>,
    children: React.ReactNode
}

export default function Input({children,containerProps,inputProps,labelProps}:Props){
    const [hidden,setHidden] = React.useState<boolean>(true) 
    return(
    <InputContainer {...containerProps}>
        <InputBox 
            {...inputProps}  
            type = {
                inputProps && inputProps.type=="password"?
                    hidden? "password" : "text"  
                    :
                    inputProps? inputProps.type : undefined
            }
        />
        <InputLabel {...labelProps}>{children}</InputLabel>
        {inputProps && inputProps.type=="password" && 
        <VisibilityContainer onClick={()=>setHidden(!hidden)}>
          {hidden?<VisibilityOffIcon/>:<VisibilityIcon/>} 
        </VisibilityContainer>
        }
    </InputContainer>
    )
}