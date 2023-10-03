import React from "react";
import { createTodo } from "../features/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const AddTodo = () => {
  const todoList = useSelector((state) => state.toDo.todoList);
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    content: " ",
    contentError: null,
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const { content, contentError } = state;
  const add = () => {
    if (content == " ") {
      setState({
        ...state,
        contentError: "Please enter a todo",
      });
    } else {
      dispatch(createTodo(content));
      setState({
        ...state,
        content: " ",
        contentError: null,
      });
    }
  };
  console.log(todoList);
  return (
    <div className="text-center w50 mx-auto">
      <h4 className="mt-4">Task Management App</h4>
      <label className="mt-2">Add Value</label>
      <input
        type="text"
        name="content"
        value={content}
        className="form-control"
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-primary mt-4" onClick={add}>
        Add
      </button>
      {contentError && <p className="text-danger mt-3">{contentError}</p>}
      {todoList.map((todo) => (
        <div key={todo.id}>
          <div>{todo.content}</div>
        </div>
      ))}
    </div>
  );
};

export default AddTodo;
