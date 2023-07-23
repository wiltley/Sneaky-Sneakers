import React, { useState } from "react";
import "./FilterPrice.css";
import { t } from '../../../utils/LanguageSelect'

interface FilterPriceProps {
  filterPrice: Function;
}

export function FilterPrice(props: FilterPriceProps) {
  const lang = localStorage.getItem("lang");
  const [priceRange, setPriceRange] = useState([100, 100]);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setPriceRange((prevRange) => {
      const updatedRange = [...prevRange];
      updatedRange[name === "min" ? 0 : 1] = parseInt(value);
      return updatedRange;
    });
  };

  const handleFilterButtonClick = () => {
    props.filterPrice(priceRange);
  };


  return (
    <div className="filter-price">
        <label htmlFor="min">{t(lang, "Min Price:", "Prix Min.")}</label>
        <input
          type="range"
          id="min"
          name="min"
          min={100}
          max={1000}
          value={priceRange[0]}
          onChange={handleSliderChange}
        />
        <label htmlFor="max">{t(lang, "Max Price:", "Prix Max.")}</label>
        <input
          type="range"
          id="max"
          name="max"
          min={100}
          max={1000}
          value={priceRange[1]}
          onChange={handleSliderChange}
        />

      <div className="filter-price-display">
        ${priceRange[0]} - ${priceRange[1]}
      </div>
      <button onClick={handleFilterButtonClick}>{t(lang, "Filter Price", "Filtrer par prix")}</button>
    </div>
  );
}

