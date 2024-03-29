import './Cart.css'
import { CartItem } from '../../components/cart/shopping-cart-item/CartItem'
import { CartItem as Item } from '../../types/types';
import { CartItemRemove } from '../../components/cart/cart-item-remove-popup/CartItemRemove';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { t } from '../../utils/LanguageSelect'

export function Cart() {
    const lang = localStorage.getItem("lang");

    const storedItemsString = localStorage.getItem("cartItems");
    let cartItems: Item[] = [];
    if (storedItemsString) {
        cartItems = JSON.parse(storedItemsString);
    }

    const [scrollPosition, setScrollPosition] = useState(0);
    const [removePopUpState, setRemovePopUp] = useState(-1);
    const [maxHeight] = useState(-1); // Maximum height where you want to restrict the element
    const navigate = useNavigate();

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

    const removeCartItem = (index : number) => {
        setRemovePopUp(index);
    }

    const removePopUp = () => {
        if(removePopUpState !== -1) {
            return <CartItemRemove indexToRemove={removePopUpState} />
        }
        else return <></>

    }

    const goToCheckout = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();

        if (cartItems.length === 0) {
            return
        }

        navigate(`/checkout`);

    }

    const checkoutButtonText = () => {
        if (cartItems.length === 0) {
            return <> {t(lang, "Cart Empty / No Checkout", "Paiement non-disponible")}</>
        }
        return <> {t(lang, "Checkout", "Aller à la caisse")} </>

    }

    const orderSummaryIsEmpty = () => {
        if (cartItems.length === 0) {
            return <> N/A </>
        }

    }

    return <>
        {removePopUp()}
        <div className="cart">
            <div className="cart-cart-side">
                <div className="cart-your-cart-text">{t(lang, "Your Cart", "Votre Panier")}</div>
                <div className="cart-mini-summary">{"Total"} {cartItems.length} {t(lang,"Items" , "Articles du panier")} - ${calculateSum()}</div>
                <div className="cart-items">
                    {cartItems.map((item, index) => (
                        <CartItem key={index} item={item} id={index} setRemove={removeCartItem} image={item.image}/>
                    ))}
                </div>
            </div>
            <div className={`cart-info-side ${scrollPosition > maxHeight ? "scrolled" : ""}`}>
                <div className={`cart-continue-button ${cartItems.length === 0 ? "disable" : ""}`}>
                    <div onClick={goToCheckout} className={`cart-continue-button-text`}>
                        {checkoutButtonText()}
                    </div>
                </div>
                <div className="cart-order-summary-text">
                    {t(lang, 'Order Summary', 'Récapitulatif de la commande')}
                </div>
                <div className="cart-mini-details">
                    {cartItems.map((item, index) => (
                        <div className="cart-mini-detail">{item.name} - C$ {item.price}</div>
                    ))}
                    {orderSummaryIsEmpty()}
                </div>
            </div>
        </div>
    </>

}
