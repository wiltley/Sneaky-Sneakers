import './NavbarScroller.css'
import { useState, useEffect } from 'react'
import { t } from '../../../utils/LanguageSelect'

export function NavbarScroller() {
    const [counter, setCounter] = useState(0);
    const lang = localStorage.getItem("lang");
    const data: string[] = [
        t(lang, 'Introducing the latest Air Max model with improved cushioning and futuristic design.', 'Présentation du dernier modèle Air Max avec un amorti amélioré et un design futuriste.'),
        t(lang, 'Participate in our customization contest for a chance to win exclusive prizes.', 'Participez à notre concours de personnalisation pour courir la chance de gagner des prix exclusifs.'),
        t(lang, 'Renowned artist teams up with a sneaker brand for a unique limited edition collection.', ''),
        t(lang, 'Get a special discount on select sneaker models for a limited time only.', 'Obtenez une remise spéciale sur certains modèles de baskets pour une durée limitée.'),
        t(lang, 'Explore our vibrant and stylish sneaker designs perfect for the summer season.', 'Découvrez nos modèles de baskets dynamiques et élégants, parfaits pour la saison estivale.'),
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if (counter === data.length-1) {
                setCounter(0);
            } else {
                setCounter(counter + 1);
            }
        }, 3500);

        return () => {
            clearInterval(interval);
        };
    }, [counter, data.length]);

    return <>
        <div className="navbar-scroller-section">
            <div className="navbar-scroller-text">
                {data[counter]}
            </div>
        </div>
    </>
}
