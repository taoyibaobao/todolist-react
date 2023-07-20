// 函数式组件 + useState + 状态提升
import "../TodoList/style.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const initialState = {
  list: [],
  inputValue: "",
  lastEditValue: "",
};

function TodoList() {
  const [state, setState] = useState(initialState);

  function handleInputChange(e) {
    setState({
      ...state,
      inputValue: e.target.value,
    });
  }
  
  function handleBtnClick() {
    if (state.inputValue === "") {
      alert("请输入内容");
      return;
    }
    setState({
      ...state,
      list: [
        ...state.list,
        {
          value: state.inputValue,
          isEdit: false,
          isDone: false,
        },
      ],
      inputValue: "",
    });
  }
  
  function handleItemDelete(index) {
    const list = [...state.list];
    list.splice(index, 1);
    setState({
      ...state,
      list,
    });
  }
  
  function handleChangeEditStatus(index, isEdit) {
    const list = state.list.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          isEdit,
          value: isEdit ? item.value : state.lastEditValue, // 取消编辑时，将input的值重置为原来的值
        }
      } else {
        return item;
      }
    })
    setState({
      ...state,
      list,
      lastEditValue: isEdit ? state.list[index].value : "",
    });
  }
  
  function handleSaveValue(index, value) {
    const list = state.list.map((item, i) => {
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
    setState({
      ...state,
      list,
      lastEditValue: "",
    });
  }
  
  function handleEditChange(e) {
    const list = state.list.map((item, i) => {
      if (item.isEdit) {
        return {
          ...item,
          value: e.target.value,
        }
      } else {
        return item;
      }
    })
    setState({
      ...state,
      list,
    });
  }
  
  function handleChangeDone(index, e) {
    const list = state.list.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          isDone: e.target.checked,
        }
      } else {
        return item;
      }
    })
    setState({
      ...state,
      list,
    });
  }

  return (
    <div className="todo-list">
      <div className="form-input">
        <input
          value={state.inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleBtnClick}>提交</button>
      </div>
      <ul className="list-ul">
        {state.list.map((item, index) => {
          return (
            <TodoItem
              key={index}
              item={item}
              index={index}
              handleItemDelete={handleItemDelete}
              handleChangeEditStatus={handleChangeEditStatus}
              handleChangeDone={handleChangeDone}
              handleEditChange={handleEditChange}
              handleSaveValue={handleSaveValue}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
