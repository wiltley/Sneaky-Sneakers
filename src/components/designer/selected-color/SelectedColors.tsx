import './SelectedColors.css'
import { DesignOptions } from '../../../types/types'
import { MiniColor } from './MiniColor';
import { t } from '../../../utils/LanguageSelect'

interface selectedColorsProps {
    options : DesignOptions;
}

export function SelectedColors(props: selectedColorsProps) {
    const lang = localStorage.getItem("lang")

    return <>
        <div className="selected-colors">
            <div>
                <div className="selected-options-main">
                    {t(lang, "Selected Options", "Sélectionnées")}
                    <div className="selected-options-underline">
                    </div>
                </div>
            </div>
            <div>{t(lang, "Sole:", "Semelle")} <MiniColor backgroundColor={props.options.sole}/> </div>
            <div>{t(lang, "Laces:", "Lacets")} <MiniColor backgroundColor={props.options.laces}/> </div>
            <div>{t(lang, "Toecap:", "Embout")} <MiniColor backgroundColor={props.options.toecap}/> </div>
            <div>{t(lang, "Outshoe:", "Extérieure")} <MiniColor backgroundColor={props.options.outshoe}/> </div>
            <div>{t(lang, "Tongue:", "Languette")} <MiniColor backgroundColor={props.options.tongue}/> </div>
            <div>{t(lang, "Collar:", "Collier")} <MiniColor backgroundColor={props.options.collar}/> </div>
        </div>
    </>
}
