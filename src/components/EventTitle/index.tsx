import { styled } from '@mui/system';


const EventTitle = styled('div')(()=>{
   
    return ({
        color: "white",
        backgroundColor: "rgba(34,34,34,0.9)",
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