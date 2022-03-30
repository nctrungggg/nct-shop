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
  title: {
    fontWeight: "500",
  },
  category: {
    fontSize: "14px",
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
        fontWeight: "500",
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
    if (onChange) onChange(category.name);
  };

  return (
    <Box className={classes.root}>
      <p className={classes.title}>Danh mục sản phẩm</p>
      <ul className={classes.menu}>
        {categoryList.map((category) => (
          <li
            key={category.id}
            onClick={() => {
              handleCategoryClick(category);
            }}
          >
            <p className={classes.category}>{category.name}</p>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
