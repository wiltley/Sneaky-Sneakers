import './SizeButton.css'

interface sizingButton {
    size: number;
}

export function SizeButton(props: sizingButton) {

    return <>

        <div className="size-button">
            <div className="size-button-text">
                M{props.size}/W{props.size + 1.5}
            </div>
        </div>
    </>

}
