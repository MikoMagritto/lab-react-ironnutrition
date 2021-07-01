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
      listFood: true
    });
    console.log(this.state);
  };

  render() {
    return (
      (this.state.openForm && <AddNewFood callback={this.closeForm} />) || (
        <div>
          <button onClick={() => this.openForm()}>Add new food</button>
          <input
            name="searchBar"
            type="search"
            placeholder="search..."
            onChange={(e) => this.handleChange(e)}
          ></input>
          <ul>
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
          {this.state.listFood && <ListFood list={this.state.listArr} />}
        </div>
      )
    );
  }
}

export default App;
