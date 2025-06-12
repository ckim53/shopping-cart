import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/"><h1 id="logo">Christina's Cart</h1></Link>
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