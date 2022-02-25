import Header from "components/Header";
import Home from "components/Home";
import ProductFeature from "features/Product/index";
import React from "react";
import { Redirect, Route, Switch } from "react-router";
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

        <Route path="/" exact component={Home} />
        <Route path="/todo" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/counter" component={CounterFeature} />
        <Route path="/course" component={ListCourseFeature} />
        <Route path="/products" component={ProductFeature} />

        <Route component={NotPound} />
      </Switch>
    </div>
  );
}

export default App;
