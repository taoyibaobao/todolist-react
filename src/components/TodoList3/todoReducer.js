export default function todoReducer(state, action) {
  switch (action.type) {
    case "changeInputAdd": {
      return {
        ...state,
        inputValue: action.payload,
      };
    }
    case "addTodoItem": {
      return {
        ...state,
        list: [
          ...state.list,
          {
            value: state.inputValue,
            isEdit: false,
            isDone: false,
          },
        ],
        inputValue: '',
      }
    }
    case "deleteTodoItem": {
      return {
        ...state,
        list: state.list.filter((_item, i) => i !== action.payload),
      }
    }
    case "changeEditStatus": {
      return {
        ...state,
        list: state.list.map((item, i) => {
          if (i === action.payload.index) {
            return {
              ...item,
              isEdit: action.payload.isEdit,
              value: action.payload.isEdit ? item.value : state.lastEditValue,
            }
          } else {
            return item;
          }
        }),
        lastEditValue: action.payload.isEdit ? state.list[action.payload.index].value : '',
      }
    }
    case "saveItemValue": {
      return {
        ...state,
        list: state.list.map((item, i) => {
          if (i === action.payload.index) {
            return {
              ...item,
              value: action.payload.value,
              isEdit: false,
            }
          } else {
            return item;
          }
        }),
        lastEditValue: '',
      }
    }
    case "changeItemInputChange": {
      return {
        ...state,
        list: state.list.map((item, i) => {
          if (item.isEdit) {
            return {
              ...item,
              value: action.payload,
            }
          } else {
            return item;
          }
        })
      }
    }
    case "changeItemDone": {
      return {
        ...state,
        list: state.list.map((item, i) => {
          if (i === action.payload.index) {
            return {
              ...item,
              isDone: action.payload.isDone,
            }
          } else {
            return item;
          }
        })
      }
    }
    default: {
      return state;
    }
  }
}