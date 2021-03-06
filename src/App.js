import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Hello name="Noclip" />
        <Clock />
        <Toggle />
        <ShowOne show={true} />
        <NumberList list={[1,1,5,6]} />
        <WaterThermometer />
        <WelcomeDialog></WelcomeDialog>
      </div>
    );
  }
}

function WelcomeDialog() {
  return (
    <FancyBorder xxx="123213" children="222" />
  );
}
function FancyBorder(props) {
  console.log(props)
  return (
    <div>
      {props.children}
    </div>
  );
}

class WaterThermometer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: ''
    };
    this.handleTempChange = this.handleTempChange.bind(this);
  }
  handleTempChange(temp) {
    this.setState({
      temp: temp
    });
  }
  render() {
    const temp =  this.state.temp;
    return (
      <div>
        <h1>{temp >= 100 ? '沸腾了' : '水还没开'}</h1>
        <BoilingVerdict temp={temp} onTempChange={this.handleTempChange} />
      </div>
    );
  }
}
class BoilingVerdict extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: ''
    };
    this.handleInputTemp = this.handleInputTemp.bind(this);
  }
  handleInputTemp(e) {
      this.props.onTempChange(e.target.value);
  }
  render() {
    const temp = this.props.temp
    return (
      <input type="text" value={temp} onChange={this.handleInputTemp} />
    );
  }
}

function NumberList (props) {
  const numbers = props.list;
  const itemList = numbers.map(
    (num, index) => <li key={index}>{num}</li>
  );
  return (
    <ul>{itemList}</ul>
  );
}

class ShowOne extends Component {
  constructor(props) {
    super(props);
    this.handleShowClick = this.handleShowClick.bind(this);
    this.handleHideClick = this.handleHideClick.bind(this);
    this.state = {
      show: true
    };
  }
  handleShowClick() {
    this.setState({
      show: true
    });
  }
  handleHideClick() {
    this.setState({
      show: false
    });
  }
  render() {
    let button = null;
    if (this.state.show) {
      button = <button onClick={this.handleHideClick}>Show</button>;
    } else {
      button = <button onClick={this.handleShowClick}>Hide</button>;
    }
    return (
      <div>
        {button}
      </div>
    );
  }
}

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

function Hello (props) {
  return <div>Hello {props.name}</div>;
}

export default App;
