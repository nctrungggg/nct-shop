import { Box, makeStyles, Typography } from "@material-ui/core";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import React from "react";

NotFound.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(15),
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
    fontSize: "50px",
  },
}));

function NotFound(props) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <ErrorOutlineIcon className={classes.errorIcon} />
      <Typography className={classes.title}>PAGE NOT FOUND</Typography>
    </Box>
  );
}

export default NotFound;
