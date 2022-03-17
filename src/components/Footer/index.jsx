import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles, Typography } from "@material-ui/core";

Footer.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    width: " 100%",
    textAlign: "center",
    padding: theme.spacing(2),

    "&> p ": {
      color: theme.palette.primary.dark,
      fontSize: "16px",
      fontWeight: "500"
    },
  },
}));

function Footer(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography>Nguyễn Chí Trung</Typography>
    </Box>
  );
}

export default Footer;
