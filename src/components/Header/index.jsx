import { Badge, Dialog, DialogContent } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Close } from "@material-ui/icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Login from "features/Auth/components/Login";
import Register from "features/Auth/components/Register";
import { hideFormLogin, logout, showFormLogin } from "features/Auth/userSlice";
import { removeAllItems } from "features/Cart/cartSlice";
import { cartItemsCountSelector } from "features/Cart/selectors";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import "./style.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: theme.spacing(10),
  },

  title: {
    lineHeight: 1,
    flexGrow: 1,
  },

  link: {
    color: "#fff",
    textDecoration: "none",
  },

  closeButton: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),

    color: theme.palette.grey[600],

    zIndex: 1,
  },

  name: {
    fontSize: "12px",
    color: "#fff",
    fontWeight: "500",
  },

  navBar: {
    marginRight: theme.spacing(3),
  },

  btnLogin: {
    marginRight: theme.spacing(4),
  },

  closesButton: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),

    color: theme.palette.grey[600],

    zIndex: 1,
  },
}));

const MODE = {
  LOGIN: "login",
  REGISTER: "register",
};

export default function Header() {
  const classes = useStyles();

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
    history.push({
      pathname: "/cart",
    });
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/">
              <HomeIcon className={classes.home} fontSize="large" />
            </Link>
          </Typography>

          <Box className={classes.navBar}>
            <NavLink
              activeClassName={classes.activeLink}
              className={classes.link}
              to="/products"
            >
              <Button color="inherit">SẢN PHẨM</Button>
            </NavLink>
            <NavLink
              activeClassName={classes.activeLink}
              className={classes.link}
              to="/todos"
            >
              <Button color="inherit">LIÊN HỆ</Button>
            </NavLink>
          </Box>

          {!isLoggedIn && (
            <Button
              className={classes.btnLogin}
              onClick={handleOpenDialog}
              color="inherit"
            >
              Đăng nhập
            </Button>
          )}

          {isLoggedIn && mode === MODE.REGISTER && (
            <Button onClick={handleOpenDialog} color="inherit">
              Đăng nhập
            </Button>
          )}

          {isLoggedIn && mode === MODE.LOGIN && (
            <Box>
              <Typography variant="span" className={classes.name}>
                {loggedInUser.fullName.toUpperCase()}
              </Typography>
              <IconButton color="inherit" onClick={handleUserClick}>
                <AccountCircleIcon className={classes.iconName} />
              </IconButton>
            </Box>
          )}

          <IconButton
            aria-label="show new mails"
            color="inherit"
            onClick={handleCartClick}
          >
            <Badge badgeContent={cartItemsCount} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

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
        <IconButton
          onClick={handleCloseDialog}
          className={classes.closesButton}
        >
          <Close />
        </IconButton>

        <DialogContent>
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
        </DialogContent>
      </Dialog>
    </div>
  );
}
