import { useContext } from 'react'
import marvelBackground from '../../assets/marvel-background-web.webp'
import FullScreenBackground from '../../components/FullScreenBackground'
import { IconButton, styled, useTheme } from '@mui/material'
import SpidermanLight from '../../assets/spiderman-light.jpg'
import SpidermanDark from '../../assets/teste.jpg'
import { ColorModeContext } from '../../providers/ThemeContext'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Props from '../../intefaces/Props'
import FormLogin from '../../components/FormLogin'
import GoogleBtn from '../../components/GoogleBtn'



export default function Login() {
  
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const ScreenContent = styled('div')(()=>({
    width:"100%",
    height:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"

  }))
  const Card = styled("div")(({theme}:Props)=>({
    backgroundColor:theme?.palette.background.default,
    borderRadius:"25px",
    overflow:"hidden",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    padding:"2.5rem 3.2rem",
    position:"relative",
    color:theme?.palette.text.primary,
    "@media(min-width:440px)":{
      width:320,
    }

  }))

  const ImageCard = styled(Card)(()=>({
    minHeight:"100%",
    backgroundImage:`url(${theme.palette.mode === 'dark' ?SpidermanDark:SpidermanLight})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    marginRight:"-50px",
    "@media(max-width:800px)":{
      display:"none"
    }

  }))

  const RightConnor = styled(IconButton)(()=>({
    position:"absolute",
    top:5,
    right:5
  }))

  const Divider = styled("span")(({theme}:Props)=>({
    fontSize:25,
    fontWeight:500,
    color:theme?.palette.divider,
    marginTop:40,
    marginBottom:15
  }))

  return (
    <>
      <FullScreenBackground src={marvelBackground} />
      <ScreenContent>
        <div style={{height:"fit-content",display:"flex"}}>
        <ImageCard/>
        <Card>
          <RightConnor sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </RightConnor>
          <FormLogin/>
          <Divider>- OR -</Divider>
          <GoogleBtn/>
        </Card>
        </div>
      </ScreenContent>

    </>
  )
}
