import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, InputBase, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputField from "components/Form-controls/InputField/index";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

ProductSearch.propTypes = {
  onChange: PropTypes.func,
};

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
    fontSize: "14px",
    fontFamily: "Poppins, sans-serif",

    "&:hover .form": {
      border: "1px solid red",
    },
  },

  searchButton: {
    cursor: "pointer",

    position: "absolute",
    top: " 6px",
    right: " 20px",
  },
}));

function ProductSearch({ onChange = null }) {
  const classes = useStyles();
  const [value, setValue] = useState("");

  const schema = yup.object().shape({
    search: yup.string().required("Please enter title"),
  });

  const form = useForm({
    defaultValues: {
      title: "",
    },

    resolver: yupResolver(schema),
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onChange) onChange(value);

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

      <SearchIcon
        onClick={(e) => handleSubmit(e)}
        color="primary"
        className={classes.searchButton}
      />
    </form>
  );
}

export default ProductSearch;
