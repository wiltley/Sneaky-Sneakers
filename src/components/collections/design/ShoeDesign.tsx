
import './ShoeDesign.css'

interface shoeDesign  {
    shoeName: string;
    shoePrice: string;
}
export function ShoeDesign(props : shoeDesign) {

    return <>
        <div className="shoe-card">
            <div className="shoe-card-image-section">
            </div>
        <div className="shoe-card-bottom-text">
            {props.shoeName} - {props.shoePrice}
        </div>
        </div>
    </>

}
