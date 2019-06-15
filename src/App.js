import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';

//React hook does not merge the element in insted it replace it.
const app = (props) => {
  //Array destucturing
  const [personState, setPersonState] = useState({
    persons: [
      {name: 'Ajay', age: 32},
      {name: 'Parul', age: 28},
      {name: 'Anshuman', age: 5},
    ],
    otherState: 'test'
  });

  const [otherState, setOtherState] = useState('some other state');

  console.log(personState, otherState);

  // In JS/React function can have a function
  const switchNameHandler = () => {
    console.log(setPersonState);
    setPersonState({
        persons: [
          {name: 'Ajay Singh', age: 32},
          {name: 'Parul Singh', age: 28},
          {name: 'Anshuman Singh', age: 5},
        ],
        //React hook does not merge the element in insted it replace it.
        //otherState: personState.otherState
      }
    );
  }

  return (
    <div className="App">
      <button onClick={switchNameHandler}>Switch Name</button>

      <h1>Hi, I'm a React App </h1>
      <Person name={personState.persons[0].name} 
              age={personState.persons[0].age} 
               />
       <Person name={personState.persons[1].name} 
              age={personState.persons[1].age} 
               />
       <Person name={personState.persons[2].name} 
              age={personState.persons[2].age} 
               />
    </div>
  );
} // app function 

class App extends Component {
  state = {
    persons: [
      {name: 'Ajay', age: 32},
      {name: 'Parul', age: 28},
      {name: 'Anshuman', age: 5},
    ],
    otherState: 'test'
  }

  switchNameHandler = () => {
    console.log(this.state);
    this.setState(
      {
        persons: [
          {name: 'Ajay Singh', age: 32},
          {name: 'Parul Singh', age: 28},
          {name: 'Anshuman Singh', age: 5},
        ]
      }
    )
    console.log(this.state);
  }
  render() {
     return (
       <div className="App">
         <button onClick={this.switchNameHandler}>Switch Name</button>

         <h1>Hi, I'm a React App </h1>
         <Person name={this.state.persons[0].name} 
                 age={this.state.persons[0].age} 
                  />
          <Person name={this.state.persons[1].name} 
                 age={this.state.persons[1].age} 
                  />
          <Person name={this.state.persons[2].name} 
                 age={this.state.persons[2].age} 
                  />
       </div>
     );
  }
}
export default app;