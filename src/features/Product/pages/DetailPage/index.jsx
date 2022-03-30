import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  LinearProgress,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { addToCart } from "features/Cart/cartSlice";
import AddToCartForm from "features/Product/components/Detail/AddToCartForm";
import ProductAdditional from "features/Product/components/Detail/ProductAdditional";
import ProductDescription from "features/Product/components/Detail/ProductDescription";
import ProductInfo from "features/Product/components/Detail/ProductInfo";
import ProductMenu from "features/Product/components/Detail/ProductMenu";
import ProductRelated from "features/Product/components/Detail/ProductRelated";
import ProductReviews from "features/Product/components/Detail/ProductReviews";
import ProductThumbnail from "features/Product/components/Detail/ProductThumbnail";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/swiper.min.css";
import useProductDetail from "../../hooks/useProductDetail";

// import { productImages } from "../../../../assets/index";

DetailPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: { marginBottom: theme.spacing(10) },
  left: {
    width: "40%",
    padding: theme.spacing(2),
    borderRight: `1px solid ${theme.palette.grey[300]}`,
  },

  right: {
    flex: "1 1 0",
    padding: theme.spacing(2),
  },

  loading: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
  },

  breadcrumbs: {
    marginBottom: theme.spacing(2),

    "& > ol >  li": {
      margin: 0,
    },
  },

  link: {
    color: "#555",
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "14px",

    padding: 0,
    margin: 0,

    "&:hover": {
      textDecoration: "underline",
    },
  },

  textBread: {
    color: " #3F51B5",
    fontSize: "14px",
  },
}));

function DetailPage(props) {
  const classes = useStyles();
  const match = useRouteMatch();
  const dispatch = useDispatch();

  const productId = match.params.productId;

  const { product, loading } = useProductDetail(productId);

  const handleAddToCartSubmit = ({ quantity }) => {
    const action = addToCart({
      id: product.id,
      product,
      quantity,
    });

    dispatch(action);
  };

  if (loading) {
    return (
      <Box>
        <LinearProgress className={classes.loading} />
      </Box>
    );
  }

  return (
    <Box className={classes.root}>
      {/* <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        className={classes.breadcrumbs}
      >
        <Link className={classes.link} color="inherit" to="/" exact>
          Trang chủ
        </Link>
        <Link className={classes.link} color="inherit" to="/products">
          Sản phẩm
        </Link>
        <Typography className={classes.textBread} color="textPrimary">
          {product.category.name}
        </Typography>
      </Breadcrumbs> */}

      <div>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={product} />
            </Grid>

            <Grid item className={classes.right}>
              <ProductInfo product={product} />
              <AddToCartForm onSubmit={handleAddToCartSubmit} />
            </Grid>
          </Grid>
        </Paper>

        {/* <Box mt={2}>
          <Paper elevation={0}>
            <ProductRelated />
          </Paper>
        </Box> */}

        <Box>
          <Paper elevation={0}>
            <ProductMenu />

            <Switch>
              <Route path={match.url} exact>
                <ProductDescription product={product} />
              </Route>

              <Route path={`${match.url}/reviews`} exact>
                <ProductReviews />
              </Route>

              <Route path={`${match.url}/additional`} exact>
                <ProductAdditional />
              </Route>
            </Switch>
          </Paper>
        </Box>
      </div>
    </Box>
  );
}

export default DetailPage;
