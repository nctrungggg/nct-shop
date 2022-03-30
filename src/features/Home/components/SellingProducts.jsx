import React from "react";
import PropTypes from "prop-types";
import "./SellingProducts.scss";
import { useHistory } from "react-router-dom";

SellingProducts.propTypes = {};

const listProductSelling = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Laptop",
    type: "lap",
  },

  {
    id: 2,
    url: "https://images.pexels.com/photos/11525158/pexels-photo-11525158.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Iphone",
    type: "iphone",
  },

  {
    id: 3,
    url: "https://images.pexels.com/photos/117729/pexels-photo-117729.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Hard Drive",
    type: "hardDrive",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/577560/pexels-photo-577560.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Laptop",
    type: "lap",
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Fashion",
    type: "fashion",
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/9862660/pexels-photo-9862660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Fashion",
    type: "fashion",
  },
  {
    id: 7,
    url: "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Fashion",
    type: "fashion",
  },
  {
    id: 8,
    url: "https://images.pexels.com/photos/4132651/pexels-photo-4132651.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Fashion",
    type: "fashion",
  },
];

function SellingProducts(props) {
  const history = useHistory();

  const handleClick = (type) => {
    console.log(type);
    if (type === "lap") history.push("products?category.name=Laptop");

    if (type === "iphone") history.push("products?category.name=Điện%20thoại");

    if (type === "hardDrive") history.push("products?category.name=Ổ%20cứng");

    if (type === "fashion") history.push("products?category.name=Thời%20trang");
  };
  return (
    <div className="selling" data-aos="fade-up">
      <h2>Danh mục sản phẩm</h2>
      <div className="selling-image">
        {listProductSelling.map((item) => (
          <div
            className="selling-image__item "
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            data-aos-offset="0"
            key={item.id}
            onClick={() => handleClick(item.type)}
          >
            <img src={item.url} alt="" />
            <div class="overlay">
              <h2>{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SellingProducts;
