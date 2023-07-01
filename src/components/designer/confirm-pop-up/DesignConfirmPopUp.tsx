import "./DesignConfirmPopUp.css"
import { useNavigate } from 'react-router-dom';
// need to move this to different subfolder
export function DesignConfirmPopUp() {

    const navigate = useNavigate();

    const goToCart = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        navigate(`/cart`);
    }
    const goToCollections = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        navigate(`/collections`);
    }

    return <>
        <div className="design-confirm-popup">
            <div className="design-confirm-modal">
                <div className="design-confirm-text">
                    Your design has been added to cart
                </div>
                <div className="design-confirm-button-section">
                    <div className="design-confirm-butt">
                        <div onClick={goToCollections} className="design-confirm-butt-text">
                            Continue shopping
                        </div>
                    </div>
                    <div onClick={goToCart} className="design-confirm-butt">
                        <div className="design-confirm-butt-text">
                            Go to cart
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>

}
