import React, { Component } from 'react';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTodos: []
    };
    this.addToList = this.addToList.bind(this);
  }
  addToList(value) {
    this.setState(() => {
      this.state.listTodos.push(value);
    });
  }
  render() {
    return (
      <div>
        <Input submitItem={this.addToList} />
        <List list={this.state.listTodos} />
      </div>
    );
  }
}

class Input extends Component {
  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      strInput: ''
    };
  }
  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.props.submitItem(e.target.value);
      this.setState({
        strInput: ''
      });
    }
  }
  handleChange(e) {
    console.log(e, e.keyCode)
    this.setState({
      strInput: e.target.value
    });
  }
  render() {
    return (
      <input
        value={this.state.strInput}
        onKeyUp={this.handleKeyUp}
        onInput={this.handleChange}
        />
    );
  }
}
class List extends Component {
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
