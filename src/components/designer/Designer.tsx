import './Designer.css';
import { useState } from 'react'
import { DesignOptions } from '../../types/types'

interface DesignerInfo {
    indicator: number;
    current: string;
    changeIndicator: Function;
    max: number;
}

export function Designer(props: DesignerInfo) {


    const changeRight = (event : React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        props.changeIndicator(1);
    }
    const changeLeft = (event : React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        props.changeIndicator(-1);
    }

    return <>
        <div className="designer">
            <div className="designer-main-info-area">
                <div onClick={changeLeft} className="designer-left-option-button"></div>
                <div className="designer-current-text">
                    <div className="designer-current-option">
                        {props.current}
                    </div>
                    <div className="designer-current-stage-indicator-text">
                        {props.indicator+1}/6
                    </div>
                </div>
                <div onClick={changeRight} className="designer-right-option-button"></div>
            </div>
        </div>
    </>

}
