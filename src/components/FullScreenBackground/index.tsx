import { Theme } from '@mui/material';
import { styled } from '@mui/system';


interface Props{
    theme?:Theme
    src:string
}

const FullScreenBackground = styled('div')(({theme,src}:Props)=>{
   
    return ({
        position: 'fixed',
        top:  0,
        left:  0,
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${src})`,
        filter: theme?.palette.mode=='dark'?"grayscale(1)":"unset",
        backgroundPositionX:'center',
        backgroundPositionY:"top",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        zIndex: -1, // Certifique-se de que o fundo fique atrás de outros elementos
    })
});

export default FullScreenBackground;