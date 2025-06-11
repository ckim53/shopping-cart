import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const Cart = () => {
    const { quantity } = useOutletContext();

    return (
        <div className="cart">
            <h1>My Cart</h1>
            <p>You have {quantity} items in your cart.</p>
        </div>
    )
}

export default Cart;