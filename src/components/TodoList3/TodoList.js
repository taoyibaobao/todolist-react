// 函数式组件 + reducer + context
import "../TodoList/style.css";
import TodoItem from "./TodoItem";
import { TodoContext, TodoDispatchContext } from "./todoContext";
import todoReducer from "./todoReducer";
import { useEffect, useReducer } from "react";

const initialState = {
  list: [],
  inputValue: "",
  lastEditValue: "",
};

function TodoList({ init }) {
  // initialState中的list需要从远程获取，模拟一个fetch
  console.log('init', init);
  useEffect(() => {
    console.log("mock fetch 准备发送请求");
    let igore = false;
    setTimeout(() => {
      if (igore) return;
      console.log('mock fetch 请求成功');
      dispatch({
        type: "initList",
        payload: [
          {
            value: "学习React",
            isEdit: false,
            isDone: false,
          },
          { value: "学习Vue", isEdit: false, isDone: false },
          { value: "学习Angular", isEdit: false, isDone: false },
        ],
      });
    }, 1000);
    return () => {
      igore = true;
      console.log("mock fetch 取消发送请求");
    }
  }, [init]);

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
