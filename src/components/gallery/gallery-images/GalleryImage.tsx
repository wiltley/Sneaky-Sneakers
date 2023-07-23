import "./GalleryImage.css"

interface galleryImageProps {
    image: string;
}

export function GalleryImage(props: galleryImageProps) {
    const image = require(`../../../images/${props.image}`)
    const containerStyle: React.CSSProperties = {
        backgroundImage: `url(${image})`,
    };
    return <>
        <div className="gallery-image" style={containerStyle}>
        </div>
    </>

}
