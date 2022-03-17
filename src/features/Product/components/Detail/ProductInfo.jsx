import { Box, makeStyles, Typography } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { formatPrice } from "utils";
import classnames from "classnames";
import "./style.scss";

ProductInfo.propTypes = {
  product: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },

  name: {
    textTransform: "uppercase",
  },

  description: {
    margin: theme.spacing(2, 0),
  },

  priceBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[100],
  },

  salePrice: {
    marginRight: theme.spacing(2),
    fontSize: "32px",
    fontWeight: "500",
    lineHeight: "40px",
    color: " #3F51B5",
  },

  originalPrice: {
    marginRight: theme.spacing(2),
    textDecoration: "line-through",
    color: " rgb(128, 128, 137)",
  },

  promotionPercent: {
    fontWeight: "400",
    border: "1px solid #3F51B5",
    borderRadius: "2px",
    color: "#3F51B5",
    lineHeight: "18px",
    fontSize: " 14px",
    padding: "0px 4px",
  },

  freeShip: {
    color: " #3F51B5",

    fontWeight: "500",
    fontSize: "12px",

    marginTop: theme.spacing(2),
  },

  belowTitle: {
    display: "flex",
    flexFlow: "row nowrap",

    "& > span": {
      marginLeft: theme.spacing(1),

      fontSize: "14px",
      lineHeight: "21px",
      color: "rgb(120, 120, 120)",
    },
  },

  starRage: {
    color: "rgb(253, 216, 54)",
    cursor: "text",
  },

  option: {
    display: "flex",
    flexFlow: "row nowrap",
  },

  optionProduct: {
    cursor: "pointer",
    margin: " 8px 10px 0px 0px",
    padding: " 2px",
    color: "rgb(36, 36, 36)",
    fontSize: "13px",
    width: " 144px",
    position: "relative",
    display: " flex",
    alignItems: "center",
    backgroundColor: "rgb(242, 242, 242)",
    border: "1px solid transparent",
    outline: "0px",
    borderRadius: "4px",

    "&:hover": {
      border: " 1px solid rgb(13, 92, 182)",
      backgroundColor: "rgb(229, 242, 255)",
    },

    "&> div": {
      width: "60px",
      height: "60px",
      flexShrink: 0,

      "& > img": {
        maxWidth: "100%",
      },
    },
  },

  optionLabel: {
    margin: "6px 20px",
  },

  buttonOptions: {
    cursor: "pointer",
    margin: " 8px 10px 0px 0px",
    padding: " 8px",
    color: "rgb(36, 36, 36)",
    fontSize: "13px",
    minWidth: "80px",
    position: "relative",
    backgroundColor: " rgb(242, 242, 242)",
    border: "1px solid transparent",
    outline: " 0px",
    borderRadius: "4px",

    "&:hover": {
      border: " 1px solid rgb(13, 92, 182)",
      backgroundColor: "rgb(229, 242, 255)",
    },
  },
}));

function ProductInfo({ product }) {
  const classes = useStyles();

  const {
    category,
    shortDescription,
    name,
    originalPrice,
    salePrice,
    promotionPercent,
    isFreeShip,
  } = product;

  const [optionProduct, setOptionProduct] = useState("Silver");
  const [optionCapacity, setOptionCapacity] = useState(" 8GB / 256GB");

  return (
    <Box className={classes.root}>
      <Typography component="h1" variant="h4" className={classes.name}>
        {name}
      </Typography>
      <Box className={classes.belowTitle}>
        <Box className={classes.starRage}>
          <StarIcon fontSize="small" />
          <StarIcon fontSize="small" />
          <StarIcon fontSize="small" />
          <StarIcon fontSize="small" />
          <StarIcon fontSize="small" />
        </Box>
        <span> Đã bán 1000+</span>
      </Box>

      <Typography variant="body2" className={classes.description}>
        {shortDescription}
      </Typography>

      <Box className={classes.priceBox}>
        <Box component="span" className={classes.salePrice}>
          {formatPrice(salePrice)}
        </Box>
        {promotionPercent > 0 && (
          <>
            <Box component="span" className={classes.originalPrice}>
              {formatPrice(originalPrice)}
            </Box>
            <Box component="span" className={classes.promotionPercent}>
              {`-${promotionPercent}%`}
            </Box>
          </>
        )}

        {isFreeShip && (
          <Typography className={classes.freeShip}>
            Miễn phí vận chuyển
          </Typography>
        )}
      </Box>

      {category.id === 4 && (
        <>
          <Box mt={2}>
            <Typography
              className={classes.promotionPercent}
              component="span"
              variant="subtitle2"
            >
              Màu: {optionProduct}
            </Typography>
          </Box>

          <Box className={classes.option}>
            <Box
              className={classes.optionProduct}
              onClick={() => setOptionProduct("Silver")}
            >
              <Box>
                <img
                  src="https://salt.tikicdn.com/cache/100x100/media/catalog/producttmp/5d/7b/75/fde1a8b4a458a1dbcefa7bb6ad11bf6b.jpg.webp"
                  alt=""
                />
              </Box>
              <Typography
                className={classes.optionLabel}
                component="span"
                variant="body2"
              >
                Silver
              </Typography>
            </Box>
            <Box
              className={classes.optionProduct}
              onClick={() => setOptionProduct("Space Gray")}
            >
              <Box>
                <img
                  src="https://salt.tikicdn.com/cache/100x100/media/catalog/producttmp/5d/7b/75/fde1a8b4a458a1dbcefa7bb6ad11bf6b.jpg.webp"
                  alt=""
                />
              </Box>
              <Typography
                className={classes.optionLabel}
                component="span"
                variant="body2"
              >
                Space Gray
              </Typography>
            </Box>
            <Box
              className={classes.optionProduct}
              onClick={() => setOptionProduct(" Gold")}
            >
              <Box>
                <img
                  src="https://salt.tikicdn.com/cache/100x100/media/catalog/producttmp/5d/7b/75/fde1a8b4a458a1dbcefa7bb6ad11bf6b.jpg.webp"
                  alt=""
                />
              </Box>
              <Typography
                className={classes.optionLabel}
                component="span"
                variant="body2"
              >
                Gold
              </Typography>
            </Box>
          </Box>

          <Box mt={2}>
            <Typography
              className={classes.promotionPercent}
              component="span"
              variant="subtitle2"
            >
              Dung lượng: {optionCapacity}
            </Typography>
          </Box>
          <Box>
            <button
              className={classes.buttonOptions}
              onClick={() => setOptionCapacity("8GB / 256GB")}
            >
              8GB / 256GB
            </button>
            <button
              className={classes.buttonOptions}
              onClick={() => setOptionCapacity("  8GB / 512GB")}
            >
              8GB / 512GB
            </button>
            <button
              className={classes.buttonOptions}
              onClick={() => setOptionCapacity(" 16GB / 256GB")}
            >
              16GB / 256GB
            </button>
            <button
              className={classes.buttonOptions}
              onClick={() => setOptionCapacity("  16GB / 512GB")}
            >
              16GB / 512GB
            </button>
          </Box>
        </>
      )}
    </Box>
  );
}

export default ProductInfo;
