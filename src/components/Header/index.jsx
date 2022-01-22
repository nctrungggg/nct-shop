import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Close from "@material-ui/icons/Close";
import CodeIcon from "@material-ui/icons/Code";
import Login from "features/Auth/components/Login/index";
import Register from "features/Auth/components/Register";
import { logout } from "features/Auth/userSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import "./style.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
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
}));

const MODE = {
  LOGIN: "login",
  REGISTER: "register",
};

export default function Header() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;

  console.log(loggedInUser.id);
  console.log("loggedInUser: ", loggedInUser);
  console.log("isLoggedIn: ", isLoggedIn);

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseDialog = (event, reason) => {
    if (reason && reason === "backdropClick") return;
    setOpen(false);
  };

  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = (event) => {
    setAnchorEl(null);
  };

  // handle Logout
  const handleLogoutClick = () => {
    const action = logout();
    dispatch(action);
    
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon className={classes.menuButton} />

          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/">
              NCT SHOP
            </Link>
          </Typography>

          <div className="nav">
            <NavLink
              to="/todo"
              className={classes.link}
              activeClassName="active-menu"
            >
              <Button color="inherit">Todo</Button>
            </NavLink>
            <NavLink
              to="/albums"
              className={classes.link}
              activeClassName="active-menu"
            >
              <Button color="inherit">Albums</Button>
            </NavLink>
            <NavLink
              to="/counter"
              className={classes.link}
              activeClassName="active-menu"
            >
              <Button color="inherit">Counter</Button>
            </NavLink>
            <NavLink
              to="/course"
              className={classes.link}
              activeClassName="active-menu"
            >
              <Button color="inherit">Course</Button>
            </NavLink>
          </div>

          {!isLoggedIn && (
            <Button onClick={handleClickOpen} color="inherit">
              LOG IN
            </Button>
          )}
          {isLoggedIn && (
            <IconButton color="inherit" onClick={handleUserClick}>
              <AccountCircleIcon />
            </IconButton>
          )}
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
        <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>

      <Dialog
        maxWidth="xs"
        disableEscapeKeyDown
        open={open}
        onClose={handleCloseDialog}
        aria-labelledby="form-dialog-title"
      >
        <IconButton onClick={handleCloseDialog} className={classes.closeButton}>
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
                  Already have an account. Login here
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
                  Dont have an account. Register here
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
