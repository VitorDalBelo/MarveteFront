import {KeenSliderOptions, KeenSliderHooks} from 'keen-slider'

export interface breakpoint {
    [key : string] : Omit<KeenSliderOptions<{}, {}, KeenSliderHooks>, "breakpoints"> 
}

export const comicsCarouselEndpoitsConfig : breakpoint  = {
    '(max-width: 2325px)': {
      slides:{
        perView:14,
        origin:'center',
      },
    },
    '(max-width: 2148px)': {
      slides:{
        perView:13,
        origin:'center',
      },
    },
    '(max-width: 2014px)': {
      slides:{
        perView:12,
        origin:'center',
      },
    },
    '(max-width: 1860px)': {
      slides:{
        perView:11,
        origin:'center',
      },
    },
    '(max-width: 1688px)': {
      slides:{
        perView:10,
        origin:'center',
      },
    },
    '(max-width: 1545px)': {
      slides:{
        perView:9,
        origin:'center',
      },
    },
    '(max-width: 1400px)': {
      slides:{
        perView:8,
        origin:'center',
      },
    },
    '(max-width: 1225px)': {
      slides:{
        perView:7,
        origin:'center',
      },
    },
    '(max-width: 1064px)': {
      slides:{
        perView:6,
        origin:'center',
        
      },
    },
    '(max-width: 945px)': {
      slides:{
        perView:5
      },
    },
    '(max-width: 783px)': {
      drag:true,
      slides:{
        origin:'center',
        perView:4
      },
    },

    '(max-width: 620px)': {
      drag:true,
      slides:{
        origin:'center',
        perView:3
      },
    },
    '(max-width: 460px)': {
      drag:true,
      slides:{
        origin:'center',
        perView:2
      },
    },

  }

export const charactersCarouselEndpoitsConfig : breakpoint = {
  '(max-width: 1658px)': {
    slides:{
      perView:9,
      spacing:10
    },
  },
  '(max-width: 1490px)': {
    slides:{
      perView:8,
      spacing:10
    },
  },
  '(max-width: 1328)': {
    slides:{
      perView:7,
      spacing:10
    },
  },
  '(max-width: 1296px)': {
    slides:{
      perView:6,
      spacing:10
    },
  },
  '(max-width: 1000px)': {
    slides:{
      perView:5,
      spacing:8
    },
  },
  '(max-width: 816px)': {
    slides:{
      perView:4,
      spacing:8
    },
  },
  '(max-width: 652px)': {
    slides:{
      perView:3,
      spacing:6
    },
  },
  '(max-width: 484px)': {
    slides:{
      perView:2,
      spacing:6
    },
  },
}

export const rankingConfig : breakpoint = {
  '(max-width: 2149px)': {
    slides:{
      number:10,
      perView:8,
      spacing:4,
    }
  },
  '(max-width: 1625px)': {
    slides:{
      number:10,
      perView:7,
      spacing:4,
    }
  },
  '(max-width: 1480px)': {
    slides:{
      number:10,
      perView:6,
      spacing:4,
      
      
    }
  },
  '(max-width: 1140px)': {
    slides:{
      number:10,
      perView:5,
      spacing:4,
    }
  },
  '(max-width: 890px)': {
    slides:{
      number:10,
      perView:4,
      spacing:4,
    },
    drag:true,
  },

  '(max-width: 660px)': {
    slides:{
      number:10,
      perView:3,
      spacing:2,
    },
    drag:true,
  },

  '(max-width: 500px)': {
    slides:{
      number:10,
      perView:2,
      spacing:1,
      origin:'center'
    },
    drag:true,
  },

}