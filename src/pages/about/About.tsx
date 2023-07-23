import './About.css';
import { t } from '../../utils/LanguageSelect'
export function About() {
    const lang = localStorage.getItem("lang");
    return <>
        <div className="about">
            <div className="about-info-side">
                <div className="about-info-section">
                    <div className="about-info-mini-section-header">
                        {t(lang, "About Us -", "À propos de nous -")}
                    </div>
                    <div className="about-info-section-header">
                        {t(lang, "Our Mission", "Notre mission")}
                    </div>

                    <div className="about-info-section-main-text">
                        {t(lang, "At Sneaky Sneakers, we believe that fashion is more than just clothing; it's a canvas for self-expression and a reflection of one's personality. Our mission is to empower individuals to break free from the constraints of mass-produced fashion and embrace their distinctiveness. Founded by a team of passionate fashion enthusiasts, designers, and sneakerheads, Sneaky Sneakers is a revolutionary platform that puts the creative power back into your hands. We are driven by the desire to create a community that celebrates uniqueness, authenticity, and innovation.", "Chez Sneaky Sneakers, nous croyons que la mode est plus que des vêtements ; c'est une toile d'expression de soi et un reflet de sa personnalité. Notre mission est de donner aux individus les moyens de se libérer des contraintes de la mode produite en série et d'embrasser leur caractère distinctif. Fondée par une équipe de passionnés de mode, de designers et de sneakerheads, Sneaky Sneakers est une plateforme révolutionnaire qui remet le pouvoir créatif entre vos mains. Nous sommes animés par le désir de créer une communauté qui célèbre l'unicité, l'authenticité et l'innovation.")}
                        <br/>
                        <br/>
                        {t(lang, "This website will give you the tools you need in order to customize and tailor sneakers to your preference, as well as share your creations with our vibrant community of fashion/sneaker enthusiasts. Dive into our intuitive and user-friendly customization interface, where you'll find an extensive range of design options at your fingertips.", "Ce site Web vous fournira les outils dont vous avez besoin pour personnaliser et adapter vos baskets selon vos préférences, ainsi que pour partager vos créations avec notre communauté dynamique de passionnés de mode/baskets. Plongez dans notre interface de personnalisation intuitive et conviviale, où vous trouverez une vaste gamme d'options de conception à portée de main.")}
                    </div>

                </div>
            </div>
            <div className="about-image-side">

            </div>
        </div>
    </>

}
