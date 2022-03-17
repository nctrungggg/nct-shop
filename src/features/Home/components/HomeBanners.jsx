import React from "react";
import PropTypes from "prop-types";
import { Box, Button, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

HomeBanners.propTypes = {};

const useStyles = makeStyles((theme) => ({
  banner: {
    position: "relative",
  },
  btn: {
    position: "absolute",
    left: "120px",
    top: "200px",
  },
}));

function HomeBanners(props) {
  const classes = useStyles();
  const history = useHistory();

  const handleClickToProduct = () => {
    history.push("/products");
  };
  return (
    <Box>
      <Box className={classes.banner}>
        <img
          src="https://binhminhvn.net/wp-content/uploads/2021/04/213-2136825_mac-model-banner-apple-mac-pro-banners-hd.png"
          width="100%"
          alt=""
        />
        <Box className={classes.btn}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClickToProduct}
          >
            Mua ngay
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default HomeBanners;
