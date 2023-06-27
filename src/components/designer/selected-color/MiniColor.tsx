import './MiniColor.css'

interface miniColorProps {
    backgroundColor: string;
}

export function MiniColor(props : miniColorProps) {
    const colorStyle: React.CSSProperties = {
        backgroundColor: props.backgroundColor,
    };

    return <>
        <div className="mini-color" style={colorStyle}>
        </div>
    </>
}
