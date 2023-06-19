import './Collections.css'
import { ShoeDesign } from '../../components/collections/design/ShoeDesign'

export function Collections() {

    return <>

        <div className="collections">
            <div className="collections-header">
                <div className="collections-header-text">
                    Monthly Collection
                </div>
            </div>

            <div className="collections-body">
                <div className="collections-body-filter-side">
                    <div className="filter-options-style">
                        <div className="filter-type-text">
                            STYLE
                        </div>
                    </div>
                    <div className="filter-options-price">
                        <div className="filter-type-text">
                            PRICE
                        </div>
                    </div>
                    <div className="filter-options-size">
                        <div className="filter-type-text">
                            SIZING
                        </div>
                    </div>
                </div>
                <div className="collections-body-designs-side">
                    <div className="collections-design-side-flex">
                        <ShoeDesign shoeName="AF1s" shoePrice="120$"/>
                        <ShoeDesign shoeName="AF1s" shoePrice="120$"/>
                        <ShoeDesign shoeName="AF1s" shoePrice="120$"/>
                        <ShoeDesign shoeName="AF1s" shoePrice="120$"/>
                        <ShoeDesign shoeName="AF1s" shoePrice="120$"/>
                    </div>
                </div>
            </div>
        </div>

    </>

}
