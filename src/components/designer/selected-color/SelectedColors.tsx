import './SelectedColors.css'
import { DesignOptions } from '../../../pages/design/Design'
import { MiniColor } from './MiniColor';

interface selectedColorsProps {
    options : DesignOptions;
}

export function SelectedColors(props: selectedColorsProps) {

    return <>
        <div className="selected-colors">
            <div>
                <div className="selected-options-main">
                    Selected Options
                    <div className="selected-options-underline">
                    </div>
                </div>
            </div>
            <div>Sole: <MiniColor backgroundColor={props.options.sole}/> </div>
            <div>Laces: <MiniColor backgroundColor={props.options.laces}/> </div>
            <div>Toecap: <MiniColor backgroundColor={props.options.toecap}/> </div>
            <div>Outshoe: <MiniColor backgroundColor={props.options.outshoe}/> </div>
            <div>Tongue: <MiniColor backgroundColor={props.options.tongue}/> </div>
            <div>Collar: <MiniColor backgroundColor={props.options.collar}/> </div>
        </div>
    </>
}
