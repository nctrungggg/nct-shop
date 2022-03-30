import React from "react";
import PropTypes from "prop-types";
import HomeBanners from "./components/HomeBanners";
import PolicyCard from "./components/PolicyCard";
import { makeStyles } from "@material-ui/core";
import SellingProducts from "./components/SellingProducts";

HomeFeature.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "160px",
  },
}));

function HomeFeature(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HomeBanners />
      <PolicyCard />
      <SellingProducts />
    </div>
  );
}

export default HomeFeature;
