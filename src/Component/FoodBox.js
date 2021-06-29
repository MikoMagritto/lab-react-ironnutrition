import React from 'react';

class FoodBox extends React.Component {
  state = {
    number: '1',
  };
  handelchange(e) {
    this.setState({ number: e.target.value });
  }
  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt="tof"/>
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
                  className="input"
                  type="number"
                  defaultValue={this.state.number}
                  onChange={(e) => this.handelchange(e)}
                />
              </div>
              <div className="control">
                <button className="button is-info" >+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
