import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Ajay', age: 32 },
      { name: 'Parul', age: 28 },
      { name: 'Anshuman', age: 5 }
    ],
    otherState: 'test',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 32 },
        { name: 'Parul Singh', age: 28 },
        { name: 'Anshuman Singh', age: 5 }
      ]
    })
  }
  onChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Ajay', age: 32 },
        { name: event.target.value, age: 28 },
        { name: 'Anshuman', age: 5 }
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    //Inline styling
    const style = {
      backgroundColor: 'white',
      font: 'inherited',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
      <div>
        {
          this.state.persons.map(person => {
            return <Person
              name={person.name}
              age={person.name}
            />
          })}
      </div>
      );
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