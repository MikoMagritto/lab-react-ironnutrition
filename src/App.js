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
    searchBar:''

  };

  handleChange(event){
    event.preventDefault()
    let newList = [...foods]
    newList.sort()
    this.setState({[event.target.name]: event.target.value})
  }

  openForm() {
    this.setState({
      openForm: true,
    });
  }
 closeForm() {
    this.setState({
      openForm: false,
    });
  }
  render() {
    return (
      (this.state.openForm && <AddNewFood callback={this.closeForm}/>) || (
        <div>
          <button onClick={() => this.openForm()}>Add new food</button>
          <input name="searchBar" type="search" placeholder="search..." onChange={(e)=> this.handleChange(e)}></input>
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
