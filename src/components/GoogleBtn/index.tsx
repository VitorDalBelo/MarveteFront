import { ReactNode, useContext, useEffect } from 'react';
import googleLogo from '../../assets/Google.svg'
import { AuthContext } from '../../providers/Auth/AuthContext';
import { AuthInfo } from '../../hooks/useAuth';
const popupCenter = ({url, title, w, h}: any) : Window => {
    // Fixes dual-screen position                             Most browsers      Firefox
    const dualScreenLeft = window.screenLeft !==  undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop !==  undefined   ? window.screenTop  : window.screenY;
  
    const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
  
    const systemZoom = width / window.screen.availWidth;
    const left = (width - w) / 2 / systemZoom + dualScreenLeft
    const top = (height - h) / 2 / systemZoom + dualScreenTop
    const newWindow = window.open(url, title, 
      `
      scrollbars=yes,
      width=${w / systemZoom}, 
      height=${h / systemZoom}, 
      top=${top}, 
      left=${left}
      `
    )
    return newWindow as Window
  }
const handleClickAbrirNovaJanela = () => {
    const url = "https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&access_type=offline&include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri=http%3A//localhost:5173/src/assets/oauthPage.html&client_id=295328282044-830m6t8dee0oh8e0hpev0p47hk0rvsu1.apps.googleusercontent.com&prompt=select_account"
    var width = 500;
    var height = 500;
    popupCenter({url,title:"googleScreen", w:width,h:height})
  };

interface GoogleProps{
  mode?:"login"|"signup"
  children:ReactNode
}
 
export default function GoogleBtn({mode,children}:GoogleProps){
  const {handleGoogleLogin} = useContext(AuthContext) as AuthInfo;
  useEffect(()=>{
    const getOauthToken = (event: MessageEvent<any>) => {
        if(event.data && event.data.source == "oauth-window" && event.data.code) {
          handleGoogleLogin(event.data.code,mode);
        }
    }
    window.addEventListener('message',getOauthToken);

    return () => {
        window.removeEventListener("message", getOauthToken);
    };
    
  },[])
    return(
        <button 
            style={{
            border:"1px solid #7C838A",
            borderRadius:15,
            color:"#7C838A",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            padding:"3px 7px",
            fontSize:16,
            fontWeight:500,
            cursor:"pointer"
            }}
            onClick={() => handleClickAbrirNovaJanela()}>
            <img src={googleLogo} style={{width:25}} alt="logo google" />
            {children}
        </button>
    )
}