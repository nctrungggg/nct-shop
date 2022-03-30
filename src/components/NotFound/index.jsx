import { Box, makeStyles, Typography } from "@material-ui/core";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import React from "react";

NotFound.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(24),

    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: "20px",
    marginTop: theme.spacing(2),
  },

  errorIcon: {
    fontSize: "80px",
  },
}));

function NotFound(props) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <ErrorOutlineIcon className={classes.errorIcon} />
      <Typography className={classes.title}>
        Rất tiếc, không tìm thấy kết quả phù hợp với lựa chọn của bạn
      </Typography>
    </Box>
  );
}

export default NotFound;
