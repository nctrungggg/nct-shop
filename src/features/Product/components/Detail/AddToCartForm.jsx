import { yupResolver } from "@hookform/resolvers/yup";
import { Button, makeStyles } from "@material-ui/core";
import QuantityField from "components/FormControl/QuantityField";
import { showFormLogin } from "features/Auth/userSlice";
import { useSnackbar } from "notistack/dist/index";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  btn: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "16px",
    fontWeight: "500",
    textTransform: "none",
  },
  quantity: {
    fontFamily: "Poppins, sans-serif",
  },
}));

function AddToCartForm({ onSubmit = null }) {
  const classes = useStyles();

  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;

  const schema = yup.object().shape({
    quantity: yup
      .number()
      .required("Vui lòng nhập số lượng")
      .min(1, "Số lượng tối thiểu là 1")
      .typeError("Vui lòng nhập một số"),
  });

  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    if (isLoggedIn) {
      enqueueSnackbar("Đã thêm sản phẩm vào giỏ hàng", {
        variant: "success",
        autoHideDuration: 1000,
      });

      if (onSubmit) await onSubmit(values);
    }

    if (!isLoggedIn) {
      enqueueSnackbar("Bạn chưa đăng nhập", {
        variant: "info",
        autoHideDuration: 2000,
      });
      history.push({
        pathname: "/login",
      });
    }
  };

  return (
    <>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <QuantityField
          className={classes.quantity}
          form={form}
          name="quantity"
          label="Số lượng"
        />
        <Button
          className={classes.btn}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          style={{ width: "200px" }}
        >
          Chọn mua
        </Button>
      </form>
    </>
  );
}

export default AddToCartForm;
