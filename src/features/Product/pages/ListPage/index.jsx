import { Box, Breadcrumbs, IconButton, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import CancelIcon from "@material-ui/icons/Cancel";
import Pagination from "@material-ui/lab/Pagination";
import NotPound from "components/NotFound/index";
import FilterViewer from "features/Product/components/FilterViewer.jsx";
import ProductFilters from "features/Product/components/ProductFilters";
import ProductList from "features/Product/components/ProductList";
import ProductSearch from "features/Product/components/ProductSearch.jsx";
import queryString from "query-string";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";
import productApi from "../../../../api/productApi.js";
import FilterSkeleton from "../../components/Sekeleton/FilterSkeleton.jsx";
import ProductSkeletonList from "../../components/Sekeleton/ProductSkeletonList";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import "./style.scss";

ListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  boxSearch: {
    display: "flex",

    justifyContent: " space-between",

    paddingTop: theme.spacing(2),
    // margin: " 0 auto",
  },

  searchResults: {
    display: "flex",
    flexFlow: "row nowrap",
    width: "360px",
  },

  searchTitle: {
    "&  span": {
      fontSize: "20px",
      fontWeight: "500",

      marginLeft: theme.spacing(1),
    },
  },
  IconSearch: {
    marginLeft: theme.spacing(1),
    width: "30px",
    cursor: "pointer",
  },

  breadcrumbs: {
    marginLeft: "60px",
    marginBottom: theme.spacing(2),

    "& > ol >  li": {
      margin: 0,
    },
  },

  link: {
    color: "#555",
    textDecoration: "none",
    fontSize: "14px",
    cursor: "pointer",

    "&:hover": {
      textDecoration: "underline",
    },
  },

  textBread: {
    color: " #3F51B5",
    fontSize: "14px",
  },
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

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [pagination, setPagination] = useState({
    limit: 8,
    total: 8,
    page: 1,
  });
  const totalPages = Math.ceil(pagination.total / pagination.limit);

  // const [filters, setFilters] = useState({
  //   _page: 1,
  //   _limit: 9,
  // });

  // const [filters, setFilters] = useState(() => ({
  //   ...queryParams,
  //   _page: Number.parseInt(queryParams._page) || 1,
  //   _limit: Number.parseInt(queryParams._limit) || 9,
  // }));

  // useEffect(() => {
  //   history.push({
  //     pathname: history.location.pathname,
  //     search: queryString.stringify(filters)
  //   })
  // },[history, filters])

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
    const filters = {
      ...newFilters,
      _page: 1,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleSearch = (newSearch) => {
    const filters = {
      ...queryParams,
      name_contains: newSearch,
      _page: 1,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleDeleteSearchResult = () => {
    delete queryParams["name_contains"];
    const filters = {
      ...queryParams,
      _page: 1,
    };
    
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  return (
    <Box >
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
        className={classes.breadcrumbs}
      >
        <Link color="inherit" to="/" className={classes.link} exact>
          Trang chủ
        </Link>

        <Typography className={classes.textBread} color="textPrimary">
          Sản phẩm
        </Typography>
      </Breadcrumbs>
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
                    <ProductSearch
                      className={classes.search}
                      onChange={handleSearch}
                    />
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

                  {queryParams["name_contains"] && (
                    <Box className={classes.searchResults} ml={2} mt={2}>
                      <Typography
                        className={classes.searchTitle}
                        variant="subtitle1"
                      >
                        Kết quả tìm kiếm cho:
                        <span>{queryParams["name_contains"]}</span>
                      </Typography>

                      <Box className={classes.IconSearch}>
                        <CancelIcon onClick={handleDeleteSearchResult} />
                      </Box>
                    </Box>
                  )}

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
