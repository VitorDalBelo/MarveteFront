import styled from "@emotion/styled";
import MarvelLogo from "../MarveteLogo";
import Props from "../../intefaces/Props";

const MarvelBtn = styled(MarvelLogo)(({theme}:Props)=>({
    fontSize:27,
    borderRadius:15,
    padding:"5px 20px",
    cursor:"pointer",
    border:`0.5px solid ${theme?.palette.primary.main}`,
    width:"fit-content",
    transition:"0.5s filter",
    "&:hover":{
      backgroundColor:theme?.palette.mode=='dark'?theme.palette.secondary.light:theme?.palette.secondary.dark,
    },
    "&:active":{
      outline:`2px solid ${theme?.palette.secondary.main}` ,
    }
  }))

  export default MarvelBtn