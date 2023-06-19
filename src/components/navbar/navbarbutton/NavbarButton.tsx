import './NavbarButton.css'


interface navbarButton {
    link: string;
}

export function NavbarButton(props : navbarButton) {


    const onClick = (event : React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        window.location.href = props.link;
    }

    return <>
        <div onClick={onClick} className="navbar-button">
            <div className="navbar-button-text">
                TESTING
            </div>
        </div>
    </>

}
