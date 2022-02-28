import Box from "@material-ui/core/Box";
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
    <Box>
      <Skeleton variant="rect" width="100%" height={500} />
      <Skeleton />
      <Skeleton />
      <Skeleton width="60%" />
    </Box>
  );
}

export default FiltersSkeleton;
