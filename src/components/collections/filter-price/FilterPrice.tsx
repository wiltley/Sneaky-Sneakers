import React, { useState } from "react";
import "./FilterPrice.css";

interface FilterPriceProps {
  filterPrice: Function;
}

export function FilterPrice(props: FilterPriceProps) {
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
        <label htmlFor="min">Min Price:</label>
        <input
          type="range"
          id="min"
          name="min"
          min={100}
          max={1000}
          value={priceRange[0]}
          onChange={handleSliderChange}
        />
        <label htmlFor="max">Max Price:</label>
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
      <button onClick={handleFilterButtonClick}>Filter Price</button>
    </div>
  );
}

