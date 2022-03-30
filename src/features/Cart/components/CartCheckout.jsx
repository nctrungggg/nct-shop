import {
  Box,
  Button,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ConfirmationNumberOutlinedIcon from "@material-ui/icons/ConfirmationNumberOutlined";
import PropTypes from "prop-types";
import React from "react";
import { formatPrice } from "../../../utils/common";

CartCheckout.propTypes = {
  total: PropTypes.number,
};
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(3),
  },

  title: {
    marginBottom: theme.spacing(2),
  },
  address: {
    marginBottom: theme.spacing(5),
  },

  sale: {
    margin: theme.spacing(3, 0),
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",

    "& > button": {
      padding: 0,
      paddingRight: theme.spacing(2),
    },
  },
  price: {
    color: theme.palette.grey[500],
  },

  totalPrice: {
    margin: theme.spacing(3, 0),
    
    "& > span": {
      marginLeft: theme.spacing(2),
      color: "#3f51b5",

      fontSize: "32px",
      fontWeight: "600",
    },
  },

  customer: {
    marginBottom: theme.spacing(1),

    fontSize: "14px",

    "& > span": {
      fontWeight: "500",
      fontSize: "16px",
    },
  },

  titlePrice: {
    fontSize: "14px",
  },
}));

function CartCheckout({ total }) {
  const classes = useStyles();
  const customer = JSON.parse(localStorage.getItem("user"));
  return (
    <Box className={classes.root}>
      <p className={classes.customer}>
        Khách hàng: <span>{customer.fullName.toUpperCase()}</span>
      </p>

      <p className={classes.customer}>
        Email: <span>{customer.email}</span>
      </p>

      <Box className={classes.sale}>
        <IconButton color="primary">
          <ConfirmationNumberOutlinedIcon />
        </IconButton>
        <p>Chọn hoặc nhập mã khuyến mãi </p>
      </Box>

      <Box className={classes.price}>
        <p className={classes.titlePrice}>Tạm tính: {formatPrice(total)} </p>

        <p className={classes.titlePrice}>Giảm giá: 0 ₫ </p>

        <p className={classes.totalPrice}>
          Tổng cộng: <span>{formatPrice(total)}</span>
        </p>
      </Box>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        size="large"
      >
        Mua ngay
      </Button>
    </Box>
  );
}

export default CartCheckout;
