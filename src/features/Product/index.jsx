import Box from "@material-ui/core/Box";
import ListPage from "features/Product/pages/ListPage/index";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import DetailPage from "./pages/DetailPage/index";
import { makeStyles } from "@material-ui/core";
ProductFeature.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "100px",
  },
}));
function ProductFeature(props) {
  const classes = useStyles();
  const match = useRouteMatch();
  return (
    <Box className={classes.root}>
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.url}/:productId`} component={DetailPage} />
      </Switch>
    </Box>
  );
}

export default ProductFeature;
