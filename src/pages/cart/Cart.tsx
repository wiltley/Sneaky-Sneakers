import './Cart.css'
import { CartItem } from '../../components/cart/shopping-cart-item/CartItem'
import { CartItem as Item } from '../../types/types';
import { useState, useEffect } from 'react'
export function Cart() {
    const storedItemsString = localStorage.getItem("cartItems");
    let cartItems: Item[] = [];
    if (storedItemsString) {
        const storedItems: Item[] = JSON.parse(storedItemsString);
        cartItems = JSON.parse(storedItemsString);
    }

    const [scrollPosition, setScrollPosition] = useState(0);
    const [maxHeight] = useState(0); // Maximum height where you want to restrict the element

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.pageYOffset || document.documentElement.scrollTop);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const calculateSum = () :number => {
        let sum = 0;
        for (let i = 0; i < cartItems.length; i++) {
            console.log(cartItems[i].price);
            let toAdd = cartItems[i].price;
            if (toAdd !== undefined) {
                sum += toAdd;
            }
        }
        return sum;
    }

    return <>
        <div className="cart">
            <div className="cart-cart-side">
                <div className="cart-your-cart-text">Your Cart</div>
                <div className="cart-mini-summary">Total ({cartItems.length} Items) - ${calculateSum()}</div>
                <div className="cart-items">
                    {cartItems.map((item, index) => (
                        <CartItem key={index} item={item}/>
                    ))}
                </div>
            </div>
            <div className={`cart-info-side ${scrollPosition > maxHeight ? "scrolled" : ""}`}>
                <div className="cart-continue-button">
                    <div className="cart-continue-button-text">
                        Checkout
                    </div>
                </div>
                <div className="cart-order-summary-text">
                    Order Summary
                </div>
                <div className="cart-mini-details">
                    {cartItems.map((item, index) => (
                        <div className="cart-mini-detail">{item.name} - C$ {item.price}</div>
                    ))}
                </div>
            </div>
        </div>
    </>

}
