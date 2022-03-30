import { yupResolver } from "@hookform/resolvers/yup";
import {
  Avatar,
  Button,
  LinearProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import InputField from "components/FormControl/InputField";
import PasswordField from "components/FormControl/PasswordField";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
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
      fontSize: "16px",
      textTransform: "none",
      fontFamily: "Poppins, sans-serif",
      margin: theme.spacing(4, 0, 2, 0),
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
    fullName: yup
      .string()
      .required("Vui lòng nhập tên đầy đủ")
      .test(
        "Vui lòng nhập ít nhất 2 từ",
        "Vui lòng nhập ít nhất 2 từ",
        (value) => {
          return value.split(" ").length >= 2;
        }
      ),
    email: yup
      .string()
      .required("Vui lòng nhập email")
      .email("Email không hợp lệ"),

    password: yup
      .string()
      .required("Vui lòng nhập mật khẩu")
      .min(6, "Mật khẩu tối thiểu 6 ký tự"),
    retypePassword: yup
      .string()
      .required("Vui lòng nhập lại mật khẩu")
      .oneOf([yup.ref("password")], "Mật khẩu không hợp lệ"),
  });

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
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
        Đăng ký tài khoản
      </Typography>
      <form className={classes.form} onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Tên đầy đủ" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Mật khẩu" form={form} />
        <PasswordField
          name="retypePassword"
          label="Nhập lại mật khẩu"
          form={form}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          size="large"
          disabled={isSubmitting}
        >
          Đăng ký
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
