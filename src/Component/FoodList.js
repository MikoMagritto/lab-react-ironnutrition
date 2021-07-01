import React from 'react';

export default class ListFood extends React.Component {
  render() {
    console.log(this.props);
    let totalCal = this.props.list.reduce(
      (acc, val) => acc + Number(val.quantity) * Number(val.calories),
      0
    );
    return (
      <div className="sub-block">
        <h2 className="title is-2 block">Today's foods</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Calories</th>
              <th>Total</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th>Total</th>
              <th>{totalCal}</th>
            </tr>
          </tfoot>
          <tbody>
            {this.props.list.map((item) => {
              console.log(item);
              return (
                <tr key={item.name}>
                  <th>{item.name}</th>
                  <th>{item.quantity}</th>
                  <th>{item.calories}</th>
                  <th>{Number(item.quantity) * Number(item.calories)}</th>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* <h4 className="title is-4">Total: {totalCal} cal</h4> */}
      </div>
    );
  }
}
