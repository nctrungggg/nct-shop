import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./style.scss";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};
TodoList.defaultProps = {
  TodoList: [],
  onTodoClick: null,
};

function TodoList({ onTodoClick, todoList }) {
  const handleTodoList = (todo, idx) => {
    if (!onTodoClick) return;

    onTodoClick(todo, idx);
  };

  return (
    <ul className="todo-list">
      {todoList.map((todo, idx) => (
        <li
          key={todo.id}
          className={classnames({
            "todo-item": true,
            completed: todo.status === "completed",
          })}
          onClick={() => handleTodoList(todo, idx)}
        >
          {todo.title}
        </li>
      ))}
     
    </ul>
  );
}

export default TodoList;
