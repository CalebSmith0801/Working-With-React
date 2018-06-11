import React, { Component } from 'react';
import './App.css';
import Validation from "./Validation.js";
import CharComponent from "./CharComponent.js";

class App extends Component {
  state={
    text: "",
  }

  render() {
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input type="text" onChange={this.updateText} value={this.state.text}/>
        <p>{this.state.text}</p>
        <Validation length={this.state.text.length}/>
        {this.state.text.split('').map((textLetter, index) => {
          return (<CharComponent letter={textLetter} key={index} click={() => this.removeLetter(textLetter)} />)
        })}
      </div>
    );
  }

  updateText = (event) => {
    this.setState({text: event.target.value});
  }

  removeLetter = (letter) => {
    const letters = [...this.state.text.split('')];

    const index = letters.findIndex(l => {
      return l === letter;
    });

    letters.splice(index, 1);
    this.setState({text: letters.join('')});
  }
}

export default App;
