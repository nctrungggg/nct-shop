import { Button } from "@material-ui/core";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import {
  Redirect,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import NotPound from "../../components/NotFound";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";

TodoFeature.propTypes = {};

function TodoFeature() {
  const match = useRouteMatch();
  const history = useHistory();

  return (
    <div>
      <Button onClick={history.goBack} color="primary" variant="outlined">
        Back
      </Button>

      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:todoId`} component={DetailPage} exact />
        <Route component={NotPound} />
      </Switch>
    </div>
  );
}

export default TodoFeature;
