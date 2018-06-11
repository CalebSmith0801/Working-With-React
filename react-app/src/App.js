import React, { Component } from 'react';
import StyleClasses from './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {id: '0001', name: "Caleb", age: 21},
      {id: '0002', name: "John", age: 31}
    ],

    showPersons: false
  }

  
  
  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;
    if (this.state.showPersons){
      style.backgroundColor = "red";
      persons = (
        <div>
          {this.state.persons.map((person, index) => { 
            return <Person
            click={() => this.deletePersonHandler(index)} 
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)} />  
          })}
        </div>
      );
    }

    let classes = [];
    if (this.state.persons.length <= 2)
      classes.push( StyleClasses.red );
    if (this.state.persons.length <= 1)
      classes.push( StyleClasses.bold );


    return (
      <div className={StyleClasses.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }

  deletePersonHandler(personIndex){
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons});
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }
}

export default App;
