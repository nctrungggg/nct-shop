import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CartProduct from "./CartProduct";

CartProductList.propTypes = {
  count: PropTypes.number,
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 2),

    position: "relative",
  },

  title: {
    fontWeight: "500",
    fontSize: "24px",

    "& > span": {
      fontSize: "16px",
    },
  },

  listProduct: {
    padding: 0,
    margin: 0,
    listStyle: "none",
  },
  backProduct: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "14px",
    textTransform: "none",
  },
}));

function CartProductList({ count }) {
  const history = useHistory();

  const cartItemList = useSelector((state) => state.cart.cartItems);
  const classes = useStyles();

  const handleCLickToProduct = () => {
    history.push("/products");
  };

  return (
    <Box className={classes.root}>
      <p className={classes.title}>
        Giỏ hàng <span>({`${count || "chưa có"} sản phẩm`})</span>
      </p>

      {!count && (
        <Box pt={2}>
          <Button
            variant="outlined"
            className={classes.backProduct}
            color="primary"
            onClick={handleCLickToProduct}
          >
            Mua sản phẩm
          </Button>
        </Box>
      )}

      <ul className={classes.listProduct}>
        {cartItemList.map((cart) => (
          <li key={cart.id}>
            <CartProduct cart={cart} />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default CartProductList;
