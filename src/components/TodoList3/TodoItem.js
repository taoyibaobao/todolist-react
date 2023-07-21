import { useDispatchContext } from "./todoContext";

function TodoItem({
  item,
  index,
}) {
  const dispatch = useDispatchContext();

  return (
    <li key={index}>
      {item.isEdit ? (
        <>
          <input
            value={item.value}
            onChange={(e) =>
              dispatch({
                type: "changeItemInputChange",
                payload: e.target.value,
              })
            }
          />
          <div>
            <button
              onClick={() =>
                dispatch({
                  type: "saveItemValue",
                  payload: {
                    index,
                    value: item.value,
                  },
                })
              }
            >
              保存
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: "changeEditStatus",
                  payload: {
                    index,
                    isEdit: false,
                  },
                })
              }
            >
              取消
            </button>
          </div>
        </>
      ) : (
        <>
          <label className={item.isDone ? "done" : ""}>
            <input
              type="checkbox"
              onChange={(e) =>
                dispatch({
                  type: "changeItemDone",
                  payload: {
                    index,
                    isDone: e.target.checked,
                  },
                })
              }
              checked={item.isDone}
              style={{ marginRight: "5px" }}
            />
            <span>{item.value}</span>
          </label>
          <div>
            <button
              onClick={() =>
                dispatch({
                  type: "changeEditStatus",
                  payload: {
                    index,
                    isEdit: true,
                  },
                })
              }
            >
              编辑
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: "deleteTodoItem",
                  payload: index,
                })
              }
            >
              删除
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
