import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CancelIcon from '@mui/icons-material/Cancel';


export default function Oauth(){
    const location = useLocation();
    const [erros,setErros] = useState<boolean>(false);

    useEffect(()=>{
        console.log("teste aswd")
        const qparams = new URLSearchParams(location.search);
        const code = qparams.get("code")
        if(code) {
            window.opener.postMessage({source:"oauth-window",code}, '*');
            // window.close();
        }
        else setErros(true)
    },[])
    return(
        <>
        <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            {erros? <CircularProgress style={{color:"#FFFFFF"}}/> :
            <>
                <CancelIcon style={{fontSize:80}}/>
                <h1 style={{fontSize:30}}>Não foi possível fazer a autenticação com o google</h1>
            </>
            }
        </div>
        </>
    )
}