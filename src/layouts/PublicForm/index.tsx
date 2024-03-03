import { ReactNode } from "react";
import FullScreenBackground from "../../components/FullScreenBackground";
import ScreenContent from "../../components/ScreenContent"
import marvelBackground from '../../assets/marvel-background-web.webp'
import ImageCard from "../../components/ImageCard";
import Card from "../../components/Card";

export default function PublicForm({children}:{children:ReactNode}){

    return(
        <>
            <FullScreenBackground src={marvelBackground} />
            <ScreenContent>
                <div style={{height:"fit-content",display:"flex"}}>
                    <ImageCard/>
                    <Card>
                        {children}
                    </Card>
                </div>
            </ScreenContent>
        </>
    )

}