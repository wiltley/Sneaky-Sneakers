import { useNavigate } from 'react-router-dom';
import './ShoeDesign.css';

interface ShoeDesignProps {
  shoeId: number | undefined;
  shoeName: string;
  shoePrice: string;
  shoeImage: string;
  altText: string | undefined;
}

interface CustomShoeDesignProps {
  shoeId: number | undefined;
  customId: number | undefined;
  shoeName: string;
  shoePrice: string;
  shoeImage: string | undefined;
}


export function ShoeDesign(props: ShoeDesignProps) {

  const image = require(`../../../images/${props.shoeImage}`)
  const containerStyle: React.CSSProperties = {
    backgroundImage: `url(${image})`,
  };

  const navigate = useNavigate();
  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    navigate(`/viewdesign/${props.shoeId}`);
  };

  return (
      <div onClick={onClick} className="shoe-card">
        <div role="img" className="shoe-card-image-section" aria-label={props.altText} style={containerStyle}></div>
        <div className="shoe-card-bottom-text">
          {props.shoeName} - {props.shoePrice}
        </div>
      </div>
  );
}

export function CommunityShoeDesign(props: CustomShoeDesignProps) {

  const image = require(`../../../images/${props.shoeImage}`)
  const containerStyle: React.CSSProperties = {
    backgroundImage: `url(${image})`,
  };

  const navigate = useNavigate();
  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    navigate(`/viewdesign-custom/${props.shoeId}/${props.customId}`);
  };

  return (
      <div onClick={onClick} className="shoe-card">
        <div className="shoe-card-image-section" style={containerStyle}></div>
        <div className="shoe-card-bottom-text">
          {props.shoeName} - {props.shoePrice}
        </div>
      </div>
  );
}
