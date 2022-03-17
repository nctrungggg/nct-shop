import { Box, Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

FilterSkeleton.propTypes = {
  length: PropTypes.number,
};

FilterSkeleton.defaultProps = {
  length: 12,
};

function FilterSkeleton({ length }) {
  return (
    <Box height={500} padding={1}>
      <Paper></Paper>
    </Box>
  );
}

export default FilterSkeleton;
