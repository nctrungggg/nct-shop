import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Link, makeStyles, Paper, Tab, Tabs } from "@material-ui/core";
import { NavLink, useRouteMatch } from "react-router-dom";

ProductMenu.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",

    padding: 0,
    listStyle: "none",

    "& > li": {
      padding: theme.spacing(4, 10),
    },

    "& > li > a": {
      color: theme.palette.primary.main,
      fontWeight: "500",

      display: "block",
      textAlign: "center",
      textDecoration: "none",
      padding: "10px",
      width: "100px",
    },

    "& > li > a.active": {
      backgroundColor: theme.palette.primary.main,
      color: "#fff",
      borderRadius: "4px",
    },
  },
}));
function ProductMenu() {
  const classes = useStyles();
  const match = useRouteMatch();

  return (
    <Box component="ul" className={classes.root}>
      <li>
        <Link component={NavLink} to={match.url} exact>
          Mô tả
        </Link>
      </li>
      <li>
        <Link component={NavLink} to={`${match.url}/reviews`} exact>
          Nhận xét
        </Link>
      </li>
      <li>
        <Link component={NavLink} to={`${match.url}/additional`} exact>
          Thông tin
        </Link>
      </li>
    </Box>
  );
}

export default ProductMenu;
