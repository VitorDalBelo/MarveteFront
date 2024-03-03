import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MarveteLogo from '../MarveteLogo';
import { styled } from '@mui/material';
import Props from '../../intefaces/Props';

const PageFooter = styled("footer")(({theme}:Props)=>({
    display: "flex",
    justifyContent:"center",
    padding:"10px 0",
    backgroundColor: theme?.palette.primary.main,
    
    "& h2":{
        color:theme?.palette.text.primary,
        fontSize:"1.7rem",
        fontFamily: "'Inter', sans-serif !important"
    },
    "& p":{
        maxWidth:"310px",
        color:theme?.palette.text.primary,
        textAlign:"center",
        marginTop:15
    },
    "& .contacts a":{
        textStyle:"underline",
        color:theme?.palette.text.primary
    },
    "& p a":{
        color:"red"
    },
    "& p a:hover,& p a:focus":{
        textDecoration:"underline"
    },
    "& .contacts":{
        color:"white",
        display:"flex",
        margin:"10px 0px",
        justifyContent:"center",
    },
    "& .contactInfo":{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        padding:5,
        border:"solid 1px transparent",
        
        
    },
    "& .contactInfo:hover ,& .contactInfo:focus":{
        color:theme?.palette.secondary.main,
        border:`solid 1px ${theme?.palette.secondary.main}`,
        borderRadius:5,
    }


}))


export default function Footer(){
    return(
        <PageFooter id="pageFooter">
            <div style={{textAlign:"center"}}>
            <MarveteLogo style={{fontSize:70}}>MARVETE</MarveteLogo>
            <h2 style={{userSelect: "none"}}>CONTACT ME !</h2>
            <div className="contacts">
                <a target='_blank' href='https://api.whatsapp.com/send?phone=11971432754' className='contactInfo'>
                    <WhatsAppIcon style={{fontSize:'2rem'}}/>
                    {/* <span>{'(11) 971432754'}</span> */}
                </a>
                <a target='_blank' href="mailto:vitoralmeida721@gmail.com" className='contactInfo'>
                    <AlternateEmailIcon style={{fontSize:'2rem'}}/>
                    {/* <span>{'vitoralmeida721@gmail.com'}</span> */}
                    
                </a>
                <a target='_blank' href='https://github.com/VitorDalBelo' className='contactInfo'>
                    <GitHubIcon style={{fontSize:'2rem'}}/>
                    {/* <span>{'github.com/VitorDalBelo'}</span> */}
                    
                </a>
                <a target='_blank' href='https://www.linkedin.com/in/vitor-almeida-dal-belo/' className='contactInfo'>
                    <LinkedInIcon style={{fontSize:'2rem' }}/>
                    {/* <span>{'linkedin.com/in/vitor-almeida-dal-belo/'}</span>    */}
                </a>
            </div>
            <p style={{userSelect: "none"}}>
                This site is a portfolio project by Vitor De Almeida Dal Belo and has no commercial purposes.The data presented comes from a  <a target='_blank' href='https://developer.marvel.com/'>Marvel API</a>
            </p>  
            </div>
        </PageFooter>
    );
}