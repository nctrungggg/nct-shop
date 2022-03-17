import { Box, makeStyles } from "@material-ui/core/index";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "constants/common";
import PropTypes from "prop-types";
import React, { useState } from "react";
import "./style.scss";

import { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
ProductThumbnail.propTypes = {
  product: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
  root: {},

  thumbnail: {
    borderRadius: " 0.5rem",
    width: "100%",
    cursor: "crosshair",
  },
}));

const listThumbnail = [
  "http://media3.scdn.vn/img3/2019/11_8/UPEbW1_simg_d0daf0_800x1200_max.jpg",
  "https://api.ezfrontend.com/uploads/7d2e94f82822f1801f627f52bb640fa4_735961415b.jpg",
  "https://salt.tikicdn.com/cache/400x400/media/catalog/producttmp/3b/96/fe/57a90e72a765a14bf79385943c9aa163.jpg.webp",
  "https://salt.tikicdn.com/cache/400x400/media/catalog/producttmp/6f/8c/1b/3d05be1255cd45f88bd91097b45fad92.jpg.webp",
  "https://salt.tikicdn.com/cache/400x400/media/catalog/producttmp/d3/25/55/d516b7a4b11c48c7ed6da9532e5f8190.jpg.webp",
];

function ProductThumbnail({ product = {} }) {
  const classes = useStyles();
  const { category } = product;

  const [activeThumb, setActiveThumb] = useState();

  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;

  if (category.id !== 4) {
    return (
      <Box>
        <img className={classes.thumbnail} src={thumbnailUrl} alt="thumbnail" />
      </Box>
    );
  }

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{ swiper: activeThumb }}
        className="product-images-slider"
      >
        {listThumbnail.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt="product images" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setActiveThumb}
        loop={true}
        spaceBetween={20}
        slidesPerView={4}
        modules={[Navigation, Thumbs]}
        className="product-images-slider-thumbs"
      >
        {listThumbnail.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="product-images-slider-thumbs-wrapper">
              <img src={item} alt="product images" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );

  // return (
  //   <Box>
  //     <img className={classes.thumbnail} src={thumbnailUrl} alt="thumbnail" />
  //   </Box>
  // );
}

export default ProductThumbnail;
