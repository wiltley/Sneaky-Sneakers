import './Checkout.css'
import { CheckoutTextfield} from '../../components/checkout/textfield/CheckoutTextfield'
export function Checkout() {

    return <>
        <div className="checkout">
            <div className="checkout-flex">
                <div className="checkout-information-entry-side">
                    <div className="checkout-stage-box">
                        <div className="checkout-stage-text">
                            1. Shipping & Billing
                        </div>
                    </div>

                    <div className="checkout-double-textfield">
                        <CheckoutTextfield />
                        <CheckoutTextfield />
                    </div>

                    <div className="checkout-stage-box">
                        <div className="checkout-stage-text">
                            2. Contact Details
                        </div>
                    </div>
                    <div className="checkout-stage-box">
                        <div className="checkout-stage-text">
                            3. Payment Information
                        </div>
                    </div>
                </div>
                <div className="checkout-image-side">
                </div>
            </div>
        </div>
    </>

}
