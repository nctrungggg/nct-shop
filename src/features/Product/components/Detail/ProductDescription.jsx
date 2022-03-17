import { Box } from "@material-ui/core";
import React from "react";

ProductDescription.propTypes = {};

function ProductDescription(props) {
  return (
    <Box p={2} width="80%">
      <h2>Nội dung tính năng</h2>
      <p>
        MacBook Air là máy tính xách tay mỏng và nhẹ nhất của Apple – nay thay
        đổi ngoạn mục với chip Apple M1 mạnh mẽ. Tạo ra một cú nhảy vọt về hiệu
        năng CPU và đồ họa, cùng thời lượng pin lên đến 18 giờ.
      </p>
      <p>
        Máy tính xách tay mỏng và nhẹ nhất của Apple, nay siêu mạnh mẽ với chip
        Apple M1. Xử lý công việc giúp bạn với CPU 8 lõi nhanh như chớp. Đưa các
        ứng dụng và game có đồ họa khủng lên một tầm cao mới với GPU 8 lõi. Đồng
        thời, tăng tốc các tác vụ máy học với Neural Engine 16 lõi. Tất cả gói
        gọn trong một thiết kế không quạt, không tiếng ồn, thời lượng pin dài
        nhất từ trước đến nay lên đến 18 giờ. (1) MacBook Air vẫn cực kỳ cơ động
        mà mạnh mẽ hơn nhiều.
      </p>
    </Box>
  );
}

export default ProductDescription;
