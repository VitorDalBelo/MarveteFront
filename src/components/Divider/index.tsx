import { styled } from "@mui/material";
import Props from "../../intefaces/Props";

const Divider = styled("span")(({theme}:Props)=>({
    fontSize:25,
    fontWeight:500,
    color:theme?.palette.divider,
    marginTop:40,
    marginBottom:15
  }))

  export default Divider