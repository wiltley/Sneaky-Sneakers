import './ViewDesign.css';
import { SizeSelect } from '../../components/viewdesign/sizing/SizeSelect'
export function ViewDesign() {

    return <>
        <div className="design-view">
            <div className="design-view-flex">

                <div className="design-view-image-side">
                    <div className="design-image-side-flex">
                        <div className="design-image-section-container">
                        </div>
                        <div className="design-image-previews-section">
                        </div>
                    </div>
                </div>

                <div className="design-view-info-side">
                    <div className="design-view-name-text">
                        Lorem ipsum dolor
                    </div>
                    <div className="design-view-style-text">
                       Style
                    </div>
                    <div className="design-view-price-text">
                       300$ 
                    </div>
                    <div className="design-view-select-text">
                       Select your size
                    </div>

                    <SizeSelect />

                    <div className="design-view-continue-button"> 
                        <div className="design-view-continue-button-text">
                            Continue
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>

}
