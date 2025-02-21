import React, { Component } from "react";
import { ThemeProvider } from '@mui/material/styles';
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton, Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import { createTheme } from '@mui/material/styles';
import Snackbar from "@mui/material/Snackbar";
import DiscardChanges from "./DiscardChanges";
import "../scss/NoteIcon.scss";
const FetchService = require("../services/fetchService");

var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gim;

const theme = createTheme({
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          width: "600px",
        },
      },
    },
  },
});

export class CollaboratorDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilepicture: null,
      ownerEmail: null,
      collaboratorArray: [],
      openDiscardChangesDialog: false,
      email: "",
      snack: false,
      removeRequestObject: [],
      addRequestObject: [],
    };
  }

  discardChanges = () => {
    // this.props.closeCollaboratorDialog();
    this.setState({
      openDiscardChangesDialog: true,
    });
  };

  handleDiscardChanges = () => {
    this.setState({
      openDiscardChangesDialog: false,
    });
  };

  input = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  removeCollaborator = (item) => {
    for (let i = 0; i < this.state.collaboratorArray.length; i++) {
      if (this.state.collaboratorArray[i]._id === item._id) {
        this.state.collaboratorArray.splice(i, 1);
        this.setState({
          collaboratorArray: this.state.collaboratorArray,
        });
        break;
      }
    }
    if (item._id !== undefined) {
      this.state.removeRequestObject.push({
        collaboratorId: item._id,
        noteId: this.props.note._id,
      });
      this.setState({
        removeRequestObject: this.state.removeRequestObject,
      });
    } else {
      for (let i = 0; i < this.state.addRequestObject.length; i++) {
        if (this.state.addRequestObject[i].email === item.email) {
          this.state.addRequestObject.splice(i, 1);
          this.setState({
            addRequestObject: this.state.addRequestObject,
          });
          break;
        }
      }
      if (this.props.label === "onCreateNote") {
        this.state.removeRequestObject.push({
          email: item.email,
        });
      }
    }
  };

  addCollaborator = () => {
    if (!emailPattern.test(this.state.email)) {
      this.setState({
        snack: true,
      });
    } else {
      let collaboratorElement = {
        email: this.state.email,
        imageUrl: "",
      };
      this.state.collaboratorArray.push(collaboratorElement);
      if (this.props.title !== "Create_Note") {
        this.state.addRequestObject.push({
          email: this.state.email,
          noteId: this.props.note._id,
          imageUrl: "",
        });
      } else {
        this.state.addRequestObject.push({
          email: this.state.email,
          imageUrl: "",
        });
      }

      this.setState({
        collaboratorArray: this.state.collaboratorArray,
        email: "",
        addRequestObject: this.state.addRequestObject,
      });
    }
  };

  discard = () => {
    this.setState({
      collaboratorArray: [],
      removeRequestObject: {},
    });
    this.handleDiscardChanges();
    this.props.closeCollaboratorDialog();
  };

  save = () => {
    this.props.closeCollaboratorDialog();
    if (this.props.title === "Create_Note") {
      this.props.setAddCollaborator(this.state.addRequestObject);
      this.props.removeCollaborator(this.state.removeRequestObject);
    } else {
      if (this.state.addRequestObject.length !== 0) {
        this.state.addRequestObject.forEach((element) => {
          if (this.props.title !== undefined) {
            this.props.setAddCollaborator(this.state.addRequestObject);
          }
          FetchService.addCollaborator(element)
            .then((data) => {
            })
            .catch((error) => {
            });
        });
      }
      if (this.state.removeRequestObject.length !== 0) {
        if (this.props.title !== undefined) {
          this.props.removeCollaborator(this.state.removeRequestObject);
        }
        this.state.removeRequestObject.forEach((element) => {
          FetchService.removeCollaborator(element)
            .then((data) => {
            })
            .catch((error) => {
            });
        });
      }
    }
  };

  close = () => {
    this.props.closeCollaboratorDialog();
  };

  UNSAFE_componentWillMount() {
    if (this.props.note !== undefined) {
      this.setState({
        profilepicture: sessionStorage.getItem("imageUrl"),
        ownerEmail: sessionStorage.getItem("email"),
        collaboratorArray: this.props.note.collaborator,
      });
    }
    if (this.props.label === "onCreateNote") {
      this.setState({
        profilepicture: sessionStorage.getItem("imageUrl"),
        ownerEmail: sessionStorage.getItem("email"),
        collaboratorArray: this.props.note,
      });
    } else {
      this.setState({
        profilepicture: sessionStorage.getItem("imageUrl"),
        ownerEmail: sessionStorage.getItem("email"),
      });
    }
  }

  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Dialog
            onClose={() => this.discardChanges()}
            aria-labelledby="simple-dialog-title"
            open={this.props.openCollaboratorDialog}
          >
            <DialogTitle id="simple-dialog-title">Collaborator</DialogTitle>
            <Divider />
            <List>
              <ListItem button>
                <ListItemAvatar>
                  {this.state.profilepicture.length !== 0 ? (
                    <IconButton
                      edge="end"
                      aria-label="account of current user"
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <Avatar
                        src={this.state.profilepicture}
                        alt="profilepicture"
                      ></Avatar>
                    </IconButton>
                  ) : (
                    <IconButton>
                      <Avatar>
                        <PersonIcon />
                      </Avatar>
                    </IconButton>
                  )}
                </ListItemAvatar>
                <div className="emailName">
                  <ListItemText>
                    <b>{sessionStorage.getItem("firstName") + "  "}</b> (OWNER){" "}
                  </ListItemText>
                  <ListItemText>
                    <span>{this.state.ownerEmail}</span>
                  </ListItemText>
                </div>
              </ListItem>
              {this.state.collaboratorArray.length !== 0 && (
                <div>
                  {this.state.collaboratorArray.map((item, index) => (
                    <ListItem button key={index}>
                      <ListItemAvatar>
                        {item.imageUrl.length !== 0 ? (
                          <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                          >
                            <Avatar
                              src={item.imageUrl}
                              alt="profilepicture"
                            ></Avatar>
                          </IconButton>
                        ) : (
                          <IconButton>
                            <Avatar>
                              <PersonIcon />
                            </Avatar>
                          </IconButton>
                        )}
                      </ListItemAvatar>
                      <ListItemText> {item.email} </ListItemText>
                      <IconButton onClick={() => this.removeCollaborator(item)}>
                        <ClearIcon />
                      </IconButton>
                    </ListItem>
                  ))}
                </div>
              )}
              <Divider />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img
                      src={require("../assets/collaborator.svg")}
                      alt="addCollaborator"
                    />
                  </Avatar>
                </ListItemAvatar>
                <TextField
                  id="Standard-basic"
                  placeholder="Person or email to share with"
                  name="email"
                  value={this.state.email}
                  onChange={(event) => this.input(event)}
                  fullWidth
                />
                <IconButton onClick={() => this.addCollaborator()}>
                  <DoneIcon />
                </IconButton>
              </ListItem>
            </List>
            <div style={{ backgroundColor: "#E0E0E0" }}>
              <DialogActions>
                <Button color="primary" onClick={() => this.close()}>
                  Cancel
                </Button>
                <Button color="primary" onClick={() => this.save()}>
                  Save
                </Button>
              </DialogActions>
            </div>
            <Snackbar
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={this.state.snack}
              autoHideDuration={6000}
              message="Email must be in email format"
            />
            {this.state.openDiscardChangesDialog === true && (
              <DiscardChanges
                open={this.state.openDiscardChangesDialog}
                handleClose={this.handleDiscardChanges}
                discard={this.discard}
              />
            )}
          </Dialog>
        </ThemeProvider>
      </div>
    );
  }
}

export default CollaboratorDialog;
