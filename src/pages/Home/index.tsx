import { styled } from "@mui/material";
import ComicsCarrousel from "../../components/ComicsCarrousel";
import { charactersCarouselEndpoitsConfig, comicsCarouselEndpoitsConfig, rankingConfig } from "../../components/ComicsCarrousel/comicsCarousel";
import EventTitle from "../../components/EventTitle";
import characters from "../../mocks/characters";
import events from "../../mocks/events";
import Props from "../../intefaces/Props";
import * as comicsMoks from "../../mocks/comics";
import { formatDate } from "../../helpers";
import illuminati from "../../mocks/illuminati";
import capmarvel from "../../mocks/capmarvel";
import topten from "../../mocks/topten";
import { NumberRank } from "../../components/NumberRank";
import { useEffect, useState } from "react";
import api from "../../services/api";

const SectionTitle = styled("h1")(({theme}:Props)=>({
    color:theme?.palette.text.primary,
    marginBottom:5,
    fontWeight:600,
    maxWidth:"100%",
    fontSize:18,
    userSelect: "none"
}))


const Comicsdesc = styled("div")(()=>({
    color: "white",
    backgroundColor: "rgba(34,34,34,0.9)",
    width: "150px",
    height: 0,
    position:"absolute",
    bottom:0,
    zIndex:1,
    transition: "height 0.5s",

    "& span":{
        display:"block",
        fontSize: 12
    }
}))

const EventSlide = styled("div")(()=>({
    display:"flex",
    // paddingBottom:60,
    overflow:"unset !important",
    justifyContent:"center"
}))

const Comic = styled("div")(()=>({
    "&:hover > div ":{
        height: "100%",
        borderTop: "1px solid red"
    },
    "& img": {
        position:"relative" ,
        zIndex: 0
    }
}))

const MarvelImg = styled("img")(({theme}:Props)=>({
    width:'100%',
    borderRadius:"100%",
    border:`3px solid ${theme?.palette.secondary.main}`
}))

const ComicsSection = styled("section")(()=>({margin:"0.5vh 0"}))

