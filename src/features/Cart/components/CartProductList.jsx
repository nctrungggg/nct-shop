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
  },

  title: {
    fontWeight: "500",
  },

  listProduct: {
    padding: 0,
    margin: 0,
    listStyle: "none",
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
      <Typography variant="h6" className={classes.title}>
        Giỏ hàng ({`${count || "chưa có"} sản phẩm`})
      </Typography>

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
