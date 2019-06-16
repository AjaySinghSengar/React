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

    let person = null;
    if (this.state.showPersons) {
      person = (
        <div>
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

    return (
      <div className="App">
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle persons</button>

        {/*First Way - Output content conditionaly  */}
        {
          this.state.showPersons ?
            <div>
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
              />
            </div>
            : null
        }
        {/*Second Way - Output content conditionaly  */}
        {person}
      </div>
    );
  }
}
export default App;