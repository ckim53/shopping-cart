import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import ItemCard from "./ItemCard";

const Cart = () => {
    const { setItems, items, quantity, handleAdd } = useOutletContext();
    
    return (
        <div className="cart">
            <h1>My Cart</h1>
            <p>Total Number of Items in Cart: {quantity}</p>
            <ul>
                {items.filter(item => item.inCart)
                .map(item => 
                    <div className='cart-item'>
                        <img src={item.image} alt={item.title}/>
                        <div className="cart-item-info">
                            <h3>{item.title}</h3><br />
                            <p>Quantity: {item.quantity}</p>
                            <div>
                                <button className="edit-cart-item">Edit</button>
                                <button className="remove-cart-item">Remove</button>
                            </div>
                        </div>
                    </div>
                )}
            </ul>
        </div>
    )
}

export default Cart;