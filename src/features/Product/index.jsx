import Box from "@material-ui/core/Box";
import ListPage from "features/Product/pages/ListPage/index";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();
  return (
    <Box pt={4}>
      <Switch>
        <Route path={match.path} component={ListPage} exact />
      </Switch>
    </Box>
  );
}

export default ProductFeature;
