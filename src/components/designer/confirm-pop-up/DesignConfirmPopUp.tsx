import "./DesignConfirmPopUp.css"
import { useNavigate } from 'react-router-dom';
import { t } from '../../../utils/LanguageSelect'
// need to move this to different subfolder
export function DesignConfirmPopUp() {
    const lang = localStorage.getItem("lang")
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
                    {t(lang, "Your design has been added to cart", "Votre design a été ajouté au panier")}
                </div>
                <div className="design-confirm-button-section">
                    <div className="design-confirm-butt">
                        <div onClick={goToCollections} className="design-confirm-butt-text">
                            {t(lang, "Continue shopping", "Continuer achats")}
                        </div>
                    </div>
                    <div onClick={goToCart} className="design-confirm-butt">
                        <div className="design-confirm-butt-text">
                            {t(lang, "Go to cart", "Allez au panier")}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>

}
