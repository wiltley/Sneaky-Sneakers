import './CheckoutTextfield.css'
import { useState, ChangeEvent } from 'react'

interface checkoutTextfieldProps {
    tag: string;
    updateField: Function | undefined
}
export function CheckoutTextfield(props : checkoutTextfieldProps) {
    const [text, setText] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (props.updateField !== undefined) {
            setText(e.target.value)
            props.updateField(props.tag, e.target.value)
        }
    };


    return <>
            <div className="checkout-textfield-flex">
                <div className="checkout-field-name">{props.tag}</div>
                <input className="checkout-textfield" type="text" value={text} onChange={handleChange} />
            </div>
    </>

}
