import React from 'react';

class FoodBox extends React.Component {
  state = {
    number: 1,
  };
  handelchange(e) {
    let newnumber = Number(e.target.value) > 0 ? e.target.value : '0';
    this.setState({ number: newnumber });
  }
  handleAddOnList(e) {
    e.preventDefault();
    let objFood = {
      name: this.props.name,
      calories: this.props.calories,
      image: this.props.image,
      quantity: this.state.number
    };
    this.props.callback(objFood)

  }
  render() {
    return (
      <div className="box block">
        <article className="media block">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt="tof" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <strong>{this.props.calories}</strong>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  name="number"
                  className="input is-small"
                  type="number"
                  value={this.state.number}
                  onChange={(e) => this.handelchange(e)}
                />
              </div>
              <div className="control">
                <button className="button is-info is-small" onClick={(e) => {
                  this.handleAddOnList(e)
                }}>+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
