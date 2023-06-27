import './Color.css'

interface colorProps {
    backgroundColor: string;
    setColor: Function;
}


export function Color(props: colorProps) {

    const colorStyle: React.CSSProperties = {
        backgroundColor: props.backgroundColor,
    };
    const onClick = (event : React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        props.setColor(props.backgroundColor);
    }

    return <>
        <div onClick={onClick} className="color" style={colorStyle}>

        </div>
    </>
}
