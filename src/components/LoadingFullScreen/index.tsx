import { Backdrop, CircularProgress, styled } from "@mui/material";
import Props from "../../intefaces/Props";

const MarveteBackdrop = styled(Backdrop)(({theme}:Props)=>({
    color: theme?.palette.secondary.main,
    backgroundColor:theme?.palette.background.default, 
    zIndex: 2
}))

export default function LoadingFullScreen(){
    return(
        <MarveteBackdrop open={true}>
            <CircularProgress color="inherit" />
        </MarveteBackdrop>
    )
}