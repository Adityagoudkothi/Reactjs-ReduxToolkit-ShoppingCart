import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "toDo",
  initialState: {
    todoList: [
      {
        id: 1,
        content: "Hello World",
      },
      {
        id: 2,
        content: "Meet Our  World",
      },
    ],
  },
  reducers: {
    createTodo: (state, action) => {
      let newTodoList = {
        id: Math.random(),
        content: action.payload,
      };
      state.todoList.push(newTodoList);
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
});

export const { createTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
