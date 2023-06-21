import { SizeButton } from './SizeButton'
import './SizeSelect.css'

export function SizeSelect() {

    const SizeSelect: React.FC = () => {
        const sizeButtons = Array.from(Array(16)).map((_, index) => (
            <SizeButton key={index} size={index+5}/>
        ));

        return <div className="size-select">{sizeButtons}</div>;
    };
    return <>
        <div className="size-select">
            <SizeSelect />
        </div>
    </>



}
