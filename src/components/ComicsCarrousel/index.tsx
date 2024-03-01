import React, {useEffect} from "react"
import { useKeenSlider ,TrackSlidesConfigOption } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import {breakpoint} from './comicsCarousel'
import Arrow from "./Arrow"
import Dots from "./Dots"
import Dot from "./Dot"

interface propsCarousel{
   children : React.ReactNode,
   breakpoints?: breakpoint,
   initial?: number,
   loop?:
     | boolean
     | {
         min?: number
         max?: number
       },
  drag?: boolean,
  slides?:
  | ((size: number, slides: HTMLElement[]) => TrackSlidesConfigOption)
  | number
  | {
      origin?: 'center' | 'auto' | number
      number?: number | (() => number | null) | null
      perView?: 'auto' | number | (() => number | 'auto')
      spacing?: number | (() => number)
    }
  | null,
  disabled ?: boolean,
  arrows ?: boolean,
  autopass ?: boolean,
  dots ?: boolean,
}
const functionAutoPass =     (slider : any) => {
  let timeout: ReturnType<typeof setTimeout>
  let mouseOver = false
  function clearNextTimeout() {
    clearTimeout(timeout)
  }
  function nextTimeout() {
    clearTimeout(timeout)
    if (mouseOver) return
    timeout = setTimeout(() => {
      slider.next()
    }, 3000)
  }
  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true;
      clearNextTimeout();
      
    })

    slider.container.addEventListener("mouseout", () => {
      mouseOver = false
      nextTimeout()
    })
    nextTimeout()
  })
  slider.on("dragStarted", clearNextTimeout)
  slider.on("animationEnded", nextTimeout)
  slider.on("updated", nextTimeout)
}



export default function ComicsCarrousel(props : propsCarousel) {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: typeof props.loop== 'boolean'?props.loop : true,
    initial: typeof props.initial== 'number'?props.initial :0,
    drag:typeof props.drag== 'boolean'?props.drag :!props.arrows,
    disabled:typeof props.disabled== 'boolean'?props.disabled :false,
    slides: props.slides ?props.slides :{
      number:20,
      origin:'center',
      perView:15,
      
    },
    breakpoints: props.breakpoints,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },

  }, props.autopass?[functionAutoPass]:[])
   
  useEffect(()=>{instanceRef.current?.update()},[props.children]);

  return (
    <>
    
      <div style={{position:"relative"}}>
        {props.children?
        <div ref={sliderRef}  className={`keen-slider ${props.drag?'grabbable':''}`}>
          
          {
          props.children
          }
        </div>:''
        }
        {props.arrows  &&
          
          <>
            
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }

            />
          </>
        }

      </div>
      { props.dots  && (
          <Dots>
            {[
              ...Array(instanceRef.current?.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <Dot
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx)
                  }}
                  active={currentSlide === idx}
                ></Dot>
              )
            })}
          </Dots>
        )}

    </>
  )
}

