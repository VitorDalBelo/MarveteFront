import { ReactNode } from "react";
import FullScreenBackgroundColor from "../../components/FullScreenBackgroundColor";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import Footer from "../../components/Footer";

export default function LoggedLayout({children}:{children:ReactNode}){

    return(
        <>
            <FullScreenBackgroundColor/>
            <ResponsiveAppBar/>
            {children}
            <Footer/>
        </>
    )

}