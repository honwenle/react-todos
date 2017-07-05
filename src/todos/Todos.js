import React, { Component } from 'react';
import './todos.css';
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
    this.setFinish = this.setFinish.bind(this);
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
  setFinish(id, value) {
    let newlist = this.state.listTodos.map(item => {
      item.id === id && (item.finish = value)
      return item;
    });
    this.setState({
      listTodos: newlist
    });
  }
  render() {
    return (
      <div>
        <Input submitItem={this.addToList} />
        <List list={this.state.listTodos} onRemoveItem={this.deleteItem} onSetFinish={this.setFinish} />
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
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick(id) {
    this.props.onRemoveItem(id);
  }
  handleChange(id, e) {
    this.props.onSetFinish(id, e.target.checked);
  }
  render() {
    const list = this.props.list.map(
      item =>
        <li key={item.id}>
          <input type="checkbox" onChange={this.handleChange.bind(this, item.id)} />
          <span className='x' onClick={this.handleClick.bind(this, item.id)}> [X] </span>
          <span className={item.finish && 'del'}>{item.value}</span>
        </li>
    );
    return (
      <ul>{list}</ul>
    );
  }
}

export default Todos;
