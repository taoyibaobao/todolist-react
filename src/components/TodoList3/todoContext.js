import { createContext, useContext } from "react";

export const TodoContext = createContext(null);

export const TodoDispatchContext = createContext(null);

// export function TodoContextProvider({ children }) {
//   const [state, dispatch] = useReducer(todoReducer, initialState);

//   return (
//     <TodoContext.Provider value={state}>
//       <TodoDispatchContext.Provider value={dispatch}>
//         {children}
//       </TodoDispatchContext.Provider>
//     </TodoContext.Provider>
//   )
// }

export const useTodoContext = () => {
  return useContext(TodoContext);
}

export const useDispatchContext = () => {
  return useContext(TodoDispatchContext);
}
