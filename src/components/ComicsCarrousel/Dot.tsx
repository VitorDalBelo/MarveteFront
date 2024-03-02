import { styled } from "@mui/material";

interface ProspsDot{
    active?:boolean
}

const Dot = styled('button')(({active}:ProspsDot)=>({
    border: "none",
    width: "10px",
    height: "10px",
    background: active ? '#000' : "#c5c5c5",
    borderRadius: "50%",
    margin: "0 5px",
    padding: "5px",
    cursor: "pointer",
    "&:focus":{
        outline: "none"
    }
}))


export default Dot







