import { Box, Checkbox, FormControlLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";

ProductSortByPrice.propTypes = {
  onChange: PropTypes.func,
};

ProductSortByPrice.defaultProps = {
  onChange: null,
};

const useStyles = makeStyles((theme) => ({
  list: {
    padding: 0,
    margin: 0,
    listStyleType: "none",

    "& > li": {
      margin: 0,
      transition: "all .25s",
      position: "relative",
      right: 0,

      "  &:hover": {
        right: "-6px",
        color: theme.palette.primary.dark,
        cursor: "pointer",
      },
    },
  },
  label: {
    "& >span": {
      fontSize: "0.875rem",
    },
  },
}));

const valuations = [
  { id: 1, value: "salePrice:ASC", label: "Giá thấp tới cao" },
  { id: 2, value: "salePrice:DESC", label: "Giá cao xuống thấp" },
];

function ProductSortByPrice({ onChange }) {
  const classes = useStyles();

  const [checked, setChecked] = useState([]);

  const handleSortChange = (e, id, label) => {
    const isChecked = checked.includes(id);

    setChecked((prev) => {
      if (isChecked) {
        return checked.filter((item) => item !== id);
      } else {
        return [id];
      }
    });

    if (!onChange) return;

    const sortValue = e.target.name;
    onChange(isChecked, sortValue);
  };

  return (
    <Box mb={2}>
      <ul className={classes.list}>
        {valuations.map((valuation) => (
          <li key={valuation.id}>
            <FormControlLabel
              className={classes.label}
              control={
                <Checkbox
                  checked={checked.includes(valuation.id)}
                  onChange={(e) => handleSortChange(e, valuation.id)}
                  name={valuation.value}
                  color="primary"
                  size="small"
                />
              }
              label={valuation.label}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default ProductSortByPrice;
