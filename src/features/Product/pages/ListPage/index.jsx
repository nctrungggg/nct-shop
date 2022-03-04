import { Box, IconButton } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Pagination from "@material-ui/lab/Pagination";
import NotPound from "components/NotFound/index";
import FiltersSkeleton from "features/Product/components/FiltersSkeleton";
import ProductFilters from "features/Product/components/ProductFilters";
import ProductList from "features/Product/components/ProductList";
import ProductSearch from "features/Product/components/ProductSearch.jsx";
import React, { useEffect, useState } from "react";
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

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    limit: 8,
    total: 8,
    page: 1,
  });
  const totalPages = Math.ceil(pagination.total / pagination.limit);

  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 8,
  });
  console.log("filters:", filters);

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);
        // cập nhật danh sách sản phẩm
        setProductList(data);

        // cập nhật pagination
        setPagination(pagination);
      } catch (error) {
        console.log("ERR: ", error);
      }

      setLoading(false);
    })();
  }, [filters]);

  const handlePageChange = (e, page) => {
    console.log(page);
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page,
    }));
  };

  const handleFiltersChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  const haha = (value) => {
    console.log(value);
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: value,
    }));
  };

  return (
    <Box>
      <Container>
        <Grid container>
          <Grid item className="left">
            <Paper elevation={0}>
              {loading ? (
                <FiltersSkeleton />
              ) : (
                <ProductFilters
                  filters={filters}
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
                        onClick={() => haha(pagination.page - 1)}
                      >
                        <ArrowBackIcon />
                      </IconButton>
                      <IconButton
                        color="primary"
                        disabled={pagination.page >= totalPages}
                        onClick={() => haha(pagination.page + 1)}
                      >
                        <ArrowForwardIcon />
                      </IconButton>
                    </Box>
                  </Box>

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
