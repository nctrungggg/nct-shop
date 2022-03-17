import Box from "@material-ui/core/Box";
import ListPage from "features/Product/pages/ListPage/index";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import DetailPage from "./pages/DetailPage/index";

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();
  return (
    <Box >
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.url}/:productId`} component={DetailPage} />
      </Switch>
    </Box>
  );
}

export default ProductFeature;
