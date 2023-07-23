import './Checkout.css'
import { useState } from 'react'
import { CheckoutTextfield } from '../../components/checkout/textfield/CheckoutTextfield'
import { CheckoutConfirmation } from '../../components/checkout/confirmation/CheckoutConfirmation'
import { t } from '../../utils/LanguageSelect'

// You see, I could do input validation for this, but I'm too lazy
interface fieldInputs {
    firstName: string;
    lastName: string;
    email: string;
}

export function Checkout() {
    const lang = localStorage.getItem("lang");

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
            return <> {t(lang, "Incomplete Fields!", "Champs incomplets!")} </>
        }
        return <>{t(lang, "Complete", "Terminez")}</>
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
                            {t(lang, "1. Shipping & Billing", "Expédition et facturation")}
                        </div>
                    </div>

                    <div className="checkout-double-textfield">
                        <CheckoutTextfield tag="First Name" tagName={t(lang, "First Name", "Prénom")} updateField={updateField} />
                        <CheckoutTextfield tag="Last Name" tagName={t(lang, "Last Name", "Nom de famille")} updateField={updateField} />
                    </div>


                    <div className="checkout-double-textfield">
                        <div className="checkout-double-textfield-80">
                            <CheckoutTextfield tag="" tagName={t(lang, "Billing Address","Adresse de facturation")} updateField={undefined} />
                        </div>

                        <div className="checkout-double-textfield-20">
                            <CheckoutTextfield tag="" tagName={t(lang, "Postal Code", "Code Postal")} updateField={undefined} />
                        </div>

                    </div>

                    <div className="checkout-double-textfield">
                        <CheckoutTextfield tag="" tagName={t(lang, "Country", "Pays")} updateField={undefined} />
                        <CheckoutTextfield tag="" tagName={"Province"} updateField={undefined} />
                    </div>

                    <div className="checkout-stage-box">
                        <div className="checkout-stage-text">
                            {t(lang, "2. Contact Details", "Détails du contact")}
                        </div>
                    </div>

                    <div className="checkout-margin-bottom">
                        <CheckoutTextfield tag="Email" tagName="Email" updateField={updateField} />
                        <CheckoutTextfield tag="" tagName={t(lang, "Phone Number", "Numéro de téléphone")} updateField={undefined} />
                    </div>

                    <div className="checkout-stage-box">
                        <div className="checkout-stage-text">
                            {t(lang, "3. Payment Information", "3. Informations de paiement")}
                        </div>
                    </div>

                    <div className="checkout-double-textfield">
                        <CheckoutTextfield tag="" tagName={t(lang, "Card Holder First Name", "Prénom du titulaire de la carte")} updateField={undefined} />
                        <CheckoutTextfield tag="" tagName={t(lang, "Card Holder Last Name", "Nom de famille du titulaire")} updateField={undefined} />
                    </div>

                    <CheckoutTextfield tag="" tagName={t(lang, "Credit/Debit Card #", "Carte de crédit / débit #")} updateField={undefined} />

                    <div className="checkout-double-textfield">
                        <div className="checkout-double-textfield-20">
                            <CheckoutTextfield tag="CCV" tagName="CCV" updateField={undefined} />
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
