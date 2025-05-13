import { createSlice, nanoid } from "@reduxjs/toolkit";

// 🧠Important Concepts (Simplified)
// Concept               🧠Explanation
// state           ✅Yeh current state ko represent karta hai.
// action          ✅Yeh object hota hai jisme type & payload hota hai.
// dispatch()      ✅Isse Redux ko batate hain ki koi action perform karo.
// useSelector()   ✅State ko access karne ke liye use hota hai.
// useDispatch()   ✅Actions ko trigger karne ke liye use hota hai.
const initialState = {
  todos: [{ id: 1, text: "todo" }],
};

export const TodoSlice = createSlice({
  //✅ slice name
  name: "todo",
  //✅ Yeh default state hoti hai
  initialState,
  //---------------- initialState: { todos: [{ id: 1, text: "todo" }] },
  //reducers: ✅ Yeh wo functions hote hain jo state ko update karte hain
  // ✅nanoid(): unique ID generate karta hai

  reducers: {
    addtodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload.text };
      state.todos.push(todo);
    },
    detetodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addtodo, detetodo } = TodoSlice.actions;
//todoSlice.actions = {
//   addTodo: function,
//   deleteTodo: function
// }

export default TodoSlice.reducer;
