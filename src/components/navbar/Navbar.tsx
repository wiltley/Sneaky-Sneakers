import './Navbar.css'
import { NavbarButton } from './navbarbutton/NavbarButton'
import { NavbarScroller } from './navbar-scroller/NavbarScroller'
import { t } from '../../utils/LanguageSelect'

export function Navbar() {
    const lang = localStorage.getItem("lang")
    if (lang == null) {
       localStorage.setItem("lang", "EN")
    }

    const goToCart = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        window.location.replace(`/cart`);

    }

    const goToInsta = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        window.location.replace(`https://www.instagram.com/`);

    }

    const goToTwitter = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        window.location.replace(`https://www.twitter.com/`);

    }

    const swapLanguage = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault()
        let currentLang = localStorage.getItem("lang")
        if (currentLang === "EN") {
            currentLang = "FR"
        } else {
            currentLang = "EN"
        }
        localStorage.setItem("lang", currentLang)
        window.location.reload()
    }

    return <>
        <div className="navbar">
            <NavbarScroller />

            <div className="navbar-icons-section">
                    <div className="navbar-icons-socials-flex">
                        <div onClick={goToInsta} className="navbar-icons-instagram-logo"></div>
                        <div onClick={goToTwitter} className="navbar-icons-twitter-logo"></div>
                    </div>
                    <div className="navbar-icons-logo"></div>
                    <div className="navbar-icons-shopping-flex">
                        <div className="navbar-language-section" onClick={swapLanguage}>{lang}</div>
                        <div className="navbar-icons-canada-emblem"></div>
                        <div onClick={goToCart} className="navbar-icons-shopping-icon"></div>
                    </div>
            </div>

            <div className="navbar-buttons-section">
                <NavbarButton label={t(lang, "About", "À propos")} link="/about"/>
                <NavbarButton label={"Collections"} link="/collections"/>
                <NavbarButton label ={t(lang, "Home", "Accueil")} link="/"/>
                <NavbarButton label={t(lang, "Community", "Communauté")} link="/community"/>

            </div>
        </div>
    </>
}
