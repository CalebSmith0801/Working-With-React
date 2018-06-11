import React, { Component } from 'react';
import classes from './App.css';
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

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
    let btnClass = '';

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => { 
            return <ErrorBoundary key={person.id}><Person
            click={() => this.deletePersonHandler(index)} 
            name={person.name} 
            age={person.age}
            changed={(event) => this.nameChangedHandler(event, person.id)} /></ErrorBoundary>  
          })}
        </div>
      );

      btnClass = classes.red;
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2)
      assignedClasses.push( classes.red );
    if (this.state.persons.length <= 1)
      assignedClasses.push( classes.bold );


    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
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
