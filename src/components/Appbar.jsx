import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { IconButton, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { ThemeProvider } from '@mui/material/styles';
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
// import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Badge from '@mui/material/Badge';
import CameraAltIcon from "@mui/icons-material/CameraAlt";
// import Divider from "@mui/material/Divider";
import "../scss/Appbar.scss";
import { openDrawer } from "../redux/openDrawer/openDrawerActions";
import { View } from "../redux/view/viewActions";
import { connect } from "react-redux";
import ProfileUploadDialog from "./ProfileUploadDialog";
import { createTheme } from '@mui/material/styles';
import gridIcon from '../assets/grid.svg';
import listIcon from '../assets/list.svg';

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          color: "black",
          backgroundColor: "white",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        regular: {
          display: "flex",
          justifyContent: "space-between",
        },
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
      openProfileUploadDialog: false,
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

  handleClose = () => {
    this.setState({
      anchorEl: null,
      open: false,
    });
  };

  handleSignOut = () => {
    sessionStorage.clear();
    this.props.props.history.push("/");
  };

  profilePicture = () => {
    this.setState({
      openProfileUploadDialog: !this.state.openProfileUploadDialog,
    });
    // this.handleClose();
  };

  handleProfileDialogClose = () => {
    this.setState({
      openProfileUploadDialog: !this.state.openProfileUploadDialog,
    });
  };

  componentDidUpdate() {
    if (sessionStorage.getItem("imageUrl") !== this.state.imageUrl) {
      this.setState({
        imageUrl: sessionStorage.getItem("imageUrl"),
      });
    }
  }

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
        <ThemeProvider theme={theme}>
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
                <div className="search-text">
                  <InputBase
                    autoComplete="off"
                    placeholder="Search…"
                    name="value"
                    inputProps={{ "aria-label": "search" }}
                    onChange={(event) => this.input(event)}
                    fullWidth
                  />
                </div>
                <div className="search-icon">
                  {this.state.showCancel === true && (
                    <IconButton onClick={() => this.cancel()}>
                      <ClearIcon />
                    </IconButton>
                  )}
                </div>
              </div>
              <div className="grid-list">
                <IconButton onClick={this.props.View}>
                  {/* <img src={require("../assets/grid.svg")} alt="" /> */}
                  {this.props.view ? (
                    <img src={gridIcon} alt="grid-icon" />
                  ) : (
                    <img src={listIcon} alt="list-icon" />
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
                  <div className="profileAvatar">
                    <Badge
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      color="default"
                      overlap="circular"
                      badgeContent={
                        <CameraAltIcon
                          className="badge"
                          onClick={() => this.profilePicture()}
                        />
                      }
                    >
                      <div className="profile-image">
                        {this.state.imageUrl ? (
                          <img
                            className="profileAvatarImage"
                            src={this.state.imageUrl}
                            alt="profilepicture"
                          />
                        ) : (
                          <div
                            style={{
                              backgroundColor: this.state.profileColor,
                            }}
                            className="profileAvatarImage"
                          >
                            <span className="centered">
                              {" "}
                              {this.state.firstLetter}{" "}
                            </span>
                          </div>
                        )}
                      </div>
                    </Badge>
                  </div>
                  {/* <Divider /> */}
                  <div className="name">
                    <span className="ownerName">
                      {sessionStorage.getItem("firstName")}
                    </span>
                  </div>
                  <div className="name">
                    <span className="ownerEmail">
                      {sessionStorage.getItem("email")}
                    </span>
                  </div>
                  {/* <Divider /> */}
                  <div className="signOut">
                    <Button
                      className="signOutButton"
                      onClick={this.handleSignOut}
                    >
                      Sign Out
                    </Button>
                  </div>
                </Menu>
              </div>
            </Toolbar>
          </AppBar>
          {this.state.openProfileUploadDialog === true && (
            <ProfileUploadDialog
              open={this.state.openProfileUploadDialog}
              handleClose={this.handleProfileDialogClose}
            />
          )}
        </ThemeProvider>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Appbar);
