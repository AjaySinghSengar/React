import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Ajay', age: 32},
      {name: 'Parul', age: 28},
      {name: 'Anshuman', age: 5},
    ]
  }
  render() {
     return (
       <div className="App">
         <h1>Hi, I'm a React App </h1>
         <Person name={this.state.persons[0].name} 
                 age={this.state.persons[0].age} 
                  />
         <Person name='Anshuman' age='4'> Enjoy playing ! </Person>
       </div>
     );

    //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does it work ?'));
  }
}
export default App;