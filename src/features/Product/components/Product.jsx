import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "../../../constants/index";
import { makeStyles } from "@material-ui/core/styles";

Product.propTypes = {
  product: PropTypes.object,
};

Product.defaultProps = {
  product: [],
};

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: "pointer",
    position: "relative",

    "&:hover": {
      boxShadow: " rgb(0 0 0 / 10%) 0px 0px 20px",
      zIndex: 1,
    },
  },

  freeShip: {
    position: "absolute",
    top: 0,
    right: 0,

    backgroundColor: "#3F51B5",
    color: "#fff",
    padding: "3px",
    fontSize: "12px",
  },
}));

function Product({ product }) {
  console.log("product: ", product);
  const classes = useStyles();

  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;

  return (
    <Box className={classes.root} mt={2} mb={1} padding={2}>
      <Box mb={2}>
        {product.isFreeShip && (
          <Typography className={classes.freeShip} variant="body2">
            FreeShip
          </Typography>
        )}
      </Box>
      <Box paddingL={1} minHeight="212px">
        <img src={thumbnailUrl} alt={product.name} width="100%" />
      </Box>

      <Box paddingLeft={1}>
        <Typography variant="body2">{product.name}</Typography>
        <Typography variant="body2">
          <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(product.salePrice)}
          </Box>
          {product.promotionPercent > 0 ? `-${product.promotionPercent}%` : ""}
        </Typography>
      </Box>
    </Box>
  );
}

export default Product;
