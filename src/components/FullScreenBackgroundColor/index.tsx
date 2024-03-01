import { Theme } from '@mui/material';
import { styled } from '@mui/system';


interface Props{
    theme?:Theme
}

const FullScreenBackgroundColor = styled('div')(({theme}:Props)=>{
   
    return ({
        position: 'fixed',
        top:  0,
        left:  0,
        width: '100vw',
        height: '100vh',
        backgroundColor: theme?.palette.background.default,
        filter: theme?.palette.mode=='dark'?"grayscale(1)":"unset",
        backgroundPositionX:'center',
        backgroundPositionY:"top",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        zIndex: -1,
    })
});

export default FullScreenBackgroundColor;