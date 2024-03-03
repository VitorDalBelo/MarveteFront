import styled from "@emotion/styled";
import Props from "../../intefaces/Props";
import Card from "../Card";
import SpidermanDark from '../../assets/teste.jpg'

import SpidermanLight from "../../assets/spiderman-light.jpg"

const ImageCard = styled(Card)(({theme}:Props)=>({
    minHeight:"100%",
    backgroundImage:`url(${theme?.palette.mode === 'dark' ?SpidermanDark:SpidermanLight})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    marginRight:"-50px",
    "@media(max-width:800px)":{
      display:"none"
    }

  }))

export default ImageCard