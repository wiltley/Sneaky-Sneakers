import "./CartItemRemove.css"
import { CartItem } from "../../../types/types";

interface cartItemProps {
    indexToRemove: number;
}

export function CartItemRemove(props: cartItemProps) {

    const removeFromCart = (event: React.MouseEvent<HTMLDivElement>) => {
        // I should probably add a confirmation here but I cba...
        event.preventDefault();
        const storedItemsString = localStorage.getItem("cartItems");

        // Check if there are any stored items
        if (storedItemsString) {
            // Parse the stored items into an array or object
            let storedItems: CartItem[] = JSON.parse(storedItemsString);

            // Find the index of the item with the given ID

                // Remove the item from the array or object
                storedItems.splice(props.indexToRemove, 1);

                // Convert the updated items back to a string
                const updatedItemsString = JSON.stringify(storedItems);

                // Store the updated items back into local storage
                localStorage.setItem("cartItems", updatedItemsString);
                window.location.reload();
        }
    }

    const cancelRemoveCart = (event: React.MouseEvent<HTMLDivElement>) => {
        window.location.reload();
    }

    return <>
        <div className="cart-item-remove-popup">
            <div className="cart-item-remove-modal">
                <div className="cart-item-remove-text">
                    Are you sure you want to confirm this action?
                </div>
                <div className="cart-item-remove-button-section">
                    <div className="cart-item-remove-butt">
                        <div onClick={removeFromCart} className="cart-item-remove-butt-text">
                            Confirm
                        </div>
                    </div>
                    <div onClick={cancelRemoveCart} className="cart-item-remove-butt">
                        <div className="cart-item-remove-butt-text">
                            Cancel
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
}
