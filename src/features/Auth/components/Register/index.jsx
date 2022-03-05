import { unwrapResult } from "@reduxjs/toolkit";
import { register } from "features/Auth/userSlice";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSnackbar } from "../../../../../node_modules/notistack/dist/index";
import RegisterForm from "../RegisterForm";

Register.propTypes = {
  closeDialog: PropTypes.func,
};
Register.defaultProps = {
  closeDialog: null,
};

function Register({ closeDialog }) {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      values.username = values.email;

      const action = register(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      // close dialog
      if (!closeDialog) return;
      closeDialog();

      // show success message
      enqueueSnackbar("Đăng ký thành công", {
        variant: "success",
        autoHideDuration: 1000,
      });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
