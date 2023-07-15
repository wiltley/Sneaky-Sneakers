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
                        <CheckoutTextfield tag="First Name" />
                        <CheckoutTextfield tag="Last Name"/>
                    </div>


                    <div className="checkout-double-textfield">
                        <div className="checkout-double-textfield-80">
                            <CheckoutTextfield tag="Billing Address" />
                        </div>

                        <div className="checkout-double-textfield-20">
                            <CheckoutTextfield tag="Postal Code"/>
                        </div>

                    </div>

                    <div className="checkout-double-textfield">
                        <CheckoutTextfield tag="Country"/>
                        <CheckoutTextfield tag="Province"/>
                    </div>

                    <div className="checkout-stage-box">
                        <div className="checkout-stage-text">
                            2. Contact Details
                        </div>
                    </div>

                    <CheckoutTextfield tag="Email"/>
                    <CheckoutTextfield tag="Phone Number"/>

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
