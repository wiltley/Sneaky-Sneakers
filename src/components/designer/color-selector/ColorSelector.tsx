import './ColorSelector.css'
import { Color } from './Color'

interface colorSelectorProps {
    setColor: Function;
}

export function ColorSelector(props : colorSelectorProps) {

    return <>
        <div className="color-selector">
            <Color setColor={props.setColor} backgroundColor="white"/>
            <Color setColor={props.setColor} backgroundColor="black"/>
            <Color setColor={props.setColor} backgroundColor="purple"/>
            <Color setColor={props.setColor} backgroundColor="orange"/>
            <Color setColor={props.setColor} backgroundColor="red"/>
            <Color setColor={props.setColor} backgroundColor="green"/>
            <Color setColor={props.setColor} backgroundColor="blue"/>
        </div>
    </>


}
