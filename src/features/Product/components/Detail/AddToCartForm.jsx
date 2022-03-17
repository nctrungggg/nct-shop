import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@material-ui/core";
import QuantityField from "components/form-controls/QuantityField";
import { showFormLogin } from "features/Auth/userSlice";
import { useSnackbar } from "notistack/dist/index";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";

AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

function AddToCartForm({ onSubmit = null }) {
  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();

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

      const action = showFormLogin();
      dispatch(action);
    }
  };

  return (
    <>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <QuantityField form={form} name="quantity" label="Số lượng" />
        <Button
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
