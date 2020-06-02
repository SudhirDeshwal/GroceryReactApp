import React from 'react';
import Quantity from './Quantity';

const Grocery = (props) => {
  return (
    <div className='grocery'>
      <span className='grocery-name'>
        <button
          className='remove-grocery'
          onClick={() => props.removeGrocery(props.id)}
        >
          X
        </button>
        {props.name}
      </span>
      <Quantity quantity={props.quantity} />
    </div>
  );
};

export default Grocery;
