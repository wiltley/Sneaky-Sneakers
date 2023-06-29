import './SelectedShoe.css';


interface selectedShoeProps {
    name: string | undefined;
    size: string | undefined;
}

export function SelectedShoe(props: selectedShoeProps) {

    if (props.size === undefined) {
        props.size = "";
    }

    const parsedSize = parseInt(props.size, 10);
    let size = `M${props.size}/W${parsedSize + 1.5}`;

    return <>
        <div className="selected-shoe">
            <div className="selected-shoe-main">
                Selected Shoe
                <div className="selected-shoe-underline">
                </div>
            </div>

            <div>Shoe Name: {props.name} </div>

            <div>Shoe Size: {size}</div>
        </div>
    </>

}
