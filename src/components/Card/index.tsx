import styled from "@emotion/styled";
import Props from "../../intefaces/Props";

const Card = styled("div")(({theme}:Props)=>({
    backgroundColor:theme?.palette.primary.main,
    borderRadius:"25px",
    overflow:"hidden",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    padding:"2.5rem 3.2rem",
    position:"relative",
    height:577,
    color:theme?.palette.text.primary,
    "@media(min-width:440px)":{
      width:320,
    }

  }))

  export default Card