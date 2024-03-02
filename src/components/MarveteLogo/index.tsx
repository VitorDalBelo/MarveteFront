import { Theme, styled } from "@mui/material";
interface Props{
    theme?:Theme
}
const MarvelLogo = styled("div")(({theme}:Props)=>({
    fontFamily: "'Oswald', sans-serif !important",
    fontWeight: "700 !important",
    backgroundColor:theme?.palette.secondary.main,
    padding:"3px 7px",
    color: theme?.palette.primary.main,
    letterSpacing:"-2px !important",
    margin:"0px ",
    userSelect: "none"
}))


export default MarvelLogo