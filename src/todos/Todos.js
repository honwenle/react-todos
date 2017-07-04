import React, { Component } from 'react';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTodos: []
    };
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(value) {
    this.setState(() => {
      this.state.listTodos.push(value);
    });
  }
  render() {
    return (
      <div>
        <Input inputChange={this.onInputChange} />
        <List list={this.state.listTodos} />
      </div>
    );
  }
}

class Input extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    if (e.keyCode === 13) {
      this.props.inputChange(e.target.value);
    }
  }
  render() {
    return (
      <input onKeyUp={this.handleChange} />
    );
  }
}
class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const list = this.props.list.map(
      (item, index) => <li key={index}>{item}</li>
    );
    return (
      <ul>{list}</ul>
    );
  }
}

export default Todos;
