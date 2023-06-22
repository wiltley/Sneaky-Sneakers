import "./Home.css"
import { GalleryImage } from '../../components/gallery/gallery-images/GalleryImage'

export function Home() {

    return <>
        <div className="home">

            <div className="home-main-image">
                <div className="home-main-image-button">
                    <div className="home-main-image-button-text">
                        Shop
                    </div>
                </div>
            </div>
            <div className="home-text-section">
                <div className="home-text-centerer">
                    <div className="home-text-section-flex">
                        <div className="home-text-section-main-text">
                            TEST TEXT OWJDOJQWJDOQ qwdijqoiwdjqwd qijwdojqwd
                        </div>
                        <div className="home-text-section-sub-text">
                            TEST TEXT OWJDOJQWJDOQ qwdijqoiwdjqwd qijwdojqwd
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-gallery-section">
                <div className="home-gallery-section-header">
                TEXT
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
