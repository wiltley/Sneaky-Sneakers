import './ShareDesign.css'
import { t } from '../../../utils/LanguageSelect'

interface shareDesignProps {
    closeModal: Function
}

export function ShareDesign(props : shareDesignProps) {
    const lang = localStorage.getItem("lang")

    const onClick = (event : React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        props.closeModal(false)
    }

    return <>
        <div className="share-design">
            <div className="share-design-modal">
                <div className="share-design-confirm-text">
                    {t(lang, "Your design was succesfully shared to the community!", "Votre design a été partagé avec succès à la communauté!")}
                </div>
                <div className="share-design-confirm-button-section">
                    <div onClick={onClick} className="share-design-confirm-butt">
                        <div className="share-design-confirm-butt-text">
                            OK
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>

}
