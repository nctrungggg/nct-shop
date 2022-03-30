import { yupResolver } from "@hookform/resolvers/yup";
import {
  Avatar,
  Button,
  LinearProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import InputField from "components/FormControl/InputField";
import PasswordField from "components/FormControl/PasswordField";

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      position: "relative",
      paddingTop: theme.spacing(2),
    },

    avatar: {
      margin: "0 auto",
      backgroundColor: theme.palette.secondary.main,
    },

    title: {
      margin: theme.spacing(2, 0, 2, 0),
      textAlign: "center",
    },

    submit: {
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
    identifier: yup
      .string()
      .required("Please enter your email")
      .email("Please enter a valid email address"),

    password: yup.string().required("Please enter your password"),
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

      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography className={classes.title} component="h3" variant="h5">
        Đăng nhập
      </Typography>
      <form className={classes.form} onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="identifier" label="Email" form={form} /> 
        <PasswordField name="password" label="Password" form={form} />

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
