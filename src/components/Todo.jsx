import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
  const state = useSelector((initialState) => initialState);

  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch({ type: "deleteTodo", payload: index });
  };

  const handleCheck = (index) => {
    dispatch({ type: "checkTodo", payload: index });
    console.log(state);
  };

  return (
    <div>
      {state.todos.map((el, index) => {
        return (
          <div key={index} className="todos">
            <input
              onChange={() => handleCheck(index)}
              className="input"
              type="checkBox"
            />
            <div className={el.completed ? "completed" : "not-completed"}>
              {el.text}
            </div>
            <button
              onClick={() => handleDelete(index)}
              className="deleteButton"
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
