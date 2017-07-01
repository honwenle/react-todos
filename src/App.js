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
    this.timer = setInterval(function () {
      var op = this.state.opacity;
      op -= .05;
      if (op < .1) {
        op = 1
      }
      this.setState({
        opacity: op
      });
    }.bind(this), 100)
  }
  render() {
    return (
      <div style={{opacity: this.state.opacity}}>
        Hello {this.props.name}
      </div>
    );
  }
}

export default App;
