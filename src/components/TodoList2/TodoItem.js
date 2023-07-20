function TodoItem({
  item,
  index,
  handleItemDelete,
  handleChangeEditStatus,
  handleChangeDone,
  handleEditChange,
  handleSaveValue,
}) {
  return (
    <li key={index}>
      {item.isEdit ? (
        <>
          <input value={item.value} onChange={handleEditChange} />
          <div>
            <button onClick={() => handleSaveValue(index, item.value)}>
              保存
            </button>
            <button onClick={() => handleChangeEditStatus(index, false)}>
              取消
            </button>
          </div>
        </>
      ) : (
        <>
          <label className={item.isDone ? "done" : ""}>
            <input
              type="checkbox"
              onChange={(ev) => handleChangeDone(index, ev)}
              checked={item.isDone}
              style={{ marginRight: "5px" }}
            />
            <span>{item.value}</span>
          </label>
          <div>
            <button onClick={() => handleChangeEditStatus(index, true)}>
              编辑
            </button>
            <button onClick={() => handleItemDelete(index)}>删除</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
