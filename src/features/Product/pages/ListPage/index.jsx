import { Box, IconButton } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Pagination from "@material-ui/lab/Pagination";
import NotPound from "components/NotFound/index";
import FilterSkeleton from "features/Product/components/FilterSkeleton.jsx";
import FilterViewer from "features/Product/components/FilterViewer.jsx";
import ProductFilters from "features/Product/components/ProductFilters";
import ProductList from "features/Product/components/ProductList";
import ProductSearch from "features/Product/components/ProductSearch.jsx";
import queryString from "query-string";
import React, { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import productApi from "../../../../api/productApi.js";
import ProductSkeletonList from "../../components/ProductSkeletonList";
import "./style.scss";

ListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  boxSearch: {
    display: "flex",

    justifyContent: " space-between",

    paddingTop: theme.spacing(2),
    // margin: " 0 auto",
  },

  search: {},

  paginationTop: {},
}));

function ListPage() {
  const classes = useStyles();

  const history = useHistory();
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);

    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 8,
      isPromotion: params.isPromotion === "true",
      isFreeShip: params.isFreeShip === "true",
    };
  }, [location.search]);
  console.log("queryParams:", queryParams);

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    limit: 8,
    total: 8,
    page: 1,
  });
  const totalPages = Math.ceil(pagination.total / pagination.limit);

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(queryParams);

        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("ERR: ", error);
      }

      setLoading(false);
    })();
  }, [queryParams]);

  const handlePageChange = (e, page) => {
    // setFilters((prevFilters) => ({
    //   ...prevFilters,
    //   _page: page,
    // }));

    const filters = {
      ...queryParams,
      _page: page,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handlePageChangeTop = (page) => {
    const filters = {
      ...queryParams,
      _page: page,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleFiltersChange = (newFilters) => {
    const filters = {
      ...queryParams,
      _page: 1,
      ...newFilters,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const setNewFilters = (newFilters) => {
    console.log(newFilters);
    const filters = {
      ...newFilters,
      _page: 1,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  return (
    <Box>
      <Container>
        <Grid container>
          <Grid item className="left">
            <Paper elevation={0}>
              {loading ? (
                <FilterSkeleton />
              ) : (
                <ProductFilters
                  filters={queryParams}
                  onChange={handleFiltersChange}
                />
              )}
            </Paper>
          </Grid>

          <Grid item className="right">
            <Paper elevation={0}>
              {loading ? (
                <ProductSkeletonList />
              ) : (
                <>
                  <Box height={40} className={classes.boxSearch}>
                    <ProductSearch className={classes.search} />
                    <Box className={classes.paginationTop}>
                      <IconButton
                        color="primary"
                        disabled={pagination.page <= 1}
                        onClick={() => handlePageChangeTop(pagination.page - 1)}
                      >
                        <ArrowBackIcon />
                      </IconButton>

                      <IconButton
                        color="primary"
                        disabled={pagination.page >= totalPages}
                        onClick={() => handlePageChangeTop(pagination.page + 1)}
                      >
                        <ArrowForwardIcon />
                      </IconButton>
                    </Box>
                  </Box>
                  <FilterViewer
                    filters={queryParams}
                    onChange={setNewFilters}
                  />

                  {productList && <ProductList data={productList} />}
                  {productList.length === 0 && <NotPound />}
                </>
              )}

              <Box className="pagination">
                <Pagination
                  onChange={handlePageChange}
                  page={pagination.page}
                  count={Math.ceil(pagination.total / pagination.limit)}
                  color="primary"
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
