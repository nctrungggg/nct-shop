import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import categoryApi from "api/categoryApi";
import { makeStyles } from "@material-ui/core/styles";

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};
FilterByCategory.defaultProps = {
  onChange: null,
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },

  menu: {
    padding: 0,
    margin: 0,
    listStyleType: "none",

    " & > li": {
      marginTop: theme.spacing(1),
      transition: "all .25s",
      position: "relative",
      right: 0,

      "  &:hover": {
        right: "-6px",
        color: theme.palette.primary.dark,
        cursor: "pointer",
      },
    },
  },
}));

function FilterByCategory({ onChange }) {
  const classes = useStyles();
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const list = await categoryApi.getAll();

        setCategoryList(list.map((x) => ({ id: x.id, name: x.name })));
      } catch (error) {
        console.log("Failed to fetch category list: ", error);
      }
    })();
  }, []);

  const handleCategoryClick = (category) => {
    if (onChange) onChange(category.id);
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>
      <ul className={classes.menu}>
        {categoryList.map((category) => (
          <li
            key={category.id}
            onClick={() => {
              handleCategoryClick(category);
            }}
          >
            <Typography variant="body2">{category.name}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
