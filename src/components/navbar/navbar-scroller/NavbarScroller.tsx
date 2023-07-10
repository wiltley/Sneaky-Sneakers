import './NavbarScroller.css'
import { useState, useEffect } from 'react'

export function NavbarScroller() {
    const [counter, setCounter] = useState(0);
    const data: string[] = [
            'Introducing the latest Air Max model with improved cushioning and futuristic design.',
            'Participate in our customization contest for a chance to win exclusive prizes.',
            'Renowned artist teams up with a sneaker brand for a unique limited edition collection.',
            'Get a special discount on select sneaker models for a limited time only.',
            'Explore our vibrant and stylish sneaker designs perfect for the summer season.',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if (counter === data.length-1) {
                setCounter(0);
            } else {
                setCounter(counter + 1);
            }
        }, 3500);

        return () => {
            clearInterval(interval);
        };
    }, [counter, data.length]);

    return <>
        <div className="navbar-scroller-section">
            <div className="navbar-scroller-text">
                {data[counter]}
            </div>
        </div>
    </>
}
