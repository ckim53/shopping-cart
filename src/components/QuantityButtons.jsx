import PropTypes from 'prop-types';

function QuantityButtons({quantity, handleIncrement, handleDecrement}) {

    return (
        <div>
          <button onClick={() => {handleDecrement(quantity)}}>-</button>
          <span>{quantity}</span>
          <button onClick={() => {handleIncrement(quantity)}}>+</button>
        </div>
      );
}
    
export default QuantityButtons;

QuantityButtons.propTypes = {
  quantity: PropTypes.number.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired
}