import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <div className="cart">
            <h1>My Cart</h1>
            <Link to="/">Back to Home Page</Link>
        </div>
    )
}

export default Cart;