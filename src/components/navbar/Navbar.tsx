import './Navbar.css'
import { NavbarButton } from './navbarbutton/NavbarButton'
export function Navbar() {
    return <>

        <div className="navbar">
            <div className="navbar-scroller-section">
            </div>

            <div className="navbar-icons-section">
                    <div className="navbar-icons-socials-flex">
                        <div className="navbar-icons-instagram-logo"></div>
                        <div className="navbar-icons-twitter-logo"></div>
                    </div>
                    <div className="navbar-icons-logo"></div>
                    <div className="navbar-icons-shopping-flex">
                        <div className="navbar-icons-canada-emblem"></div>
                        <div className="navbar-icons-shopping-icon"></div>
                    </div>
            </div>

            <div className="navbar-buttons-section">
                <NavbarButton link="/"/>
                <NavbarButton link="/"/>
                <NavbarButton link="/"/>
                <NavbarButton link="/"/>
                <NavbarButton link="/"/>

            </div>
        </div>
    </>
}
