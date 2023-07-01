import './CartItem.css'
import { CartItem as Item } from '../../../types/types'
import { SelectedColors } from '../../designer/selected-color/SelectedColors'

interface cartItemProps {
    item: Item,
    id: number,
    setRemove: Function;
}

export function CartItem(props: cartItemProps) {

    const onClick = () => {
        props.setRemove(props.id);
    }

    return <>
        <div className="cart-item">
            <div className="cart-item-image">
            </div>
            <div className="cart-item-info">
                <div>{props.item.name} </div>
                <div>${props.item.price} </div>
            </div>

            <div className="cart-selected-options">
                <SelectedColors options={props.item.selectedOptions} />
            </div>

            <div onClick={onClick} className="cart-item-remove-button"></div>
        </div>
    </>
}
