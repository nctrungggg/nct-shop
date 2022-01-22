import { makeStyles } from "@material-ui/core";
import Header from "components/Header";
import Loading from "components/Loading";
import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";
import "./App.css";
import NotPound from "./components/NotFound";
import AlbumFeature from "./features/Album/index";
import CounterFeature from "./features/Counter";
import ListCourseFeature from "./features/ListCourse";
import TodoFeature from "./features/Todo/index";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Redirect from=" " to=" " />

        <Route path="/" exact component={Loading} />
        <Route path="/todo" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/counter" component={CounterFeature} />
        <Route path="/course" component={ListCourseFeature} />

        <Route component={NotPound} />
      </Switch>
    </div>
  );
}

export default App;
