import { Box, FormHelperText, makeStyles, Typography } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { Add, Remove } from "@material-ui/icons";
import { setQuantity } from "features/Cart/cartSlice";
import PropTypes from "prop-types";
import React from "react";
import { Controller } from "react-hook-form";
import { useDispatch } from "react-redux";

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

const useStyles = makeStyles((theme) => ({
  root: {
    "&  p ": {
      fontFamily: "Poppins, sans-serif",
      fontSize: "16px",
    },
  },

  box: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",

    maxWidth: "160px",
    // marginTop: theme.spacing(1),
  },

  quantityInput: {
    "& > input": {
      height: "10px",

      textAlign: "center",
      fontFamily: "Poppins, sans-serif",
    },
  },
}));

function QuantityField(props) {
  const classes = useStyles();

  const { form, name, label, disabled, item, onChange } = props;
  const { errors, setValue, getValues } = form;
  const hasError = !!errors[name];

  const handleOnkeypress = (e) => {
    if (e.charCode == "45" || e.charCode == "101") {
      e.preventDefault();
    }
  };

  const handleDecrease = (value) => {
    if (item) {
      setValue(
        name,
        Number.parseInt(item.quantity) ? Number.parseInt(item.quantity) - 1 : 1
      );
    } else {
      setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1);
    }

    if (onChange) onChange(getValues());
  };

  const handleIncrease = (value) => {
    if (item) {
      setValue(
        name,
        Number.parseInt(item.quantity) ? Number.parseInt(item.quantity) + 1 : 1
      );
    } else {
      setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1);
    }

    if (onChange) onChange(getValues());
  };

  return (
    <FormControl
      error={hasError}
      margin="normal"
      fullWidth
      variant="outlined"
      size="small"
      className={classes.root}
    >
      <Typography>{label}</Typography>

      <Controller
        name={name}
        control={form.control}
        render={({ onChange, onBlur, value, name }) => (
          <Box className={classes.box}>
            <IconButton
              disabled={value <= 1}
              onClick={() => handleDecrease(value)}
            >
              <Remove />
            </IconButton>

            <OutlinedInput
              className={classes.quantityInput}
              id={name}
              type="number"
              disabled={disabled}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              onKeyPress={handleOnkeypress}
            />

            <IconButton onClick={() => handleIncrease(value)}>
              <Add />
            </IconButton>
          </Box>
        )}
      />

      <FormHelperText>{errors[name]?.message}</FormHelperText>
    </FormControl>
  );
}

export default QuantityField;
