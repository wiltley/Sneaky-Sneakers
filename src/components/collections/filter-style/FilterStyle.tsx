import "./FilterStyle.css";
import { useState, useEffect } from "react";


interface filterStyleProps {
    filterStyle: Function;
    activeStyleFilter: string;
}

export function FilterStyle(props: filterStyleProps) {

    // Since this is just an assignment, I'm going to hardcode 4 different styles
    // In other words, I'm lazy

    const filterOption = (filterBy: string) => {

        const onClick = (event: React.MouseEvent<HTMLDivElement>) => {

            if (filterBy === props.activeStyleFilter) {
                props.filterStyle("");
            } else {
                props.filterStyle(filterBy);
            }


        }

        return <>
            <div onClick={onClick} className="filter-option">
                <div className={`filter-option-text-style ${filterBy === props.activeStyleFilter ? "active" : ""}`}>
                    {filterBy}
                </div>
            </div>
        </>
    }

    return <>
        <div className="filter-style">
            {filterOption("Lifestyle")}
            {filterOption("Hypebeast")}
            {filterOption("Running")}
            {filterOption("Basketball")}
        </div>
    </>
}
