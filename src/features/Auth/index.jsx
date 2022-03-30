import { Box, Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import "./style.scss";

AuthFeature.propTypes = {};
const MODE = {
  LOGIN: "login",
  REGISTER: "register",
};

function AuthFeature(props) {
  const [mode, setMode] = useState(MODE.LOGIN);

  const handleSubmitRegister = (value) => {
    console.log(value);
    setMode(value);
  };

  return (
    <div className="login">
      <div className="container">
        <div className="left" data-aos="fade-right">
          <img
            src="https://images.pexels.com/photos/2899707/pexels-photo-2899707.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </div>

        <div className="right" data-aos="fade-left">
          <div className="right__form">
            {mode === MODE.REGISTER && (
              <>
                <Register mode={MODE} onSubmit={handleSubmitRegister} />

                <Box textAlign="center">
                  <Button
                    className="btn_mode"
                    size="small"
                    color="primary"
                    onClick={() => setMode(MODE.LOGIN)}
                  >
                    Đã có tài khoản? Đăng nhập
                  </Button>
                </Box>
              </>
            )}

            {mode === MODE.LOGIN && (
              <>
                <Login />

                <Box textAlign="center">
                  <Button
                    className="btn_mode"
                    size="small"
                    color="primary"
                    onClick={() => setMode(MODE.REGISTER)}
                  >
                    Chưa có tài khoản? Đăng ký
                  </Button>
                </Box>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthFeature;
