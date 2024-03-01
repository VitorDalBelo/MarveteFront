import { ReactNode } from "react";
import FullScreenBackgroundColor from "../../components/FullScreenBackgroundColor";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";

export default function LoggedLayout({children}:{children:ReactNode}){

    return(
        <>
            <FullScreenBackgroundColor/>
            <ResponsiveAppBar/>
            <div style={{marginTop:64}}>
                {children}
            </div>
        </>
    )

}