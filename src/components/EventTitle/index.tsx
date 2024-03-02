import { styled } from '@mui/system';
import Props from '../../intefaces/Props';


const EventTitle = styled('div')(({theme}:Props)=>{
   
    return ({
        color: theme?.palette.text.primary,
        backgroundColor: theme?.palette.mode === 'dark' ? "rgba(34,34,34,0.9)": "rgba(255,255,255,0.9)",
        width: "100%",
        position: "absolute",
        bottom: 0,
        zIndex: 1,
        fontFamily: "'Inter', sans-serif !important",
        fontSize: "2rem",
        padding: 20,
    })
});

export default EventTitle;