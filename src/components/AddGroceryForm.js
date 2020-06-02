import React from 'react';

class AddGroceryForm extends React.Component {
  state = {
    value: '',
  };
  handleValueChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addGrocery(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='Grocery name'
          value={this.state.value}
          onChange={this.handleValueChange}
        />
        <input type='submit' value='add Grocery' />
      </form>
    );
  }
}

export default AddGroceryForm;
