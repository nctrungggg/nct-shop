import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ReplayIcon from "@material-ui/icons/Replay";
import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import NumberFormat from "react-number-format";
import ProductSortByPrice from "./ProductSortByPrice";
import "./styleFilter.scss";

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
  filters: PropTypes.object.isRequired,
};
FilterByPrice.defaultProps = {
  onChange: null,
};

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// format values khi người dùng nhập: 1000 => 1,000
function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
    />
  );
}

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

  checkbox: {
    display: "none",

    "&:checked + replayIcon": {
      transform: "rotate(180deg)",
    },
  },
}));

function FilterByPrice({ filters, onChange }) {
  const classes = useStyles();
  const replayIconRef = useRef(null);

  const [hide, setHide] = useState(true);

  const [values, setValues] = useState({
    salePrice_gte: "",
    salePrice_lte: "",
  });

  const handleInputChange = (e) => {
    setHide(false);

    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (onChange) onChange(values);
  };

  const handleResetValues = () => {
    replayIconRef.current.classList.add("click");

    setTimeout(() => {
      replayIconRef.current.classList.remove("click");
    }, 600);

    setValues({
      salePrice_gte: "",
      salePrice_lte: "",
    });

    delete filters.salePrice_gte;
    delete filters.salePrice_lte;

    if (onChange) onChange(filters);
  };

  const handleOnkeypress = (e) => {
    if (e.charCode == "45" || e.charCode == "101") {
      e.preventDefault();
    }
  };

  const handleSortChange = (isChecked, newSortValue) => {
    if (!onChange) return;

    if (isChecked === true) onChange(delete filters._sort);
    else onChange({ _sort: newSortValue });
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">GIÁ</Typography>

      <ProductSortByPrice onChange={handleSortChange} />

      <Typography variant="subtitle2">CHỌN KHOẢNG GIÁ</Typography>

      {hide || (
        <Box className="replayIcon">
          <ReplayIcon
            ref={replayIconRef}
            onClick={handleResetValues}
          ></ReplayIcon>
        </Box>
      )}

      <Box className={classes.range}>
        <TextField
          name="salePrice_gte"
          size="small"
          placeholder="0"
          value={values.salePrice_gte}
          onChange={handleInputChange}
          onKeyPress={handleOnkeypress}
          InputProps={{
            inputComponent: NumberFormatCustom,
            min: 0,
            endAdornment: <InputAdornment position="end">₫</InputAdornment>,
          }}
        />
        <span>-</span>
        <TextField
          size="small"
          name="salePrice_lte"
          placeholder="10.000"
          value={values.salePrice_lte}
          onChange={handleInputChange}
          onKeyPress={handleOnkeypress}
          InputProps={{
            inputComponent: NumberFormatCustom,
            min: 0,
            endAdornment: <InputAdornment position="end">₫</InputAdornment>,
          }}
        />
      </Box>
      <Button
        disabled={hide}
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
