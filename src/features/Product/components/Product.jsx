import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "constants/index";
import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";
import { formatPrice } from "utils";

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

    "&:hover img": {
      transform: "scale(0.8)",
      transition: "all 0.5s",
    },
  },
  freeShip: {
    position: "absolute",
    top: "4px",
    right: "4px",

    color: "#3F51B5",
    padding: "3px",
    fontSize: "13px",
  },

  img: {
    borderRadius: " 0.5rem",
  },

  content: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
  },

  // cart: {
  //   position: "absolute",
  //   top: "10px",
  //   right: "1px",
  // },
}));

function Product({ product }) {
  const classes = useStyles();

  const history = useHistory();

  const handleClick = () => {
    // navigate to detail page: /products/:productId
    history.push(`/products/${product.id}`);
  };

  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;

  return (
    <Box className={classes.root} padding={2} onClick={handleClick}>
      <Box mb={2}>
        {product.isFreeShip && (
          <Typography className={classes.freeShip} variant="body2">
            FreeShip
          </Typography>
        )}
      </Box>
      <Box className={classes.boxImg} paddingLeft={1} minHeight="212px">
        <img
          className={classes.img}
          src={thumbnailUrl}
          alt={product.name}
          width="100%"
        />
      </Box>

      <Box paddingLeft={1} className={classes.content}>
        <Box>
          <Typography variant="body2">{product.name}</Typography>
          <Typography variant="body2">
            <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
              {formatPrice(product.salePrice)}
            </Box>
            {product.promotionPercent > 0
              ? `-${product.promotionPercent}%`
              : ""}
          </Typography>
        </Box>
        {/* <Box className={classes.cart}>
          <ShoppingCartIcon />
        </Box> */}
      </Box>
    </Box>
  );
}

export default Product;
