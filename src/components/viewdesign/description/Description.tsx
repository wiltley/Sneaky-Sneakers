import './Description.css';
import upArrowImage from '../../../images/uparrow.png';
import downArrowImage from '../../../images/downarrow.png';
import { useState } from 'react';

interface descriptionProps {
    description: string;
}

export function Description(props: descriptionProps) {

    const [descriptionState, flipDescriptionState] = useState<boolean>(false);


    const switchArrowStyle = (): React.CSSProperties => {
        if (descriptionState) {
            return {
                backgroundImage: `url(${upArrowImage})`,
            };
        } else {
            return {
                backgroundImage: `url(${downArrowImage})`,
            };
        }
    }




    const onClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        if (descriptionState === true) {
            flipDescriptionState(false);
        } else {
            flipDescriptionState(true);
        }
    }

    return <>
        <div className="description">
            <div className="description-top-line">

            </div>

            <div className="description-header-text">
                Description
            </div>

            <div className={`description-content-text ${descriptionState === true ? `active` : ``}`}>
                {props.description}
            </div>

            <div onClick={onClick} className="description-toggle-button" style={switchArrowStyle()}>
            </div>

            <div className={`description-bottom-line ${descriptionState === true ? `active` : ``}`}>
            </div>
        </div>
    </>

}
