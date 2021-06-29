import React from 'react';

export default class AddNewFood extends React.Component {
state={
    name:'',
    calories:'',
    quantity:'',

}

  handleFormSubmit = (event) => {
    event.preventDefault()

    this.setState({[event.target.name]: event.target.value})
    
}

render(){
    return(
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={(e)=> this.handleFormSubmit(e)} />
   
            <label>Calories:</label>
            <input type="number" name="calories" value={this.state.calories} onChange={(e)=> this.handleFormSubmit(e)} />
   
            <label>quantity</label>
            <input type="number" name="quantity" checked={this.state.quantity} onChange={(e)=> this.handleFormSubmit(e)} />
            
            <button>Submit</button>
          </form>
        </div>
    )
}
}