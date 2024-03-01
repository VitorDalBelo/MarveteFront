import { Theme, styled, useTheme } from "@mui/material"


const ArrowContainer = styled('svg')(()=>({
    width: 30,
    height: 30,
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
}))


export default function Arrow(props: {
    disabled?: boolean
    left?: boolean
    onClick: (e: any) => void
  }) {
    const theme = useTheme();

    return (
      <ArrowContainer
        onClick={props.onClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        style={{
            fill: props.disabled ? "rgba(255, 255, 255, 0.5)":theme.palette.text.primary,
            right: props.left ? "auto" : 5, 
            left: props.left ? 5 : "auto" 
        }}
      >
        {props.left && (
          <path style={{strokeWidth:1,stroke:theme.palette.background.default}} d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path style={{strokeWidth:1,stroke:theme.palette.background.default}} d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </ArrowContainer>
    )
  }