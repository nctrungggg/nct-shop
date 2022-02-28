import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReplayIcon from "@material-ui/icons/Replay";
FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};
FilterByPrice.defaultProps = {
  onChange: null,
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    padding: theme.spacing(2),
    borderTop: `2px solid ${theme.palette.grey[300]}`,
  },

  range: {
    display: "flex",
    flexGrow: "row nowrap",
    alignItems: "center",

    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),

    "& > span": {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },

  replayIcon: {
    position: "absolute",
    top: "16px",
    right: "10px",

    color: theme.palette.grey[800],
    fontSize: "20px",

    "&:hover": {
      cursor: "pointer",
    },
  },
}));

function FilterByPrice({ onChange }) {
  const classes = useStyles();

  const [values, setValues] = useState({
    salePrice_gte: "",
    salePrice_lte: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (onChange) onChange(values);
  };

  const handleResetVlues = () => {
    setValues({
      salePrice_gte: "",
      salePrice_lte: "",
    });
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">CHỌN KHOẢNG GIÁ</Typography>
      <ReplayIcon
        className={classes.replayIcon}
        onClick={handleResetVlues}
      ></ReplayIcon>

      <Box className={classes.range}>
        <TextField
          placeholder="0"
          size="small"
          name="salePrice_gte"
          value={values.salePrice_gte}
          onChange={handleInputChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">₫</InputAdornment>,
          }}
        />
        <span>-</span>
        <TextField
          placeholder="0"
          size="small"
          name="salePrice_lte"
          value={values.salePrice_lte}
          onChange={handleInputChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">₫</InputAdornment>,
          }}
        />
      </Box>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        onClick={handleSubmit}
      >
        Áp dụng
      </Button>
    </Box>
  );
}

export default FilterByPrice;
