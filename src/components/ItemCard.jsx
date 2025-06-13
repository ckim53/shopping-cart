import '../styles/styles.css'
import QuantityButtons from './QuantityButtons';
import { useState } from 'react'
import PropTypes from 'prop-types';

function ItemCard ({ id, title, image, inCart, handleAdd, currentQuantity}) {
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
        <div className={`card ${inCart ? 'in-cart' : ''}`}>
            <img src={image} alt={title}/>
            <h3>{title}</h3><br />
            <QuantityButtons 
                quantity={quantity}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
            /><br />
            <button className='action-button' onClick={() => {
                handleAdd(id, quantity);
            }}>{inCart ? 'Update Cart' : 'Add to cart'}</button>
        </div>
    );
}

ItemCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    inCart: PropTypes.bool.isRequired,
    handleAdd: PropTypes.func.isRequired,
    currentQuantity: PropTypes.number.isRequired,
};

export default ItemCard;