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
    {
      id: 2,
      name: "Cachy Tune",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/6/a/f/a/6afa8b51700adae78ed91e3e3813c763.jpg",
    },
    {
      id: 3,
      name: "Lil Nas",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/9/3/d/7/93d70290eb4b9c0827e2889b68178f05.jpg",
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
