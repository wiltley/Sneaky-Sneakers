import './Collections.css'
import shoeDesigns from '../../data/shoeDesigns.json';
import { ShoeDesign } from '../../components/collections/design/ShoeDesign'
import { ShoeItem } from '../../types/types';
import { FilterStyle } from '../../components/collections/filter-style/FilterStyle';
import { FilterPrice } from '../../components/collections/filter-price/FilterPrice';
import { useState } from 'react';
import { t } from '../../utils/LanguageSelect'


interface ShoeDesignsData {
    items: ShoeItem[];
}


export function Collections() {
    const lang = localStorage.getItem("lang");
    const { items }: ShoeDesignsData = shoeDesigns;
    const [shownItems, setShownItems] = useState(items);
    const [activeStyleFilter, setActiveStyleFilter] = useState("");
    const filterByStyle = (filterBy : string) => {

        if(filterBy === ""){
            setShownItems(items);
            setActiveStyleFilter("");
            return;
        } else {
            const filteredItems = items.filter((item) => {
                return item.style === filterBy;
            });
            setShownItems(filteredItems);
            setActiveStyleFilter(filterBy);
        }
    }

    const filterByPrice = (priceRange: [number, number]) => {
        const filteredItems = items.filter((item) => {
            return item.price >= priceRange[0] && item.price <= priceRange[1];
        });
        setActiveStyleFilter("");
        setShownItems(() => filteredItems);
    };

    return <>

        <div className="collections">
            <div className="collections-header">
                <div className="collections-header-text">
                    {t(lang, "Monthly Collection", "Collection mensuelle")}
                </div>
            </div>

            <div className="collections-body">
                <div className="collections-body-filter-side">
                    <div className="filter-options-style">
                        <div className="filter-type-text">
                            {"Style"}

                            <FilterStyle activeStyleFilter={activeStyleFilter} filterStyle={filterByStyle} />

                        </div>
                    </div>
                    <div className="filter-options-price">
                        <div className="filter-type-text">
                            {t(lang, "Price", "Prix")}

                            <FilterPrice filterPrice={filterByPrice} />
                        </div>
                    </div>
                    <div className="filter-options-size">
                        <div className="filter-type-text">
                        </div>
                    </div>
                </div>
                <div className="collections-body-designs-side">
                    <div className="collections-design-side-flex">
                        {shownItems.map((shoe) => (
                            <ShoeDesign
                                key={shoe.id}
                                shoeId={shoe.id}
                                shoeName={shoe.name}
                                shoePrice={shoe.price + "$"}
                                shoeImage={shoe.image}
                                altText={shoe.alt}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    </>

}
