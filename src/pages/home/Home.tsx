import "./Home.css"
import { GalleryImage } from '../../components/gallery/gallery-images/GalleryImage'
import { useNavigate } from 'react-router-dom';

export function Home() {
    const navigate = useNavigate();

    const mainShopButton = (event : React.MouseEvent<HTMLDivElement>) => {
        navigate(`/collections`);
    }

    return <>
        <div className="home">
            <div className="home-main-image">
                <div className="home-main-image-button">
                    <div onClick={mainShopButton} className="home-main-image-button-text">
                        Shop
                    </div>
                </div>
            </div>
            <div className="home-text-section">
                <div className="home-text-centerer">
                    <div className="home-text-section-flex">
                        <div className="home-text-section-main-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                        <div className="home-text-section-sub-text">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-gallery-section">
                <div className="home-gallery-section-header">
                Latest Releases
                </div>
                <div className="home-gallery">
                    < GalleryImage />
                    < GalleryImage />
                    < GalleryImage />
                    < GalleryImage />
                    < GalleryImage />
                </div>
            </div>
        </div>

    </>
}
