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
      fontWeight: "bold",
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
      <Typography className={classes.customer}>
        Khách hàng: <span>{customer.fullName.toUpperCase()}</span>
      </Typography>

      <Typography className={classes.customer}>
        Email: <span>{customer.email}</span>
      </Typography>

      <Box className={classes.sale}>
        <IconButton color="primary">
          <ConfirmationNumberOutlinedIcon />
        </IconButton>
        <Typography>Chọn hoặc nhập mã khuyến mãi </Typography>
      </Box>

      <Box className={classes.price}>
        <Typography className={classes.titlePrice}>
          Tạm tính: {formatPrice(total)}{" "}
        </Typography>

        <Typography className={classes.titlePrice}>Giảm giá: 0 ₫ </Typography>

        <Typography className={classes.totalPrice}>
          Tổng cộng: <span>{formatPrice(total)}</span>
        </Typography>
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
