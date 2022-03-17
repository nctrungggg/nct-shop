import { Box, Paper, makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    margin: theme.spacing(3),
    height: "100vh",
  },
  box1: {
    width: "30%",
  },
  box2: {
    flex: 1,
  },
}));

function DetailProductSekeleton({ length }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={0}>
      <Box className={classes.box1} height="40%" padding={1}>
        <Skeleton variant="rect" width="100%" height={300} />
      </Box>
      <Box className={classes.box2} padding={1}>
        <Skeleton variant="rect" width="100%" height={200} />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
    </Paper>
  );
}

export default DetailProductSekeleton;
