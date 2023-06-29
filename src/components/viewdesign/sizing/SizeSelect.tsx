import { SizeButton } from './SizeButton'
import './SizeSelect.css'

interface sizeSelectProps {
    selectSize: Function;
    selectedSize: number;
}

export function SizeSelect(props: sizeSelectProps) {

    const SizeSelect: React.FC = () => {
        const sizeButtons = Array.from(Array(16)).map((_, index) => (
            <SizeButton key={index} size={index+5} selectSize={props.selectSize} selectedSize={props.selectedSize}/>
        ));

        return <div className="size-select">{sizeButtons}</div>;
    };
    return <>
        <div className="size-select">
            <SizeSelect />
        </div>
    </>



}
