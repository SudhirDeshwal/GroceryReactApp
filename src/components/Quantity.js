import React, { Component } from 'react';

class Quantity extends Component {
  state = {
    quantity: 0,
  };
  decrementQuantity = () => {
    this.setState((prevState) => ({ quantity: prevState.quantity - 1 }));
  };
  incrementQuantity = () => {
    this.setState((prevState) => ({ quantity: prevState.quantity + 1 }));
  };
  render() {
    return (
      <div className='counter'>
        <button
          className='counter-action decrement'
          onClick={this.decrementQuantity}
        >
          {' '}
          -{' '}
        </button>
        <span className='counter-items'> {this.state.quantity}</span>
        <button
          className='counter-action increment'
          onClick={this.incrementQuantity}
        >
          {' '}
          +{' '}
        </button>
      </div>
    );
  }
}

export default Quantity;
