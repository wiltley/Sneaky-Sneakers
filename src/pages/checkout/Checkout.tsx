import './Checkout.css'
import { useState } from 'react'
import { CheckoutTextfield } from '../../components/checkout/textfield/CheckoutTextfield'
import { CheckoutConfirmation } from '../../components/checkout/confirmation/CheckoutConfirmation'

// You see, I could do input validation for this, but I'm too lazy
interface fieldInputs {
    firstName: string;
    lastName: string;
    email: string;
}

export function Checkout() {
    const [fieldInput, setFieldInput] = useState<fieldInputs>({
        firstName: "",
        lastName: "",
        email: ""
    })

    const [confirmationModalState, setConfirmationModalState] = useState<boolean>(false)

    const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault()

        if(fieldInput.firstName === "" || fieldInput.lastName === "" || fieldInput.email === "") {
            return;
        } else {
            // show modal
            setConfirmationModalState(true)
        }
    }

    const updateField = (field: string, value: string) => {

        switch (field) {
            case ("First Name"):
                setFieldInput((prev) => ({
                    ...prev,
                    firstName: value
                }))
                break;
            case ("Last Name"):
                setFieldInput((prev) => ({
                    ...prev,
                    lastName: value
                }))
                break;
            case ("Email"):
                setFieldInput((prev) => ({
                    ...prev,
                    email: value
                }))
                break;
        }

    }

    const completeButtonText = () => {

        if(fieldInput.firstName === "" || fieldInput.lastName === "" || fieldInput.email === "") {
            return <> Incomplete Fields! </>
        }
        return <> Complete </>
    }

    const showConfirmationModal = () => {

        if (confirmationModalState) {
            return <>
                <CheckoutConfirmation name={fieldInput.firstName + " " + fieldInput.lastName} email ={fieldInput.email}/>
            </>
        }

    }

    return <>
        {showConfirmationModal()}
        <div className="checkout">
            <div className="checkout-flex">
                <div className="checkout-information-entry-side">
                    <div className="checkout-stage-box">
                        <div className="checkout-stage-text">
                            1. Shipping & Billing
                        </div>
                    </div>

                    <div className="checkout-double-textfield">
                        <CheckoutTextfield tag="First Name" updateField={updateField} />
                        <CheckoutTextfield tag="Last Name" updateField={updateField} />
                    </div>


                    <div className="checkout-double-textfield">
                        <div className="checkout-double-textfield-80">
                            <CheckoutTextfield tag="Billing Address" updateField={undefined} />
                        </div>

                        <div className="checkout-double-textfield-20">
                            <CheckoutTextfield tag="Postal Code" updateField={undefined} />
                        </div>

                    </div>

                    <div className="checkout-double-textfield">
                        <CheckoutTextfield tag="Country" updateField={undefined} />
                        <CheckoutTextfield tag="Province" updateField={undefined} />
                    </div>

                    <div className="checkout-stage-box">
                        <div className="checkout-stage-text">
                            2. Contact Details
                        </div>
                    </div>

                    <div className="checkout-margin-bottom">
                        <CheckoutTextfield tag="Email" updateField={updateField} />
                        <CheckoutTextfield tag="Phone Number" updateField={undefined} />
                    </div>

                    <div className="checkout-stage-box">
                        <div className="checkout-stage-text">
                            3. Payment Information
                        </div>
                    </div>

                    <div className="checkout-double-textfield">
                        <CheckoutTextfield tag="Card Holder First Name" updateField={undefined} />
                        <CheckoutTextfield tag="Card Hodler Last Name" updateField={undefined} />
                    </div>

                    <CheckoutTextfield tag="Credit/Debard Card #" updateField={undefined} />

                    <div className="checkout-double-textfield">
                        <div className="checkout-double-textfield-20">
                            <CheckoutTextfield tag="CCV" updateField={undefined} />
                        </div>

                        <div className="checkout-complete-button-section">
                            <div onClick={onClick} className="checkout-complete-button">{completeButtonText()}</div>
                        </div>
                    </div>

                </div>
                <div className="checkout-image-side">
                </div>
            </div>
        </div>
    </>

}
