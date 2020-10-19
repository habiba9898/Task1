import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Logo from "./download.png";
import background1 from "./back1.png";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ backgroundColor: "white", height: 55 }}
      >
        <Toolbar>
          <div className={classes.photo}>
            <img src={Logo} style={{ height: 40, width: 90 }}></img>
          </div>
          <Typography className={classes.title}>
            <Button style={{ fontweight: 9000, fontsize: "500px" }}>
              Home
            </Button>
            <Button>Setup</Button>
            <Button>Boards</Button>
            <Button>Services</Button>
          </Typography>
          <IconButton
            style={{ width: "40px" }}
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="black"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
          )
        </Toolbar>
      </AppBar>
      <div className={classes.photo}>
        <img src={background1} style={{ height: 85, width: "100%" }}></img>
        <div
          style={{
            position: "absolute",
            right: 650,
            bottom: 530,
            fontSize: 25,
            color: "#5A4E4E",
            fontFamily: "Merriweather",
            fontWeight: 500,
          }}
        >
          Q&V Portal
        </div>
      </div>
    </div>
  );
}
