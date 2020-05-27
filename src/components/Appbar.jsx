import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import "../scss/Appbar.scss";
import { openDrawer } from "../redux/openDrawer/openDrawerActions";
import { View } from "../redux/view/viewActions";
import { connect } from "react-redux";

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

const mapStateToProps = (state) => {
  return {
    open: state.openDrawer.open,
    view: state.view.view,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openDrawer: () => dispatch(openDrawer()),
    View: () => dispatch(View()),
  };
};

export class Appbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      open: false,
      profileColor: "",
      firstLetter: "",
      imageUrl: null,
      value: "",
      showCancel: false,
    };
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  input = (event) => {
    this.setState({
      showCancel: true,
      [event.target.name]: event.target.value,
    });
  };

  search = () => {
    let value = this.state.value;
    this.setState({
      showCancel: true,
    });
    if (this.state.value.length !== 0) {
      this.props.props.history.push("/dashboard/search/" + value);
    }
  };

  cancel = () => {
    this.setState({
      showCancel: false,
      value: "",
    });
    this.props.props.history.push("/dashboard");
  };

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
    this.props.props.history.push("/");
  };

  UNSAFE_componentWillMount() {
    this.setState({
      profileColor: sessionStorage.getItem("profileColor"),
      firstLetter: sessionStorage.getItem("firstName").charAt(0),
      imageUrl: sessionStorage.getItem("imageUrl"),
    });
  }

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
                  onClick={this.props.openDrawer}
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
                  <IconButton onClick={() => this.search()}>
                    <SearchIcon />
                  </IconButton>
                </div>
                <InputBase
                  autoComplete="off"
                  placeholder="Search…"
                  name="value"
                  inputProps={{ "aria-label": "search" }}
                  onChange={(event) => this.input(event)}
                />
                <div className="search-icon">
                  {this.state.showCancel === true && (
                    <IconButton onClick={() => this.cancel()}>
                      <ClearIcon />
                    </IconButton>
                  )}
                </div>
              </div>
              <div className="grid">
                <IconButton onClick={this.props.View}>
                  {/* <img src={require("../assets/grid.svg")} alt="" /> */}
                  {this.props.view ? (
                    <img src={require("../assets/grid.svg")} alt="grid-icon" />
                  ) : (
                    <img src={require("../assets/list.svg")} alt="list-icon" />
                  )}
                </IconButton>
              </div>
              <div>
                {this.state.imageUrl ? (
                  <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={(event) => this.handleMenu(event)}
                  >
                    <Avatar alt="Color" src={this.state.imageUrl}></Avatar>
                  </IconButton>
                ) : (
                  <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={(event) => this.handleMenu(event)}
                  >
                    <Avatar
                      alt="Color"
                      style={{ backgroundColor: this.state.profileColor }}
                    >
                      {this.state.firstLetter}
                    </Avatar>
                  </IconButton>
                )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Appbar);
