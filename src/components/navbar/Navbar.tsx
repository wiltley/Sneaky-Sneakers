import './Navbar.css'
import { NavbarButton } from './navbarbutton/NavbarButton'
import { useNavigate } from 'react-router-dom';

export function Navbar() {

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

    return <>
        <div className="navbar">
            <div className="navbar-scroller-section">
            </div>

            <div className="navbar-icons-section">
                    <div className="navbar-icons-socials-flex">
                        <div onClick={goToInsta} className="navbar-icons-instagram-logo"></div>
                        <div onClick={goToTwitter} className="navbar-icons-twitter-logo"></div>
                    </div>
                    <div className="navbar-icons-logo"></div>
                    <div className="navbar-icons-shopping-flex">
                        <div className="navbar-icons-canada-emblem"></div>
                        <div onClick={goToCart} className="navbar-icons-shopping-icon"></div>
                    </div>
            </div>

            <div className="navbar-buttons-section">
                <NavbarButton link="/"/>
                <NavbarButton link="/collections"/>
                <NavbarButton link="/"/>
                <NavbarButton link="/"/>
                <NavbarButton link="/"/>

            </div>
        </div>
    </>
}
