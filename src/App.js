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

  switchNameHandler = (newName) => {
    this.setState({
        persons: [
          {name: newName, age: 32},
          {name: 'Parul Singh', age: 28},
          {name: 'Anshuman Singh', age: 5}
        ]
      })
  }
  onChangeHandler = (event) => {
    this.setState({
        persons: [
          {name: 'Ajay', age: 32},
          {name: event.target.value, age: 28},
          {name: 'Anshuman', age: 5}
        ]
      });
  }

  render() {
     return (
       <div className="App">
         <button onClick={() => this.switchNameHandler('Ajay Singh Sengar!')}>Switch Name</button>

         <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            />
          <Person
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Ajay Singh')}
            changed={this.onChangeHandler} 
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