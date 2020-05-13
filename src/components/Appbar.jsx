import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "../scss/Appbar.scss";

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        color: "black",
        backgroundColor: "white",
      },
    },
    MuiInputBase: {
      root: {
        width: "600px",
        height: "40px",
      },
    },
    MuiToolbar: {
      regular: {
        display: "flex",
        justifyContent: "space-between",
      },
    },
  },
});

export class Appbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: false,
      anchorEl: null,
      open: false,
    };
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  showView(event) {
    this.setState({
      view: !this.state.view,
    });
  }

  handleMenu = (event) => {
    this.setState({
      anchorEl: event.currentTarget,
      open: true,
    });
  };

  handleClose = (event) => {
    this.setState({
      anchorEl: null,
      open: false,
    });
  };

  handleSignOut = () => {
    sessionStorage.clear();
    this.props.history.push("/");
  };

  handleDrawer = (event) => {
    this.setState({
      drawer: true,
    });
  };

  render() {
    return (
      <div className="toolbar">
        <MuiThemeProvider theme={theme}>
          <AppBar position="static">
            <Toolbar>
              <div className="menu-app-icon">
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={this.props.handleDrawer}
                >
                  <MenuIcon />
                </IconButton>
                <img src={require("../assets/fundoo.png")} alt="fundoo_icon" />
                <Typography variant="h6" noWrap>
                  Fundoo
                </Typography>
              </div>
              <div className="search">
                <div className="search-icon">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </div>
                <InputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
              <div className="grid">
                <IconButton onClick={(event) => this.showView(event)}>
                  {/* <img src={require("../assets/grid.svg")} alt="" /> */}
                  {this.state.view ? (
                    <img src={require("../assets/list.svg")} alt="list-icon" />
                  ) : (
                    <img src={require("../assets/grid.svg")} alt="grid-icon" />
                  )}
                </IconButton>
              </div>
              <div>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  color="inherit"
                  onClick={(event) => this.handleMenu(event)}
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={this.state.anchorEl}
                  getContentAnchorEl={null}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  open={this.state.open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleSignOut}>Sign Out</MenuItem>
                </Menu>
              </div>
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Appbar;
