import React, { Component } from "react";
import { Button, IconButton } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import NoteIcon from "./NoteIcon";
import "../scss/DisplayNote.scss";
const Service = require("../services/service");

const theme = createMuiTheme({
  overrides: {
    MuiDialog: {
      paperWidthSm: {
        width: "600px",
      },
    },
    MuiDialogActions: {
      root: {
        display: "flex",
        justifyContent: "space-between",
      },
    },
    MuiButton: {
      root: { backgroundColor: "white" },
    },
  },
});

export class EditNoteDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: {
        name: "white",
        code: "#FFFFFF",
      },
      isPinned: false,
      title: "",
      description: "",
      isArchive: false,
    };
  }

  input = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  changePin = () => {
    this.setState({
      isPinned: !this.state.isPinned,
    });
    let request = {
      title: this.state.title,
      description: this.state.description,
      color: {
        name: this.state.color.name,
        code: this.state.color.code,
      },
      isPinned: !this.state.isPinned,
      isTrash: this.props.note.isTrash,
      noteId: this.props.note._id,
      isArchive: false,
    };

    Service.updateNote(request)
      .then((res) => {
        this.props.handleEditClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getColor = (element) => {
    this.setState({
      color: {
        name: element.name,
        code: element.code,
      },
    });
  };

  getArchive = () => {
    this.setState({
      isArchive: !this.state.isArchive,
    });
  };

  setArchive = () => {
    let request = {
      title: this.state.title,
      description: this.state.description,
      color: {
        name: this.state.color.name,
        code: this.state.color.code,
      },
      isPinned: false,
      isTrash: this.props.note.isTrash,
      noteId: this.props.note._id,
      isArchive: true,
    };

    Service.updateNote(request)
      .then((res) => {
        this.props.handleEditClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  setTrash = () => {
    let request = {
      title: this.state.title,
      description: this.state.description,
      color: {
        name: this.state.color.name,
        code: this.state.color.code,
      },
      isPinned: false,
      isTrash: true,
      noteId: this.props.note._id,
      isArchive: false,
    };

    Service.updateNote(request)
      .then((data) => {
        this.props.handleEditClose();
      })
      .catch((error) => {
        console.log("---------->", error);
      });
  };

  editNote = () => {
    let request = {
      title: this.state.title,
      description: this.state.description,
      color: {
        name: this.state.color.name,
        code: this.state.color.code,
      },
      isPinned: this.state.isPinned,
      isTrash: this.props.note.isTrash,
      noteId: this.props.note._id,
      isArchive: this.state.isArchive,
    };
    Service.updateNote(request)
      .then((data) => {
        console.log(data);
        this.props.handleEditClose();
      })
      .catch((error) => {
        console.log("error---------->", error);
      });
  };

  UNSAFE_componentWillMount() {
    this.setState({
      color: {
        name: this.props.note.color.name,
        code: this.props.note.color.code,
      },
      title: this.props.note.title,
      description: this.props.note.description,
      isArchive: this.props.note.isArchive,
      isPinned: this.props.note.isPinned,
    });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Dialog
            open={this.props.openEditNote}
            aria-labelledby="form-dialog-title"
            onClose={this.editNote}
          >
            <Paper
              style={{
                backgroundColor: this.state.color.code,
              }}
            >
              <DialogContent>
                <div className="textfield-icon">
                  <TextField
                    id="title"
                    margin="dense"
                    name="title"
                    value={this.state.title}
                    onChange={(event) => this.input(event)}
                    fullWidth
                  />
                  <div>
                    {this.state.isPinned ? (
                      <IconButton onClick={(event) => this.changePin()}>
                        <img
                          src={require("../assets/unpinned.svg")}
                          alt="unpin_icon"
                        />
                      </IconButton>
                    ) : (
                      <IconButton onClick={(event) => this.changePin()}>
                        <img
                          src={require("../assets/pin_icon.svg")}
                          alt="pin_icon"
                        />
                      </IconButton>
                    )}
                  </div>
                </div>
                <TextField
                  autoFocus
                  id="description"
                  name="description"
                  value={this.state.description}
                  onChange={(event) => this.input(event)}
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <NoteIcon
                  archive={this.props.archive}
                  getColor={this.getColor}
                  getArchive={this.getArchive}
                  setArchive={this.setArchive}
                  setTrash={this.setTrash}
                />
                <Button onClick={this.editNote} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Paper>
          </Dialog>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default EditNoteDialog;
