import { useOutletContext } from "react-router-dom";

function Cart () {
    const { setItems, items, setQuantity, quantity } = useOutletContext();

    function handleRemove(itemId, itemQuantity) {
        setItems(items.map(item => {
            return (item.id == itemId) ?
            {...item, quantity: 0, inCart: false} : item
        }));
        setQuantity(quantity - itemQuantity);
    }

    return (
        <div className="cart">
            <h1>My Cart</h1>
            <p>{quantity == 0 ? 'Your cart is empty.' : `Total Number of Items in Cart: ${quantity}`}</p>
            <ul>
                {items.filter(item => item.inCart).map(item => (
                <li key={item.id} className='cart-item'>
                <img src={item.image} alt={item.title} />
                <div className="cart-item-info">
                    <h3>{item.title}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <div>
                    <button className="remove-cart-item" onClick={() => handleRemove(item.id, item.quantity)}>Remove</button>
                    </div>
                </div>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default Cart;