export default function Home(){
    const [comics,setComics] = useState<Array<any>>([])
    useEffect(()=>{
        api.get("/comics")
        .then(response=>setComics(response.data))
        .catch(()=>setComics(comicsMoks.default))
        
    },[])

    return(
        <>
        <ComicsCarrousel 
        dots={true}
        autopass={true}
        loop={true} 
        drag={true}
        slides={{number:events.length,perView:1,origin:0}} 
        arrows={true} >
        {
            events.map((event)=>(
                
                <div className="keen-slider__slide " style={{maxHeight:'75vh'}} key={event.id}>
                    {/* <img className='bannerImg' style={{width:'100%',height:"auto"}} src={event.img} alt="" /> */}
                    <div style={{
                        width:"100%",
                        height:"65vh",
                        backgroundImage:`url(${event.img})`,
                        backgroundSize:'cover',
                        backgroundRepeat:'no-repeat',
                        backgroundPosition:'center'
                    }} ></div>
                    <EventTitle>
                        <span>{event.title}</span>
                    </EventTitle>
                </div>
              ))
            }
        </ComicsCarrousel>
        <div style={{padding:"0 1.5%"}}>
            <ComicsSection>
                <SectionTitle>EXPLORE BY CHARACTER</SectionTitle>
                <ComicsCarrousel 
                breakpoints={charactersCarouselEndpoitsConfig} 
                slides={{perView:11,spacing:10, origin:'center'}}
                arrows={true}
                drag={true}>
                    {characters.length>0?
                        characters.map(character=>(
                            character.thumbnail?.path=="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"?'':
                            <div  className="keen-slider__slide " key={String(character.id)} style={{display:"flex",justifyContent:"center"}}>
                            <div className='character' title={character.name} >
                                <MarvelImg src={`${character.thumbnail?.path}/standard_medium.${character.thumbnail?.extension}`} alt="" />
                            </div>
                            </div>
                        )):""
                        
                        }
                </ComicsCarrousel>
            </ComicsSection>
            <ComicsSection>
                <SectionTitle>LATEST COMICS</SectionTitle>
                <ComicsCarrousel drag={true} arrows={true} breakpoints={comicsCarouselEndpoitsConfig}>
                {comics.length>0?
                        comics.map(comic=>(
                        <div className="keen-slider__slide " key={String(comic.id)}>
                            <Comic className='comic'>

                            <img src={`${comic.thumbnail?.path}/portrait_xlarge.${comic.thumbnail?.extension}`} alt="" />
                            <Comicsdesc>
                            <>
                                <h6>{comic.title}</h6>
                                <span>{`format: ${comic.format}`}</span>
                                <span>{`date: ${formatDate(comic.dates[0]?.date)}`}</span>
                                <span>{`price:$ ${comic.prices[0].price}`}</span>
                                <span>{`number of pages: ${comic.pageCount}`}</span>
                            </>
                            </Comicsdesc>
                            </Comic>
                        </div>
                        )):""
                }
            </ComicsCarrousel>
    
            </ComicsSection>
            <ComicsSection style={{margin:"30px 0"}}>
                <SectionTitle>MARVEL'S EVENTS TOP 10</SectionTitle>
                <ComicsCarrousel breakpoints={rankingConfig} drag={true} arrows={true} slides={{number:10,perView:10,spacing:4}}>
                {topten.map((item,index)=>(
                        <EventSlide className="keen-slider__slide " key={String(item.id)}>
                            <NumberRank number={index+1}/>
                            <img  src={item.img} alt={item.title} />
                        </EventSlide>
                        ))
                }
                </ComicsCarrousel>
            </ComicsSection>
            <ComicsSection>
                <SectionTitle>COMICS WITH ILLUMINATI</SectionTitle>
                <ComicsCarrousel drag={true} arrows={true} breakpoints={comicsCarouselEndpoitsConfig}>
                {illuminati.length>0?
                        illuminati.map(comic=>(
                        <div className="keen-slider__slide " key={String(comic.id)}>
                            <Comic className='comic'>

                            <img src={`${comic.thumbnail?.path}/portrait_xlarge.${comic.thumbnail?.extension}`} alt="" />
                            <Comicsdesc>
                            <>
                                <h6>{comic.title}</h6>
                                <span>{`format: ${comic.format}`}</span>
                                <span>{`date: ${formatDate(comic.dates[0]?.date)}`}</span>
                                <span>{`price:$ ${comic.prices[0].price}`}</span>
                                <span>{`number of pages: ${comic.pageCount}`}</span>
                            </>
                            </Comicsdesc>
                            </Comic>
                        </div>
                        )):""
                }
                </ComicsCarrousel>
            </ComicsSection>
            <ComicsSection>
                <SectionTitle>{"COMICS WITH CAPTAIN MARVEL(CAROL DANVERS)"}</SectionTitle>
                <ComicsCarrousel drag={true} arrows={true} breakpoints={comicsCarouselEndpoitsConfig}>
                {capmarvel.length>0?
                        capmarvel.map(comic=>(
                        <div className="keen-slider__slide " key={String(comic.id)}>
                            <Comic  className='comic'>

                            <img src={`${comic.thumbnail?.path}/portrait_xlarge.${comic.thumbnail?.extension}`} alt="" />
                            <Comicsdesc>
                            <>
                                <h6>{comic.title}</h6>
                                <span>{`format: ${comic.format}`}</span>
                                <span>{`date: ${formatDate(comic.dates[0]?.date)}`}</span>
                                <span>{`price:$ ${comic.prices[0].price}`}</span>
                                <span>{`number of pages: ${comic.pageCount}`}</span>
                            </>
                            </Comicsdesc>
                            </Comic>
                        </div>
                        )):""
                }
                </ComicsCarrousel>
            </ComicsSection>
        </div>
        </>
    )
}