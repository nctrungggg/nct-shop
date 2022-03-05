import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import React from "react";
import FilterByCategory from "./Filters/FilterByCategory";
import FilterByPrice from "./Filters/FilterByPrice";
import FilterByService from "./Filters/FilterByService";

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};
ProductFilters.defaultProps = {
  onChange: null,
};

function ProductFilters({ filters, onChange }) {
  const handleCategoryChange = (newCategoryName) => {
    if (!onChange) return;

    const newFilters = {
      "category.name": newCategoryName,
    };

    onChange(newFilters);
  };

  const handleChange = (values) => {
    if (onChange) onChange(values);
  };

  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterByPrice filters={filters} onChange={handleChange} />
      <FilterByService filters={filters} onChange={handleChange} />
    </Box>
  );
}

export default ProductFilters;
