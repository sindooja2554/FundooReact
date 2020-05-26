import React, { Component } from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import { IconButton, Button } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import "../scss/NoteIcon.scss";

const theme = createMuiTheme({
  overrides: {
    MuiDialog: {
      paperWidthSm: {
        width: "600px",
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
    };
  }

  componentDidUpdate(prevprops) {
    if (
      prevprops.openCollaboratorDialog !== this.props.openCollaboratorDialog
    ) {
      console.log(
        "old props----------------->",
        this.props.openCollaboratorDialog
      );
      console.log("props.....new .....", this.props.openCollaboratorDialog);
    }
  }

  close = () => {
    this.props.closeCollaboratorDialog();
  };

  UNSAFE_componentWillMount() {
    console.log("props-------------------------------->", this.props.note);
    this.setState({
      profilepicture: sessionStorage.getItem("imageUrl"),
      ownerEmail: sessionStorage.getItem("email"),
      collaboratorArray: this.props.note.collaborator,
    });
    console.log("osdsodsaomsaosa", this.state.collaboratorArray);
  }

  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Dialog
            onClose={() => this.close()}
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
                  {this.state.collaboratorArray.map((index, item) => (
                    <ListItem button key={index}>
                      <ListItemAvatar>
                        {item.imageUrl !== "" ? (
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
                      <IconButton>
                        <ClearIcon />
                      </IconButton>
                    </ListItem>
                  ))}
                </div>
              )}
              <Divider />
              <ListItem>
                <ListItemAvatar>
                  <IconButton>
                    <img
                      src={require("../assets/collaborator.svg")}
                      alt="addCollaborator"
                    />
                  </IconButton>
                </ListItemAvatar>
                <TextField
                  id="Standard-basic"
                  placeholder="Person or email to share with"
                  fullWidth
                />
                <IconButton>
                  <DoneIcon />
                </IconButton>
              </ListItem>
            </List>
            <DialogActions>
              <Button color="primary">Cancel</Button>
              <Button color="primary">Save</Button>
            </DialogActions>
          </Dialog>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default CollaboratorDialog;
