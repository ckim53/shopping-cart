import '../styles/styles.css'
import QuantityButtons from './QuantityButtons';
import { useState } from 'react'
import PropTypes from 'prop-types';

function ItemCard ({ item, handleAdd, currentQuantity}) {
    const [quantity, setQuantity] = useState((currentQuantity == 0) ? 1 : currentQuantity);

    function handleIncrement(quantity) {
        setQuantity(quantity + 1);
    }

    function handleDecrement(quantity) {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    return (
        <div className={`card ${item.inCart ? 'in-cart' : ''}`}>
            <img src={item.image} alt={item.title}/>
            <h3>{item.title}</h3><br />
            <QuantityButtons 
                quantity={quantity}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
            /><br />
            <button className={`action-button ${quantity === currentQuantity ? 'no-update' : 'update'}`}
            onClick={() => {
                handleAdd(item.id, quantity);
            }}>{item.inCart ? 'Update Cart' : 'Add to cart'}</button>
        </div>
    );
}

ItemCard.propTypes = {
    item: PropTypes.object.isRequired,
    handleAdd: PropTypes.func.isRequired,
    currentQuantity: PropTypes.number.isRequired,
};

export default ItemCard;