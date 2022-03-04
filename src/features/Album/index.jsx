import React from "react";
import AlbumList from "./components/AlbumList/index";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Hey babi",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/9/9/3/a/993ac1dfd03739c85e4ef008a6c24fa6.jpg",
    },
   
  ];

  return (
    <div>
      <h2>Co the ban se thich</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
