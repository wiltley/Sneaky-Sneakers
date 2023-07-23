import './SelectedShoe.css';
import { t } from '../../../utils/LanguageSelect'


interface selectedShoeProps {
    name: string | undefined;
    size: string | undefined;
}

export function SelectedShoe(props: selectedShoeProps) {
    const lang = localStorage.getItem("lang")

    if (props.size === undefined) {
        props.size = "";
    }

    const parsedSize = parseInt(props.size, 10);
    let size = `M${props.size}/W${parsedSize + 1.5}`;

    return <>
        <div className="selected-shoe">
            <div className="selected-shoe-main">
                {t(lang, "Selected Shoe", "Chaussure sélectionnée")} 
                <div className="selected-shoe-underline">
                </div>
            </div>

            <div>{t(lang, "Name:", "Nom:")} {props.name} </div>
            <div>{t(lang,"Size:", "Taille:")} {size}</div>
        </div>
    </>

}
