// 创建一个todolist应用
import React, { Component } from 'react';
import './style.css';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: '',
      lastEditValue: '',
    };
  }
  render() { 
    return ( 
      <div className='todo-list'>
        <div className='form-input'>
          <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul className='list-ul'>
          {
            this.state.list.map((item, index) => {
              return (
                <TodoItem
                  key={index}
                  item={item}
                  index={index}
                  handleItemDelete={this.handleItemDelete.bind(this)}
                  handleChangeEditStatus={this.handleChangeEditStatus.bind(this)}
                  handleChangeDone={this.handleChangeDone.bind(this)}
                  handleEditChange={this.handleEditChange.bind(this)}
                  handleSaveValue={this.handleSaveValue.bind(this)}
                />
              )
            })
          }
        </ul>
      </div>
     );
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleBtnClick() {
    if (this.state.inputValue === '') {
      alert('请输入内容');
      return;
    }
    this.setState({
      list: [...this.state.list, {
        value: this.state.inputValue,
        isEdit: false,
        isDone: false
      }],
      inputValue: ''
    })
  }
  handleItemDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list
    })
  }
  handleChangeEditStatus(index, isEdit) {
    const list = this.state.list.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          isEdit,
          value: isEdit ? item.value : this.state.lastEditValue, // 取消编辑时，将input的值重置为原来的值
        }
      } else {
        return item;
      }
    })
    this.setState({
      list,
      lastEditValue: isEdit ? this.state.list[index].value : "",
    });
  }
  handleSaveValue(index, value) {
    const list = this.state.list.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          value,
          isEdit: false,
        }
      } else {
        return item;
      }
    })
    this.setState({
      list,
      lastEditValue: ''
    })
  }
  handleEditChange(e) {
    const list = this.state.list.map((item, i) => {
      if (item.isEdit) {
        return {
          ...item,
          value: e.target.value,
        }
      } else {
        return item;
      }
    })
    this.setState({
      list
    })
  }
  handleChangeDone(index, e) {
    const list = this.state.list.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          isDone: e.target.checked,
        }
      } else {
        return item;
      }
    })
    this.setState({
      list
    })
  }
}

export default TodoList;