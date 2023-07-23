import "./Home.css"
import { GalleryImage } from '../../components/gallery/gallery-images/GalleryImage'
import { useNavigate } from 'react-router-dom';
import {t} from "../../utils/LanguageSelect";

export function Home() {
    const lang = localStorage.getItem("lang");
    const navigate = useNavigate();
    const mainShopButton = (event : React.MouseEvent<HTMLDivElement>) => {
        navigate(`/collections`);
    }

    return <>
        <div className="home">
            <div className="home-main-image">
                <div className="home-main-image-button">
                    <div onClick={mainShopButton} className="home-main-image-button-text">
                        {t(lang, "Shop", "Boutique")}
                    </div>
                </div>
            </div>
            <div className="home-text-section">
                <div className="home-text-centerer">
                    <div className="home-text-section-flex">
                        <div className="home-text-section-main-text">
                            {t(lang, "Elevate Your Style. Create Your Unique Sneaker Masterpiece. Step into the Future of Personalized Fashion.", "Élevez votre style. Créez votre chef-d'œuvre unique de baskets. Entrez dans le futur de la mode personnalisée.")}
                        </div>
                        <div className="home-text-section-sub-text">
                            {t(lang, "Welcome to our world of limitless creativity and personal expression. Discover a revolutionary platform where you can design and customize your very own sneakers, tailored to your unique style. Unleash your creativity, elevate your fashion game, and step into a realm of individuality. Embrace the future of personalized streetwear and fashion at its finest.", "Bienvenue dans notre monde de créativité illimitée et d'expression personnelle. Découvrez une plateforme révolutionnaire où vous pouvez concevoir et personnaliser vos propres baskets, adaptées à votre style unique. Libérez votre créativité, élevez votre jeu de mode et entrez dans un royaume d'individualité. Embrassez l'avenir du streetwear personnalisé et de la mode à son meilleur.")}
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-gallery-section">
                <div className="home-gallery-section-header">
                    {t(lang, "Latest/Upcoming Releases",
                        "Dernières et Prochaines Sorties")}
                </div>
                <div className="home-gallery">
                    < GalleryImage image={"ramone.jpg"}/>
                    < GalleryImage image={"kobe8.jpg"}/>
                    < GalleryImage image={"bapesta.jpg"}/>
                    < GalleryImage image={"foam.jpg"}/>
                    < GalleryImage image={"aj1.jpg"}/>
                </div>
            </div>
        </div>
    </>
}
