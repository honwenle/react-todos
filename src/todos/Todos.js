import React, { Component } from 'react';
let initList = [
  {
    id: 1,
    finish: false,
    value: 'test1'
  }
];
class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTodos: initList
    };
    this.addToList = this.addToList.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addToList(value) {
    let id = Math.random() * 100 + '' + new Date().getTime();
    let finish = false;
    let item = {
      id,
      finish,
      value
    };
    this.setState(() => {
      this.state.listTodos.push(item);
    });
  }
  deleteItem(id) {
    let newlist = this.state.listTodos.filter(item =>
      item.id !== id
    );
    this.setState({
      listTodos: newlist
    });
  }
  render() {
    return (
      <div>
        <Input submitItem={this.addToList} />
        <List list={this.state.listTodos} onRemoveItem={this.deleteItem} />
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
    let str = e.target.value;
    if (e.keyCode === 13 && str) {
      this.props.submitItem(str);
      this.setState({
        strInput: ''
      });
    }
  }
  handleChange(e) {
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
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(id) {
    this.props.onRemoveItem(id);
  }
  render() {
    const list = this.props.list.map(
      item =>
        <li key={item.id}>
          <input type="checkbox"/>
          <span onClick={this.handleClick.bind(this, item.id)}> [X] </span>
          {item.value}
        </li>
    );
    return (
      <ul>{list}</ul>
    );
  }
}

export default Todos;
