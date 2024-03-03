import { styled } from "@mui/material";
import Props from "../../intefaces/Props";

const ChangeForm = styled("a")(({theme}:Props)=>({
    color:theme?.palette.text.primary,
    textDecoration:"none",
    "&:hover":{
      textDecoration:"underline", 
    }
}))

export default ChangeForm