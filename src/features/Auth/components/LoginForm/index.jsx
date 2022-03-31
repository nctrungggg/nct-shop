import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  LinearProgress,
  makeStyles,
  Typography
} from "@material-ui/core";
import InputField from "components/FormControl/InputField";
import PasswordField from "components/FormControl/PasswordField";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      position: "relative",
    },

    avatar: {
      margin: "0 auto",
      backgroundColor: theme.palette.secondary.main,
    },

    title: {
      fontSize: "28px",
      marginBottom: theme.spacing(2),

      fontFamily: "Poppins, sans-serif",
      textAlign: "center",
    },

    submit: {
      margin: theme.spacing(4, 0, 2, 0),
      fontSize: "16px",
      textTransform: "none",
      fontFamily: "Poppins, sans-serif",
    },

    progress: {
      position: "absolute",
      top: theme.spacing(1),
      left: 0,
      right: 0,
    },
  }));

  const classes = useStyles();

  const { onSubmit } = props;

  const schema = yup.object().shape({
    identifier: yup
      .string()
      .required("Vui lòng nhập email")
      .email("Email không hợp lệ"),

    password: yup
      .string()
      .required("Vui lòng nhập mật khẩu")
      .min(6, "Mật khẩu tối thiểu 6 ký tự"),
  });

  const form = useForm({
    defaultValues: {
      identifier: "",
      password: "",
    },

    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    if (!onSubmit) return;
    await onSubmit(values);
  };

  const { isSubmitting } = form.formState;
  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}

      <Typography className={classes.title} component="h3" variant="h5">
        Đăng nhập
      </Typography>
      <form className={classes.form} onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="identifier" label="Email" form={form} />
        <PasswordField name="password" label="Mật khẩu" form={form} />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          size="large"
          disabled={isSubmitting}
        >
          Đăng nhập
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
