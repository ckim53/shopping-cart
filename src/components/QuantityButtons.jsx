import React, { useState } from 'react';

function QuantityButtons({quantity, handleIncrement, handleDecrement}) {

    return (
        <div>
          <button onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
      );
}
    
export default QuantityButtons;