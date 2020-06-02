import React, { Component } from 'react';
import Header from './Header';
import Grocery from './Grocery';
import AddGroceryForm from './AddGroceryForm';

class App extends Component {
  state = {
    grocery: [
      {
        name: 'apple',
        quantity: 5,
        id: 1,
      },
      {
        name: 'orange',
        quantity: 4,
        id: 2,
      },
      {
        name: 'cucumber',
        quantity: 3,
        id: 3,
      },
    ],
  };
  previd = 4;
  handleRemoveGrocery = (id) => {
    this.setState((prevState) => {
      return {
        grocery: prevState.grocery.filter((g) => g.id !== id),
      };
    });
  };

  handleAddGrocery = (name) => {
    this.setState((prevState) => {
      return {
        grocery: [
          ...prevState.grocery,
          {
            name: name,
            quantity: 0,
            id: (this.previd += 1),
          },
        ],
      };
    });
  };

  render() {
    return (
      <div>
        <Header title='Grocery List' items={this.state.grocery.length} />

        {/* Grocery list */}
        {this.state.grocery.map((g) => (
          <Grocery
            name={g.name}
            quantity={g.quantity}
            key={g.id.toString()}
            id={g.id}
            removeGrocery={this.handleRemoveGrocery}
          />
        ))}
        <AddGroceryForm addGrocery={this.handleAddGrocery} />
      </div>
    );
  }
}

export default App;
