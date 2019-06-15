import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Ajay', age: 32},
      {name: 'Parul', age: 28},
      {name: 'Anshuman', age: 5}
    ],
    otherState: 'test'
  }

  switchNameHandler = () => {
    console.log(this.state);
    this.setState({
        persons: [
          {name: 'Ajay Singh', age: 32},
          {name: 'Parul Singh', age: 28},
          {name: 'Anshuman Singh', age: 5}
        ]
      })
    console.log(this.state);
  }
  render() {
     return (
       <div className="App">
         <button onClick={this.switchNameHandler}>Switch Name</button>

         <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} 
            />
          <Person
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler} 
            />
          <Person
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} 
            />
       </div>
     );
  }
}
export default App;