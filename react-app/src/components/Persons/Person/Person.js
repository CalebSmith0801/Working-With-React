import React, {Component} from "react";
import PropTypes from "prop-types";
import classes from "./Person.css";
import withClass from "../../../hoc/withClass";
import Aux from "../../../hoc/Aux";

class Person extends Component{
    constructor(props){
        super(props);

        console.log("[Person.js] Inside Contructor", props);

        this.inputElement = React.createRef();
    }

    componentWillMount(){
        console.log("[Person.js] Inside ComponentWillMount");
    }

    componentDidMount(){
        console.log("[Person.js] Inside ComponentDidMount");
    }

    focus() {
        this.inputElement.current.focus();
    }

    render(){
        console.log("[Person.js] Inside Render");
        return(
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputElement} 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}/>
            </Aux>
        );
    }
}


Person.defaultProps = {
    name: "sam",
    age: 21
}

Person.propTypes = {
    name: PropTypes.string,
    click: PropTypes.func,
    age: PropTypes.number,
    changed: PropTypes.func,
}

export default withClass(Person, classes.Person);
