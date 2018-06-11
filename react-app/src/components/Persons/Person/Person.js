import React, {Component} from "react";
import classes from "./Person.css";

class Person extends Component{
    constructor(props){
        super(props);

        console.log("[Person.js] Inside Contructor", props);
    }

    componentWillMount(){
        console.log("[Person.js] Inside ComponentWillMount");
    }

    componentDidMount(){
        console.log("[Person.js] Inside ComponentDidMount");
    }

    render(){
        console.log("[Person.js] Inside Render");
        return(
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        );
    }
}


Person.defaultProps = {
    name: "sam",
    age: 21
}

export default Person;
