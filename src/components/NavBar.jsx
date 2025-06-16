import { Link, useLocation } from "react-router-dom";
import { useRef, useEffect, useState } from 'react';

function NavBar ({quantity}) {
    const prevQuantityRef = useRef(quantity);
    const [quantityChanged, setQuantityChanged] = useState(false);

    const location = useLocation();
    const onCartPage = location.pathname === '/cart';

    useEffect(() => {
        const diffValue = quantity - prevQuantityRef.current;
    
        if (diffValue !== 0) {
            setQuantityChanged(true);
            prevQuantityRef.current = quantity;

            const timeout = setTimeout(() => {
                setQuantityChanged(false);
            }, 3000);

            return () => clearTimeout(timeout);
        }
    }, [quantity]);

    return (
        <div className="navbar">
            <Link to="/"><h1 id="logo">Christina's Cart</h1></Link>
            <nav>
                <ul>
                    <li><Link to="shop">Shop</Link></li>
                    <li className="cart-link">
                        <Link to="cart">View Cart
                        {!onCartPage && quantity > 0 && ( <span className={`cart-notification ${quantityChanged ? 'visible' : 'hidden'}`}>
                            {quantityChanged ? quantity : ''}
                        </span> )}
                    </Link></li>
                </ul>
            </nav>
      </div>
    )
}

export default NavBar;