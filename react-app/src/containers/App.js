import React, { Component } from 'react';
import classes from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      {id: '0001', name: "Caleb", age: 21},
      {id: '0002', name: "John", age: 31}
    ],

    showPersons: false
  }

  
  
  render() {
    let persons = null;

    if (this.state.showPersons){
      persons = <Persons 
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}/>;
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          showPersons={this.state.showPersons} 
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
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
