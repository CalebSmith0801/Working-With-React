import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import Aux from "../hoc/Aux";
import withClass from "../hoc/withClass";

class App extends PureComponent {
  constructor(props){
    super(props);

    console.log("[App.js] Inside Contructor");
  }

  componentWillMount(){
    console.log("[App.js] Inside ComponentWillMount");
  }

  componentDidMount(){
    console.log("[App.js] Inside ComponentDidMount");
  }

  /*shouldComponentUpdate(nextProps, nextState){
    console.log("[UPDATE App.js] Inside ShouldComponentUpdate", nextProps, nextState);
    return nextProps !== this.props.persons ||
     nextProps.showPersons !== this.props.showPersons;
  }*/

  componentWillUpdate(nextProps, nextState){
      console.log("[UPDATE App.js] Inside ComponentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate(){
      console.log("[UPDATE App.js] Inside ComponentDidUpdate");
  }


  state = {
    persons: [
      {id: '0001', name: "Caleb", age: 21},
      {id: '0002', name: "John", age: 31}
    ],

    showPersons: false
  }

  
  
  render() {
    console.log("[App.js] Inside Render");

    let persons = null;

    if (this.state.showPersons){
      persons = <Persons 
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}/>;
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit 
          appTitle={this.props.title}
          showPersons={this.state.showPersons} 
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
        {persons}
      </Aux>
    );
  }

  deletePersonHandler = (personIndex) => {
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

export default withClass(App, classes.App);
