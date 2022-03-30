import {
  Box,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import BlockIcon from "@material-ui/icons/Block";
import React from "react";
import { useSelector } from "react-redux";
import CartCheckout from "./components/CartCheckout";
import CartProductList from "./components/CartProductList";
import { cartItemsCountSelector, cartTotalSelector } from "./selectors";

CartFeature.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: { marginTop: "140px", marginBottom: "100px" },

  container: {
    position: "relative",
  },

  left: {
    flex: "1 1 0",
    borderRight: "1px solid #e0e0e0",
  },

  right: {
    position: "sticky",
    top: "0",
    width: "28%",
  },

  warning: {
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(24),

    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  titleWarning: {
    fontSize: "30PX",
    marginTop: theme.spacing(2),
  },

  errorIcon: {
    fontSize: "80px",
  },
}));

function CartFeature(props) {
  const classes = useStyles();

  const cartTotalPrice = useSelector(cartTotalSelector);
  const cartItemsCount = useSelector(cartItemsCountSelector);

  const currentUserId = useSelector((state) => state.user.current?.id);
  return (
    <>
      {currentUserId ? (
        <Box className={classes.root}>
          <div>
            <Grid container className={classes.container}>
              <Grid item className={classes.left}>
                <Paper elevation={0}>
                  <CartProductList count={cartItemsCount} />
                </Paper>
              </Grid>

              <Grid item className={classes.right}>
                <Paper elevation={0}>
                  <CartCheckout total={cartTotalPrice} />
                </Paper>
              </Grid>
            </Grid>
          </div>
        </Box>
      ) : (
        <Box className={classes.warning}>
          <BlockIcon className={classes.errorIcon} />
          <Typography className={classes.titleWarning}>
            Bạn cần đăng nhập để truy cập trang này
          </Typography>
        </Box>
      )}
    </>
  );
}

export default CartFeature;
