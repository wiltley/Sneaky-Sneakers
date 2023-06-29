import './SizeButton.css'

interface sizingButton {
    size: number;
    selectSize: Function;
    selectedSize: number;
}

export function SizeButton(props: sizingButton) {
    let size = `M${props.size}/W${props.size + 1.5}`;

    const onClick = (event : React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        props.selectSize(props.size);
    }

    return <>
        <div onClick={onClick} className={`size-button ${props.size === props.selectedSize ? `active` : ``}`}>
            <div className="size-button-text">
                {size}
            </div>
        </div>
    </>

}
