import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Ajay', age: 32, id: 'qwqw' },
      { name: 'Parul', age: 28, id: 'qed' },
      { name: 'Anshuman', age: 5, id: 'qewqe' }
    ],
    otherState: 'test',
    showPersons: false
  }

  deletePersonsHandler = (personIndex) => {
    //Array is referance type in JS, directaly calling the splice on the 
    //original array is the bad idea. slice is the method which returns a copy.
    //const persons = this.state.persons.slice();
    // Alternative is spred array
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // JS object is a referance type
    //const person = this.state.persons[personIndex];
    const person = {
      ...this.state.persons[personIndex]
    };

    //alternative approch
    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    //Inline styling
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherited',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonsHandler(index)}
              //Altersnative of above line
              //click={this.deletePersonsHandler.bind(this,index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}
            />
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }

    return (
      <div className="App">
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle persons</button>

        {persons}
      </div>
    );
  }
}
export default App;