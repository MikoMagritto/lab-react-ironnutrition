import React from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './Component/FoodBox';
import 'bulma/css/bulma.css';
import AddNewFood from './Component/AddNewFood';

class App extends React.Component {
  state = {
    foods: foods,
    openForm: false,
  };

  openForm() {
    this.setState({
      openForm: true,
    });
  }
  render() {
    return (
      (this.state.openForm && <AddNewFood />) || (
        <div>
          <button onClick={() => this.openForm()}>Add new food</button>
          <ul>
            {foods.map((item) => (
              <li key={item.name}>
                <FoodBox
                  name={item.name}
                  calorie={item.calories}
                  image={item.image}
                />
              </li>
            ))}
          </ul>
        </div>
      )
    );
  }
}

export default App;
