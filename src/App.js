import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      opacity: 1
    }
  }
  componentDidMount () {
    var dt = .05;
    this.timer = setInterval(function () {
      var op = this.state.opacity;
      op -= dt;
      if (op < .1) {
        dt = -.05;
      } else if (op > 1) {
        dt = .05;
      }
      this.setState({
        opacity: op
      });
    }.bind(this), 100)
  }
  render() {
    return (
      <div style={{opacity: this.state.opacity}}>
        <Hello name="Noclip"></Hello>
        <Clock></Clock>
      </div>
    );
  }
}

class Clock extends Component {
  render() {
    return (
      <div>
        <h1>{new Date().toLocaleTimeString()}</h1>
      </div>
    )
  }
}

function Hello (props) {
  return <div>Hello {props.name}</div>;
}

export default App;
