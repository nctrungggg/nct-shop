import React from "react";
import "./style.scss";

Album.propTypes = {};

function Album({ album }) {
  return (
    <div className="album">
      
      <div className="album__thumbnail">
        <img src={album.thumbnailUrl} alt={album.name} />
      </div>

      <p className="album__name">{album.name}</p>
    </div>
  );
}

export default Album;
