import './Cart.css'
import { CartItem } from '../../components/cart/shopping-cart-item/CartItem'
export function Cart() {

    return <>
        <div className="cart">
            <div className="cart-cart-side">
                <div className="cart-your-cart-text">Your Cart</div>
                <div className="cart-mini-summary">Total (1 Items) - $300</div>
                <CartItem />
            </div>
            <div className="cart-info-side">
                <div className="cart-continue-button">
                    <div className="cart-continue-button-text">
                        Checkout
                    </div>
                </div>
                <div className="cart-order-summary-text">
                    Order Summary
                </div>
                <div className="cart-mini-details">1 item - C$ 300</div>
                <div className="cart-mini-details">1 item - C$ 300</div>
                <div className="cart-mini-details">1 item - C$ 300</div>
            </div>
        </div>
    </>

}
