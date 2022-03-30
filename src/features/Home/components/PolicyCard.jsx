import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import AOS from "aos";
import React from "react";
import "./PolicyCart.scss";

AOS.init({
  duration: 1200,
});

function PolicyCard(props) {
  return (
    <div className="policy" data-aos="fade-up">
      <div className="policy__item">
        <div className="policy-icon">
          <CheckCircleOutlineIcon />
        </div>
        <div className="policy-info">
          <div className="policy-info__name">Miễn phí giao hàng</div>
          <div className="policy-info__desc">Miễn phí các ship đơn hàng </div>
        </div>
      </div>
      <div className="policy__item">
        <div className="policy-icon">
          <CheckCircleOutlineIcon />
        </div>
        <div className="policy-info">
          <div className="policy-info__name">Thanh toán COD</div>
          <div className="policy-info__desc">
            Thanh toán khi nhận hàng (COD)
          </div>
        </div>
      </div>
      <div className="policy__item">
        <div className="policy-icon">
          <CheckCircleOutlineIcon />
        </div>
        <div className="policy-info">
          <div className="policy-info__name">Khách hàng VIP</div>
          <div className="policy-info__desc">
            Ưu đãi dành cho khách hàng VIP
          </div>
        </div>
      </div>

      <div className="policy__item">
        <div className="policy-icon">
          <CheckCircleOutlineIcon />
        </div>
        <div className="policy-info">
          <div className="policy-info__name">Hỗ trợ bảo hành</div>
          <div className="policy-info__desc">Đổi, sửa đồ tại tất cả store</div>
        </div>
      </div>
    </div>
  );
}

export default PolicyCard;
