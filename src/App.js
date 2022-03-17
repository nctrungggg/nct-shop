import Footer from "components/Footer";
import Header from "components/Header";
import HomeFeature from "features/Home";
import ProductFeature from "features/Product/index";
import React from "react";
import { Redirect, Route, Switch } from "react-router";
import "./App.scss";
import NotPound from "./components/NotFound";
import CartFeature from "./features/Cart/index";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Redirect from=" " to=" " />

        <Route path="/" component={HomeFeature} exact />
        <Route path="/products" component={ProductFeature} />
        <Route path="/cart" component={CartFeature} />

        <Route component={NotPound} />
      </Switch>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
