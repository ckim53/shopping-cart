import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
    return (
        <div className="navbar">
            <h1 id="logo"><Link to="/">Christina's Cart</Link></h1>
            <nav>
                <ul>
                    <li>
                    <Link to="shop">
                    Shop
                    </Link>
                    </li>
                    <li>
                    <Link to="cart">View Cart</Link>
                    </li>
                </ul>
            </nav>
      </div>
    )
}

export default NavBar;