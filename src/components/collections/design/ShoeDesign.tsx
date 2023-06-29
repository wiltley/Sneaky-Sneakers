import { useNavigate } from 'react-router-dom';
import './ShoeDesign.css';

interface ShoeDesignProps {
  shoeId: number;
  shoeName: string;
  shoePrice: string;
}

export function ShoeDesign(props: ShoeDesignProps) {
  const navigate = useNavigate();

  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    navigate(`/viewdesign/${props.shoeId}`);
  };

  return (
      <div onClick={onClick} className="shoe-card">
        <div className="shoe-card-image-section"></div>
        <div className="shoe-card-bottom-text">
          {props.shoeName} - {props.shoePrice}
        </div>
      </div>
  );
}
