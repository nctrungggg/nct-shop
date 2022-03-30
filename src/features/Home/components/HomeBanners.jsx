import { Button } from "@material-ui/core";
import AOS from "aos";
import React from "react";
import { useHistory } from "react-router-dom";
import "./HomeBanners.scss";

AOS.init({
  duration: 1200,
});

HomeBanners.propTypes = {};

function HomeBanners(props) {
  const history = useHistory();

  const handleClickToProduct = () => {
    history.push("/products");
  };
  return (
    <div className="banner">
      <div className="banner-left" data-aos="fade-right">
        <h1>
          Mua sắm giúp chúng ta xả <span>stress </span> mỗi ngày
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cumque
          aliquam debitis porro tenetur voluptatibus, culpa ducimus. Possimus
          quidem illum veniam voluptatum temporibus cupiditate exercitationem
          blanditiis. Minus non magnam magni.
        </p>

        <Button
          color="primary"
          variant="outlined"
          onClick={handleClickToProduct}
        >
          Mua ngay nào
        </Button>
      </div>
      <div className="banner-right" data-aos="fade-left">
        <div className="banner-img">
          <img
            src="https://images.pexels.com/photos/4132651/pexels-photo-4132651.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HomeBanners;
