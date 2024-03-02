import { Number1, Number10, Number2, Number3, Number4, Number5, Number6, Number7, Number8, Number9 } from "./Numbers";

interface NumberProps{
    number: number
}
export function NumberRank(props : NumberProps) {
    function renderSwitch() : JSX.Element{
        switch (props.number) {
            case 1:
                return <Number1/>;
            case 2:
                return <Number2/>;
            case 3:
                return <Number3/>;
            case 4 :
                return <Number4/>;
            case 5 :
                return <Number5/>;
            case 6 :
                return <Number6/>;
            case 7:
                return <Number7/>;
            case 8:
                return <Number8/>;
            case 9:
                return <Number9/>;
            case 10:
                return <Number10/>;
            default:
                return <Number1/>;
        }

      
    }

    return (
        <>
        
            {renderSwitch()}

        </>
    )
}