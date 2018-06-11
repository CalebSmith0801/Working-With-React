import React, {PureComponent} from "react";
import Person from "./Person/Person";

class Persons extends PureComponent{
    constructor(props){
        super(props);

        console.log("[Persons.js] Inside Contructor", props);
    }

    componentWillMount(){
        console.log("[Persons.js] Inside ComponentWillMount");
    }

    componentDidMount(){
        console.log("[Persons.js] Inside ComponentDidMount");
    }

    componentWillReceiveProps(nextProps){
        console.log("[UPDATE Persons.js] Inside ComponentWillReceiveProps", nextProps);
    }

    /*shouldComponentUpdate(nextProps, nextState){
        console.log("[UPDATE Persons.js] Inside ShouldComponentUpdate", nextProps, nextState);
        return nextProps.persons !== this.props.persons || 
        nextProps.changed !== this.props.changed ||
        nextProps.clicked !== this.props.clicked;
    }*/

    componentWillUpdate(nextProps, nextState){
        console.log("[UPDATE Persons.js] Inside ComponentWillUpdate", nextProps, nextState);
    }

    componentDidUpdate(){
        console.log("[UPDATE Persons.js] Inside ComponentDidUpdate");
    }

    render(){
        console.log("[Persons.js] Inside Render");
        return (this.props.persons.map((person, index) => { 
            return <Person
                click={() => this.props.clicked(index)} 
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />  
        }));
    }   
}

export default Persons;
