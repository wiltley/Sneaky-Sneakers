import './ViewDesign.css'; import { SizeSelect } from '../../components/viewdesign/sizing/SizeSelect'
import { useState } from 'react';
import { useParams } from 'react-router';
import shoeDesigns from '../../data/shoeDesigns.json';
import { Description } from '../../components/viewdesign/description/Description';
import { useNavigate } from 'react-router-dom';

export function ViewDesign() {

    const navigate = useNavigate();
    const { shoeId } = useParams<{ shoeId: string }>();
    const [selectedSize, selectSize] = useState<number>(0);

    if (shoeId === undefined) {
        return <div>Shoe data not found.</div>; // Handle the case when shoe data is not found
    }
    const parsedShoeId = parseInt(shoeId, 10);
    const shoeData = shoeDesigns.items.find((item) => item.id === parsedShoeId);

    if (!shoeData) {
        return <div>Shoe data not found.</div>; // Handle the case when shoe data is not found
    }

    const redirectDesignPage = () => {
        navigate(`/design/${shoeData.id}/${selectedSize}`);
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

    const miniPreview = () => {
        return <>
            <div className="design-mini-preview"></div>
        </>
    }

    return <>
        <div className="design-view">
            <div className="design-view-flex">

                <div className="design-view-image-side">
                    <div className="design-image-side-flex">
                        <div className="design-image-section-container">
                        </div>
                        <div className="design-image-previews-section">
                            {miniPreview()}
                            {miniPreview()}
                            {miniPreview()}
                            {miniPreview()}
                        </div>
                    </div>
                    <Description description={shoeData.description} />
                </div>

                <div className="design-view-info-side">
                    <div className="design-view-name-text">
                        {shoeData.name}
                    </div>
                    <div className="design-view-style-text">
                        {shoeData.style}
                    </div>
                    <div className="design-view-price-text">
                        {shoeData.price}$
                    </div>
                    <div className="design-view-select-text">
                        Select your size
                    </div>

                    <SizeSelect selectSize={selectSize} selectedSize={selectedSize} />

                    <div onClick={continueButtonClick} className="design-view-continue-button">
                        <div className="design-view-continue-button-text">
                            Continue
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>

}
