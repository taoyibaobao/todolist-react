// 函数式组件 + reducer
import "../TodoList/style.css";
import TodoItem from "./TodoItem";
import { useReducer } from "react";
import todoReducer from "./todoReducer";

const initialState = {
  list: [],
  inputValue: "",
  lastEditValue: "",
};

function TodoList() {
  // const [state, setState] = useState(initialState);
  const [state, dispatch] = useReducer(todoReducer, initialState);

  function handleInputChange(e) {
    dispatch({
      type: "changeInputAdd",
      payload: e.target.value,
    });
  }
  
  function handleBtnClick() {
    if (state.inputValue === "") {
      alert("请输入内容");
      return;
    }
    dispatch({
      type: "addTodoItem",
    });
  }
  
  function handleItemDelete(index) {
    dispatch({
      type: "deleteTodoItem",
      payload: index,
    });
  }
  
  function handleChangeEditStatus(index, isEdit) {
    dispatch({
      type: "changeEditStatus",
      payload: {
        index,
        isEdit,
      },
    });
  }
  
  function handleSaveValue(index, value) {
    dispatch({
      type: "saveItemValue",
      payload: {
        index,
        value,
      },
    });
  }
  
  function handleEditChange(e) {
    dispatch({
      type: "changeItemInputChange",
      payload: e.target.value,
    });
  }
  
  function handleChangeDone(index, e) {
    dispatch({
      type: "changeItemDone",
      payload: {
        index,
        isDone: e.target.checked,
      },
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
