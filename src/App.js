import React from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './Component/FoodBox'
import 'bulma/css/bulma.css';
import { render } from '@testing-library/react';
import AddNewFood from './Component/AddNewFood';

class App extends React.Component {
state={
  foods : foods
}


render(){
  return (
    <div> 
      <button onClick={() => this.AddNewFood() }>Add new food</button>
  <ul>
    {foods.map(item => (
      <li key={item.name}>
        <FoodBox name={item.name} calorie={item.calories} image={item.image} />
      </li>
    ))}
  </ul>
  </div>
   
  );
}
}

export default App;
