import './CheckoutTextfield.css'
import { useState, ChangeEvent } from 'react'
export function CheckoutTextfield() {

    const [text, setText] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };


    return <>
            <div className="checkout-textfield-flex">
                <div className="checkout-field-name">123</div>
                <input className="checkout-textfield" type="text" value={text} onChange={handleChange} />
            </div>
    </>

}
