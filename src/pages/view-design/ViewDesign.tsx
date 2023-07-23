import './ViewDesign.css'; import { SizeSelect } from '../../components/viewdesign/sizing/SizeSelect'
import { useState } from 'react';
import { useParams } from 'react-router';
import shoeDesigns from '../../data/shoeDesigns.json';
import { Description } from '../../components/viewdesign/description/Description';
import { useNavigate } from 'react-router-dom';
import { t } from '../../utils/LanguageSelect'

interface viewDesignProps {
    customId: number // if -1 then not custom
}

export function ViewDesign(props : viewDesignProps) {

    const lang = localStorage.getItem("lang")
    const navigate = useNavigate();
    const { shoeId } = useParams<{ shoeId: string }>();
    const [selectedSize, selectSize] = useState<number>(0);

    if (shoeId === undefined) {
        return <div className="design-view-error">Sorry, data for that shoe was not found! Please return to your previous page or click a button on the navbar.</div>; // Handle the case when shoe data is not found
    }
    const parsedShoeId = parseInt(shoeId, 10);
    const shoeData = shoeDesigns.items.find((item) => item.id === parsedShoeId);

    if (!shoeData) {
        return <div className="design-view-error">Sorry, data for that shoe was not found! Please return to your previous page or click a button on the navbar.</div>; // Handle the case when shoe data is not found
    }
    const image = require(`../../images/${shoeData.image}`)
    const containerStyle: React.CSSProperties = {
        backgroundImage: `url(${image})`,
    };

    const redirectDesignPage = () => {
        if (props.customId === -1) {
            navigate(`/design/${shoeData.id}/${selectedSize}`);
        } else {
            navigate(`/design/${shoeData.id}/${selectedSize}/${props.customId}`);
        }
    }

    const continueButtonClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();

        if (selectedSize === 0) {
            // render pop-up somehow
            //
        } else {
            redirectDesignPage();
        }
    }

    const isCustomDesign = () => {
        if (props.customId !== -1) {
            return <>Community Custom </>

        }
    }

    /*const miniPreview = () => {
        return <>
            <div className="design-mini-preview"></div>
        </>
    }*/

    const continueButtonText = () => {
        if (selectedSize === 0) {
            return <>{t(lang, "Pick a size!", "Choisissez une taille!")}</>
        }
        return <>{t(lang, "Continue", "Continuer")}</>
    }

    return <>
        <div className="design-view">
            <div className="design-view-flex">

                <div className="design-view-image-side">
                    <div className="design-image-side-flex">
                        <div className="design-image-section-container" style={containerStyle}>
                        </div>
                        {/* Maybe I'll implement this one day
                        <div className="design-image-previews-section">
                            {miniPreview()}
                            {miniPreview()}
                            {miniPreview()}
                            {miniPreview()}
                        </div>
                        */}
                    </div>
                    <Description description={shoeData.description} />
                </div>

                <div className="design-view-info-side">
                    <div className="design-view-name-text">
                        {isCustomDesign()} {shoeData.name}
                    </div>
                    <div className="design-view-style-text">
                        {shoeData.style}
                    </div>
                    <div className="design-view-price-text">
                        {shoeData.price}$
                    </div>
                    <div className="design-view-select-text">
                        {t(lang , "Select your size", "Sélectionnez votre taille")}
                    </div>

                    <SizeSelect selectSize={selectSize} selectedSize={selectedSize} />

                    <div onClick={continueButtonClick} className="design-view-continue-button">
                        <div className="design-view-continue-button-text">
                            {continueButtonText()}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>

}
