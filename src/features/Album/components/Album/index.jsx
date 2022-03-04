import { Box } from "@material-ui/core";
import React, { useState } from "react";
import "./style.scss";
import ReplayIcon from "@material-ui/icons/Replay";
import classnames from "classnames";
import ReactImageZoom from "react-image-zoom";
Album.propTypes = {};

function Album({ album }) {
  const props = {
    width: 400,
    height: 250,
    zoomWidth: 500,
    img: "http://malaman.github.io/react-image-zoom/example/1.jpg",
  };

  return (
    <Box>
      <img src={album.thumbnail} alt="" />
      <ReactImageZoom {...props} />
    </Box>
  );
}

export default Album;
