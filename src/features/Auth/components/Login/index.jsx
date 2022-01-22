import { unwrapResult } from "@reduxjs/toolkit";
import { login } from "features/Auth/userSlice";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { useSnackbar } from "../../../../../node_modules/notistack/dist/index";
import LoginForm from "../LoginForm/index";

Login.propTypes = {
  closeDialog: PropTypes.func,
};
Login.defaultProps = {
  closeDialog: null,
};

function Login({ closeDialog }) {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      values.username = values.email;

      const action = login(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
      console.log("USER: ", unwrapResult(resultAction));

      // close dialog
      if (!closeDialog) return;
      closeDialog();

      // show success message
      enqueueSnackbar("Login   successfully", { variant: "success" });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;