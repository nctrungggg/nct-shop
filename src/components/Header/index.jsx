import { Badge, Dialog, DialogContent } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Close } from "@material-ui/icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Login from "features/Auth/components/Login";
import Register from "features/Auth/components/Register";
import { hideFormLogin, logout, showFormLogin } from "features/Auth/userSlice";
import { removeAllItems } from "features/Cart/cartSlice";
import { cartItemsCountSelector } from "features/Cart/selectors";
import { useSnackbar } from "notistack/dist/index";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import "./style.scss";

const MODE = {
  LOGIN: "login",
  REGISTER: "register",
};

export default function Header() {
  const { enqueueSnackbar } = useSnackbar();

  const history = useHistory();
  const dispatch = useDispatch();

  const showLogin = useSelector((state) => state.user.showLogin);

  const cartItemsCount = useSelector(cartItemsCountSelector);

  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;

  const [mode, setMode] = useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenDialog = () => {
    const action = showFormLogin();
    dispatch(action);
  };

  const handleCloseDialog = (event, reason) => {
    if (reason && reason === "backdropClick") return;

    const action = hideFormLogin();
    dispatch(action);

    setMode(MODE.LOGIN);
  };

  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = (event) => {
    setAnchorEl(null);
  };

  // handle Logout
  const handleLogoutClick = () => {
    dispatch(logout());
    dispatch(removeAllItems());

    setAnchorEl(null);
  };

  const handleCartClick = () => {
    if (isLoggedIn) {
      history.push({
        pathname: "/cart",
      });
    } else {
      enqueueSnackbar("Bạn chưa đăng nhập", {
        variant: "info",
        autoHideDuration: 2000,
      });
      handleOpenDialog();
    }
  };

  const headerRef = useRef(null);
  console.log(headerRef);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current?.classList.add("shrink");
      } else {
        headerRef.current?.classList.remove("shrink");
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  const handleLogin = () => {
    history.push("login");
  };

  return (
    <div className="header" ref={headerRef}>
      <div className="header__logo">N C T</div>

      <div className="nav-bar">
        <div className="nav-bar__left">
          <button className="btn btn-link">
            <NavLink activeClassName="active-link" to="/" exact>
              Trang chủ
            </NavLink>
          </button>
          <button className="btn btn-link">
            <NavLink activeClassName="active-link" to="/products">
              Sản phẩm
            </NavLink>
          </button>

          <button className="btn btn-link">
            <NavLink activeClassName="active-link" to="/contact">
              Liên hệ
            </NavLink>
          </button>
        </div>
        <div className="nav-bar__right">
          {!isLoggedIn && (
            // <button className="btn btn-login" onClick={handleOpenDialog}>
            //   Đăng nhập
            // </button>
            <button className="btn btn-login" onClick={handleLogin}>
              Đăng nhập
            </button>
          )}

          {isLoggedIn && mode === MODE.REGISTER && (
            // <button onClick={handleOpenDialog}>Đăng nhập</button>
            <button className="btn btn-login" onClick={handleLogin}>
              Đăng nhập
            </button>
          )}

          {isLoggedIn && mode === MODE.LOGIN && (
            <div className="account">
              <span>{loggedInUser.fullName.toUpperCase()}</span>
              <IconButton
                className="account__icon"
                color="inherit"
                onClick={handleUserClick}
              >
                <AccountCircleIcon />
              </IconButton>
            </div>
          )}

          <IconButton
            className="btn-cart"
            aria-label="show new mails"
            onClick={handleCartClick}
          >
            <Badge badgeContent={cartItemsCount} color="secondary">
              <ShoppingCartIcon color="primary" />
            </Badge>
          </IconButton>
        </div>
      </div>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleCloseMenu}>Tài khoản của tôi</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Đăng xuất</MenuItem>
      </Menu>

      <Dialog
        maxWidth="xs"
        disableEscapeKeyDown
        open={showLogin}
        onClose={handleCloseDialog}
        aria-labelledby="form-dialog-title"
      >
        <IconButton onClick={handleCloseDialog}>
          <Close />
        </IconButton>

        {/* <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleCloseDialog} />

              <Box textAlign="center">
                <Button
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
              <Login closeDialog={handleCloseDialog} />

              <Box textAlign="center">
                <Button
                  size="small"
                  color="primary"
                  onClick={() => setMode(MODE.REGISTER)}
                >
                  Chưa có tài khoản? Đăng ký
                </Button>
              </Box>
            </>
          )}
        </DialogContent> */}
      </Dialog>
    </div>
  );
}
