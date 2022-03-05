import { Button, InputBase, Box, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import queryString from "query-string";
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

ProductSearch.propTypes = {};
const useStyles = makeStyles((theme) => ({
  form: {
    position: "relative",
    margin: " 0 auto",

    borderRadius: "20px",
    padding: " 5px 10px 5px 20px",
    border: "1px solid rgba(0,0,0,.15)",
    width: "60%",
  },

  searchInput: {
    outline: "0",
    border: "0",
    width: "100%",
    backgroundColor: "#fff",

    "&:hover .form": {
      border: "1px solid red",
    },
  },

  searchButton: {
    "& > button": {
      position: "absolute",
      top: 0,
      right: 0,

      borderRadius: "20px",

      height: "100%",
      width: "20%",
    },
  },
}));

function ProductSearch(props) {
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = useState("");
  const currentSearchParams = queryString.parse(history.location.search);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newSearchParams = {
      ...currentSearchParams,
      _page: 1,
      name_contains: value,
    };
    history.push({
      pathname: "/search",
      search: queryString.stringify(newSearchParams),
    });
    setValue("");
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
      <Box>
        <InputBase
          placeholder="Tìm kiếm sản phẩm..."
          className={classes.searchInput}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Box>
      <Box className={classes.searchButton}>
        <Button variant="outlined" color="primary">
          <SearchIcon />
        </Button>
      </Box>
    </form>
  );
}

export default ProductSearch;
