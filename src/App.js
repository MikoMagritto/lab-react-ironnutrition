import React from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './Component/FoodBox';
import 'bulma/css/bulma.css';
import AddNewFood from './Component/AddNewFood';
import ListFood from './Component/FoodList';

class App extends React.Component {
  state = {
    foods: foods,
    openForm: false,
    searchBar: '',
    listFood: false,
    listArr: [],
  };

  handleChange(event) {
    event.preventDefault();
    let newList = foods;
    if (event.target.value !== '') {
      const regex = new RegExp('^' + event.target.value, 'gi');
      newList = foods.filter((food) => {
        return regex.test(food.name);
      });
      this.setState({
        [event.target.name]: event.target.value,
        foods: newList,
      });
    } else {
      this.setState({ [event.target.name]: event.target.value, foods: foods });
    }
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

  addOnlist = (obj) => {
    let listArrCopy = [...this.state.listArr];
    let alreadyInList = listArrCopy.find(
      (itemList) => itemList.name === obj.name
    );
    if (alreadyInList) {
      listArrCopy.map((itemList) => {
        if (itemList.name === obj.name) {
          itemList.quantity = Number(itemList.quantity) + Number(obj.quantity);
        }
        return itemList;
      });
    } else {
      listArrCopy.push(obj);
    }
    this.setState({
      listArr: listArrCopy,
      listFood: true,
    });
  };
  addFoodItem = (obj) => {
    let oldFood = [...this.state.foods];
    oldFood.push(obj);

    this.setState({
      foods: oldFood,
      openForm: false,
    });
  };
  removeFoodItem = (name) => {
    let oldFood = [...this.state.listArr];
    let index = oldFood.findIndex(el => el.name === name);
    oldFood.splice(index,1)
    this.setState({
      listArr: oldFood,
    });
  };
  // closeForm={this.closeForm}
  render() {
    return (
      (this.state.openForm && (
        <AddNewFood addFoodItem={this.addFoodItem} />
      )) || (
        <div className="app block">
          <div className="head-app block">
            <h1 className="title is-1 block">IronNutrition</h1>
            <button className="button is-light is-inverted block" onClick={() => this.openForm()}>Add new food</button>
            <input
              className="input"
              name="searchBar"
              type="search"
              placeholder="search..."
              onChange={(e) => this.handleChange(e)}
            ></input>
          </div>
          <div className="body-app">
          <ul className="sub-block">
            {this.state.foods.map((item) => (
              <li key={item.name}>
                <FoodBox
                  name={item.name}
                  calories={item.calories}
                  image={item.image}
                  callback={this.addOnlist}
                />
              </li>
            ))}
          </ul>
            {this.state.listFood && <ListFood list={this.state.listArr} removeFoodItem={this.removeFoodItem} />}
            </div>
        </div>
      )
    );
  }
}

export default App;
