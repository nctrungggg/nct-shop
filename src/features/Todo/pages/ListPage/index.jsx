import { Button } from "@material-ui/core";
import queryString from "query-string";
import React, { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router";
import { useSnackbar } from "../../../../../node_modules/notistack/dist/index";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList/index";

ListPage.propTypes = {};

function ListPage() {
  const initTodoList = [
    {
      id: 1,
      title: "JavaScript",
      status: "new",
    },
    {
      id: 2,
      title: "PHP",
      status: "completed",
    },
    {
      id: 3,
      title: "Ruby",
      status: "new",
    },
    {
      id: 4,
      title: "C#",
      status: "completed",
    },
  ];

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState(() => {
    const params = queryString.parse(location.search);

    return params.status || "all";
  });

  useEffect(() => {
    const params = queryString.parse(location.search);

    setFilterStatus(params.status || "all");
  }, [location.search]);

  const handleTodoList = (todo, idx) => {
    // Clone current array sang new array
    const newTodoList = [...todoList];

    // Toggle state
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };

    // Update todo list
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    const queryParams = { status: "all" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handleShowCompletedClick = () => {
    const queryParams = { status: "completed" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handleShowNewClick = () => {
    const queryParams = { status: "new" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const renderFilterTodoList = useMemo(() => {
    return todoList.filter(
      (todo) => filterStatus === "all" || filterStatus === todo.status
    );
  }, [todoList, filterStatus]);

  const handleTodoFormSubmit = (values) => {
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: "new",
    };
    const newTodoList = [...todoList, newTodo];

    setTodoList(newTodoList);
  };

  // show noti
  const { enqueueSnackbar } = useSnackbar();

  const handleClickShowNoTi = () => {
    enqueueSnackbar("Hello World!", { variant: "success" });
  };

  return (
    <div>
      <div>
        <Button
          onClick={handleClickShowNoTi}
          variant="contained"
          color="primary"
        >
          Show snackbar
        </Button>
      </div>

      <h1>Todo List</h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />

      <TodoList todoList={renderFilterTodoList} onTodoClick={handleTodoList} />

      <div>
        <Button onClick={handleShowAllClick} variant="outlined">
          Show All
        </Button>
        <Button onClick={handleShowCompletedClick} variant="outlined">
          Show Completed
        </Button>
        <Button onClick={handleShowNewClick} variant="outlined">
          Show New
        </Button>
      </div>
    </div>
  );
}

export default ListPage;
