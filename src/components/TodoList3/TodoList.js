// 函数式组件 + reducer + context
import "../TodoList/style.css";
import TodoItem from "./TodoItem";
import { TodoContext, TodoDispatchContext } from "./todoContext";
import todoReducer from "./todoReducer";
import { useReducer } from "react";

const initialState = {
  list: [],
  inputValue: "",
  lastEditValue: "",
};

function TodoList() {
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

  return (
    <TodoContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <div className="todo-list">
          <div className="form-input">
            <input value={state.inputValue} onChange={handleInputChange} />
            <button onClick={handleBtnClick}>提交</button>
          </div>
          <ul className="list-ul">
            {state.list.map((item, index) => {
              return <TodoItem key={index} item={item} index={index} />;
            })}
          </ul>
        </div>
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export default TodoList;
