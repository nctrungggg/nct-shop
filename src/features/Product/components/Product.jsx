import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "constants/index";
import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";
import { formatPrice } from "utils";
import "./Product.scss";

Product.propTypes = {
  product: PropTypes.object,
};

Product.defaultProps = {
  product: [],
};

const useStyles = makeStyles((theme) => ({
  root: {},

  freeShip: {
    position: "absolute",
    top: "4px",
    right: "4px",

    color: "#3F51B5",
    padding: "3px",
    fontSize: "12px",
    fontFamily: "Poppins, sans-serif",
  },
  name: {
    fontSize: "14px",
    fontFamily: "Poppins, sans-serif",
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
    <Box className="product" padding={2} onClick={handleClick}>
      <Box mb={2}>
        {product.isFreeShip && <p className={classes.freeShip}>Free ship</p>}
      </Box>
      <div className="product-thumbnail" paddingLeft={1}>
        <img src={thumbnailUrl} alt={product.name} width="100%" />
      </div>

      <Box paddingLeft={1} className={classes.content}>
        <Box>
          <p className="product__title">{product.name}</p>
          <p>
            <Box component="span" fontSize="16px" fontWeight="600" mr={1}>
              {formatPrice(product.salePrice)}
            </Box>
            {product.promotionPercent > 0
              ? `-${product.promotionPercent}%`
              : ""}
          </p>
        </Box>
        {/* <Box className={classes.cart}>
          <ShoppingCartIcon />
        </Box> */}
      </Box>
    </Box>
  );
}

export default Product;
