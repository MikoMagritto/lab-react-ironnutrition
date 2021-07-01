import React from 'react';

export default class ListFood extends React.Component {
  render() {
    console.log(this.props);
    let totalCal = this.props.list.reduce(
      (acc, val) => acc + Number(val.quantity) * Number(val.calories),
      0
    );
    return (
      <>
        <h2>Today's foods</h2>
        <ul>
          {this.props.list.map((item) => {
            console.log(item);
            return (
              <li key={item.name}>
                {item.quantity} {item.name} {item.calories}cal each.  Total:{' '}
                {Number(item.quantity) * Number(item.calories)}
              </li>
            );
          })}
        </ul>
        <p>Total calories for the day : {totalCal}cal</p>
      </>
    );
  }
}
