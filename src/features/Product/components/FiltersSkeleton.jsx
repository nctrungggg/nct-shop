import { Box, Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";
import PropTypes from "prop-types";
import React from "react";

FiltersSkeleton.propTypes = {
  length: PropTypes.number,
};

FiltersSkeleton.defaultProps = {
  length: 12,
};

function FiltersSkeleton({ length }) {
  return (
    <Box height={500} padding={1}>
      <Paper></Paper>
    </Box>
  );
}

export default FiltersSkeleton;
