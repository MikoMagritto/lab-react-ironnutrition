import React from 'react';

export default class AddNewFood extends React.Component {
  state = {
    name: '',
    calories: ''
  };

  handleFormChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addFoodItem({
      ...this.state,
      image: "https://via.placeholder.com/60"
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleFormSubmit(e)}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={(e) => this.handleFormChange(e)}
          />

          <label>Calories:</label>
          <input
            type="number"
            name="calories"
            value={this.state.calories}
            onChange={(e) => this.handleFormChange(e)}
          />

          {/* <label>quantity</label>
          <input
            type="number"
            name="quantity"
            checked={this.state.quantity}
            onChange={(e) => this.handleFormChange(e)}
          /> */}

          <button>Submit</button>
        </form>
      </div>
    );
  }
}
