import './CheckoutConfirmation.css'
import { useNavigate } from 'react-router-dom';

interface checkoutConfirmationProps {
    name: string
    email: string;
}

export function CheckoutConfirmation(props: checkoutConfirmationProps) {
    const navigate = useNavigate();

    const onClick = (event : React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault()
        navigate(`/`);
    }
    return <>
        <div className="checkout-confirmation">
            <div className="checkout-confirmation-modal">
                <div className="checkout-confirmation-text">
                    Your ({props.name}) purchase has been succesfully completed. <br/>
                    The receipt has been sent to your email: {props.email}.
                </div>
                <div className="checkout-confirmation-button-section">
                    <div onClick={onClick} className="checkout-confirmation-butt">
                        <div className="checkout-confirmation-butt-text">
                            Go to Home
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
