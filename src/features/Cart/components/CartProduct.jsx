import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import QuantityField from "components/form-controls/QuantityField";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "../../../constants/index";
import { formatPrice } from "../../../utils";
import { removeFromCart, setQuantity } from "../cartSlice";

CartProduct.propTypes = {
  cart: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    borderBottom: `1px solid ${theme.palette.grey[300]}`,

  },
  img: {
    width: "150px",
    objectFit: "contain",
    marginRight: theme.spacing(2),

    cursor: "pointer",
  },

  name: {
    marginRight: theme.spacing(2),

    width: "160px",
    textAlign: "justify",

    "& > p ": { fontSize: "16px" },
  },

  price: {
    fontWeight: 500,
    marginRight: theme.spacing(2),
  },

  quantity: {
    marginRight: theme.spacing(3),
  },

  totalPrice: {
    "& > span": {
      fontWeight: "600",
      fontSize: "18px",
    },
  },

  iconDelete: {
    flex: 1,
    textAlign: "right",

    "& > button:hover": {
      color: "#3f51b5",
    },
  },
}));

function CartProduct({ cart = {} }) {
  const classes = useStyles();

  const history = useHistory();

  const totalPrice = cart.quantity * cart.product.salePrice || 0;
  const name = cart.product.name;

  const thumbnailUrl = cart.product.thumbnail?.url
    ? `${STATIC_HOST}${cart.product.thumbnail.url}`
    : THUMBNAIL_PLACEHOLDER;

  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .required("Please enter quantity")
      .min(1, "Please enter at least 1")
      .typeError("Please enter an number"),
  });

  const form = useForm({
    defaultValues: {
      quantity: cart.quantity,
    },
    resolver: yupResolver(schema),
  });

  const handleUpdateQuantity = ({ quantity }) => {
    const action = setQuantity({
      id: cart.id,
      quantity,
    });
    dispatch(action);
  };

  const handleDeleteCartProduct = (id) => {
    const action = removeFromCart(id);
    dispatch(action);
  };

  const handleClickToDetailProduct = () => {
    history.push(`/products/${cart.id}`);
  };

  return (
    <>
      <Box className={classes.root} minHeight="215px">
        <Box onClick={handleClickToDetailProduct}>
          <img src={thumbnailUrl} alt={name} className={classes.img} />
        </Box>

        <Box className={classes.name}>
          <p>{cart.product.name} </p>
        </Box>

        <p className={classes.price}>
          {formatPrice(cart.product.salePrice)}
        </p>

        <Box className={classes.quantity}>
          <QuantityField
            form={form}
            name="quantity"
            onChange={handleUpdateQuantity}
            item={cart}
          />
        </Box>
        <p className={classes.totalPrice}>
          Thành tiền: <span>{`${formatPrice(totalPrice)}`}</span>
        </p>

        <Box className={classes.iconDelete}>
          <IconButton onClick={() => setOpenDialog(true)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>

      {/* CONFIRM DIALOG */}
      <Dialog
        open={openDialog}
        onClose={() => false}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Xóa sản phẩm khỏi giỏ hàng
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn có chắc chắn muốn xóa sản phẩm đang chọn ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleDeleteCartProduct(cart.id)}
            variant="contained"
            color="primary"
            size="small"
            autoFocus
          >
            Xác nhận
          </Button>

          <Button onClick={() => setOpenDialog(false)} color="primary">
            Hủy bỏ
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default CartProduct;
