import React from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";

ProductSort.propTypes = {
  onChange: PropTypes.func,
  currentSort: PropTypes.string.isRequired,
};

ProductSort.defaultProps = {
  onChange: null,
};
const useStyles = makeStyles((theme) => ({
  flexDirection: {
    "& > div > div": {
      flexDirection: "row-reverse",
    },
  },
}));
function ProductSort({ currentSort, onChange }) {
  const classes = useStyles();

  const handleSortChange = (e, newValue) => {
    if (onChange) onChange(newValue);
  };

  return (
    <Tabs
      className={classes.flexDirection}
      onChange={handleSortChange}
      value={currentSort}
      indicatorColor="primary"
      textColor="primary"
    >
      <Tab label="Giá thấp tới cao" value="salePrice:ASC" />
      <Tab label="Giá cao xuống thấp" value="salePrice:DESC" />
    </Tabs>
  );
}

export default ProductSort;
