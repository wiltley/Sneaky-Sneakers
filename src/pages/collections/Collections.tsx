import './Collections.css'
import shoeDesigns from '../../data/shoeDesigns.json';
import { ShoeDesign } from '../../components/collections/design/ShoeDesign'
import { ShoeItem } from '../../types/types';


interface ShoeDesignsData {
  items: ShoeItem[];
}


export function Collections() {

    const { items }: ShoeDesignsData = shoeDesigns;

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
                            Style
                        </div>
                    </div>
                    <div className="filter-options-price">
                        <div className="filter-type-text">
                            Price
                        </div>
                    </div>
                    <div className="filter-options-size">
                        <div className="filter-type-text">
                            Sizing
                        </div>
                    </div>
                </div>
                <div className="collections-body-designs-side">
                    <div className="collections-design-side-flex">
                        {shoeDesigns.items.map((shoe) => (
                            <ShoeDesign
                                key={shoe.id}
                                shoeId={shoe.id}
                                shoeName={shoe.name}
                                shoePrice={shoe.price + "$"}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    </>

}
