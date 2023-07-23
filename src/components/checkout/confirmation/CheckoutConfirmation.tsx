import './CheckoutConfirmation.css'
import { useNavigate } from 'react-router-dom';
import { t } from '../../../utils/LanguageSelect'

interface checkoutConfirmationProps {
    name: string
    email: string;
}

export function CheckoutConfirmation(props: checkoutConfirmationProps) {
    const lang = localStorage.getItem("lang");
    const navigate = useNavigate();

    const onClick = (event : React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault()
        navigate(`/`);
    }
    return <>
        <div className="checkout-confirmation">
            <div className="checkout-confirmation-modal">
                <div className="checkout-confirmation-text">
                    {t(lang, "Your", "Votre")} ({props.name}) {t(lang, "purchase has been succesfully completed.", "achat a été complété avec succès.")}<br/>
                    {t(lang, "The receipt has been sent to your email:", "")} {props.email}.
                </div>
                <div className="checkout-confirmation-button-section">
                    <div onClick={onClick} className="checkout-confirmation-butt">
                        <div className="checkout-confirmation-butt-text">
                            {t(lang, "Go to Home", "Retour au page d'accueil")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
