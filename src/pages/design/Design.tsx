import "./Design.css"
import { Designer } from '../../components/designer/Designer'
import { useState } from 'react'
import { useParams } from 'react-router';
import { ColorSelector } from "../../components/designer/color-selector/ColorSelector";
import { SelectedColors } from "../../components/designer/selected-color/SelectedColors";
import { SelectedShoe } from "../../components/designer/selected-shoe/SelectedShoe";
import shoeDesigns from '../../data/shoeDesigns.json';
import { ShoeItem } from '../../types/types';

export interface DesignOptions {
    sole: string;
    laces: string;
    toecap: string;
    outshoe: string;
    tongue: string;
    collar: string;
}


export function Design() {
    let maxOptions = 6;


    let { shoeId, shoeSize } = useParams<{ shoeId: string, shoeSize: string}>();
    if (shoeId === undefined) {
        shoeId = "0";
    }

    const parsedShoeId = parseInt(shoeId, 10);

    const shoeData = shoeDesigns.items.find((item) => item.id === parsedShoeId);

    const [indicator, setIndicator] = useState(0);

    const [selectedOptions, setOption] = useState<DesignOptions>({
        sole: "white",
        laces: "white",
        toecap: "white",
        outshoe: "white",
        tongue: "white",
        collar: "white"
    });

    // Needs to take either 1 or -1
    const setCurrentOption = (change: number) => {
        let changed = indicator + change;
        if (changed > maxOptions - 1) {
            setIndicator(0);
        } else if (changed < 0) {
            setIndicator(maxOptions - 1);
        } else {
            setIndicator(changed);
        }
    }

    const currentOption = () :string => {
        switch (indicator) {
            case 0:
                return "Sole"
            case 1:
                return "Laces"
            case 2:
                return "Toecap"
            case 3:
                return "Outshoe"
            case 4:
                return "Tongue"
            case 5:
                return "Collar"
            default:
                return "Default"
        }
    }


    const setColor = (color: string) => {
        switch (indicator) {
            case 0:
                setOption((prevOptions) => ({
                    ...prevOptions,
                    sole: color
                }));
                break;
            case 1:
                setOption((prevOptions) => ({
                    ...prevOptions,
                    laces: color
                }));
                break;
            case 2:
                setOption((prevOptions) => ({
                    ...prevOptions,
                    toecap: color
                }));
                break;
            case 3:
                setOption((prevOptions) => ({
                    ...prevOptions,
                    outshoe: color
                }));
                break;
            case 4:
                setOption((prevOptions) => ({
                    ...prevOptions,
                    tongue: color
                }));
                break;
            case 5:
                setOption((prevOptions) => ({
                    ...prevOptions,
                    collar: color
                }));
                break;
            default:
                break;
        }
    };



    return <>
        <div className="design">
            <div className="design-top">
                <div className="design-top-image-section">
                    <div className="design-top-info-section">
                        <SelectedShoe name={shoeData?.name} size={shoeSize}/>
                        <SelectedColors options={selectedOptions} />
                    </div>
                </div>
            </div>

            <div className="design-bottom">
                <div className="design-bottom-flex">
                    <div className="design-bottom-share-area">
                        <div className="design-share">
                            <div className="design-share-icon">
                            </div>
                            <div className="design-share-text">
                                Share your design!
                            </div>
                        </div>
                    </div>

                    <div className="design-bottom-select-area">
                        <Designer max={maxOptions} indicator={indicator} changeIndicator={setCurrentOption} current={currentOption()} />
                        <ColorSelector setColor={setColor} />
                    </div>

                    <div className="design-bottom-continue-area">
                        <div className="design-complete-button">
                            <div className="design-complete-button-text">
                                Complete
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </>

}
