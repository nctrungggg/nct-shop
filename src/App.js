import Footer from "components/Footer";
import Header from "components/Header";
import HomeFeature from "features/Home";
import ProductFeature from "features/Product/index";
import React, { useEffect, useRef, useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import "./App.scss";
import NotPound from "./components/NotFound";
import CartFeature from "./features/Cart/index";
import "./App.scss";
import ContactFeature from "features/Contact";
import ScrollButton from "components/ScrollButton";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { css } from "styled-components";

const override = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <div className="App">
        {loading ? (
          <ClimbingBoxLoader
            css={override}
            color={"#153EA5"}
            loading={loading}
            size={20}
          />
        ) : (
          <>
            <Header />

            <Switch>
              <Redirect from=" " to=" " />

              <Route path="/" component={HomeFeature} exact />
              <Route path="/products" component={ProductFeature} />
              <Route path="/cart" component={CartFeature} />
              {/* <Route path="/contact" component={ContactFeature} /> */}

              <Route component={NotPound} />
            </Switch>
            <ScrollButton />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default App;
