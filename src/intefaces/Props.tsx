import { Theme } from "@mui/material";
import { ReactNode } from "react";

export default interface Props{
    theme?:Theme
  }


export interface PropsChildren{
  children: ReactNode;
}