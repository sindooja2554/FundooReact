import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import DeleteIcon from "./DeleteIcon";
import NoteIcon from "./NoteIcon";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import "../scss/DisplayNote.scss";
const Service = require("../services/service");

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      outlined: {
        overflow: "hidden",
        width: "250px",
      },
    },
  },
});

export class DisplayNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: {
        name: "white",
        code: "#FFFFFF",
      },
      isPinned: false,
      snack: false,
      message: "",
    };
  }

  setArchive = () => {
    this.setState({
      snack: true,
      message: "Note archived",
    });

    let request = {
      title: this.props.note.title,
      description: this.props.note.description,
      color: {
        name: this.props.note.color.name,
        code: this.props.note.color.code,
      },
      isPinned: false,
      isTrash: this.props.note.isTrash,
      noteId: this.props.note._id,
      isArchive: true,
    };

    Service.updateNote(request)
      .then((res) => {
        this.props.getAllNotes();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  setUnarchive = () => {
    this.setState({
      snack: true,
      message: "Note unarchived",
    });

    let request = {
      title: this.props.note.title,
      description: this.props.note.description,
      color: {
        name: this.props.note.color.name,
        code: this.props.note.color.code,
      },
      isPinned: this.props.note.isPinned,
      isTrash: this.props.note.isTrash,
      noteId: this.props.note._id,
      isArchive: false,
    };

    Service.updateNote(request)
      .then((res) => {
        this.props.getAllNotes();
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
    let request = {
      title: this.props.note.title,
      description: this.props.note.description,
      color: {
        name: element.name,
        code: element.code,
      },
      isPinned: this.props.note.isPinned,
      isTrash: this.props.note.isTrash,
      noteId: this.props.note._id,
      isArchive: this.props.note.isArchive,
    };

    Service.updateNote(request)
      .then((res) => {
        this.props.getAllNotes();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getArchive = () => {
    this.setState({
      isArchive: !this.state.isArchive,
    });
  };

  changePin = () => {
    this.setState({
      isPinned: !this.state.isPinned,
    });

    let request = {
      title: this.props.note.title,
      description: this.props.note.description,
      color: {
        name: this.props.note.color.name,
        code: this.props.note.color.code,
      },
      isPinned: !this.props.note.isPinned,
      isTrash: this.props.note.isTrash,
      noteId: this.props.note._id,
      isArchive: false,
    };

    Service.updateNote(request)
      .then((res) => {
        this.props.getAllNotes();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  setTrash = () => {
    let request = {
      title: this.props.note.title,
      description: this.props.note.description,
      color: {
        name: this.props.note.color.name,
        code: this.props.note.color.code,
      },
      isPinned: false,
      isTrash: true,
      noteId: this.props.note._id,
      isArchive: false,
    };

    Service.updateNote(request)
      .then((data) => {
        this.props.getAllNotes();
      })
      .catch((error) => {
        console.log("---------->", error);
      });
  };

  unSetTrash = () => {
    let request = {
      title: this.props.note.title,
      description: this.props.note.description,
      color: {
        name: this.props.note.color.name,
        code: this.props.note.color.code,
      },
      isPinned: false,
      isTrash: false,
      noteId: this.props.note._id,
      isArchive: false,
    };

    Service.updateNote(request)
      .then((data) => {
        this.props.getAllNotes();
      })
      .catch((error) => {
        console.log("---------->", error);
      });
  };

  deleteNote = () => {
    let request = {
      noteId: this.props.note._id,
    };
    Service.deleteNote(request)
      .then((data) => {
        this.props.getAllNotes();
      })
      .catch((error) => {
        console.log("error-------------->", error);
      });
  };

  handleClose = () => {
    this.setState({
      snack: false,
    });
  };

  UNSAFE_componentWillMount() {
    this.setState({
      isPinned: this.props.note.isPinned,
    });
  }

  render() {
    return (
      <div className="paper">
        <MuiThemeProvider theme={theme}>
          <Paper
            elevation={3}
            variant="outlined"
            style={{
              backgroundColor:
                this.state.color.code === "#FFFFFF"
                  ? this.props.note.color.code
                  : this.state.color.code,
            }}
          >
            <div className="displayNote">
              <Typography>{this.props.note.title}</Typography>
              {this.props.trash !== "Trash" && (
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
              )}
            </div>
            <div className="displayNote">
              <Typography>{this.props.note.description}</Typography>
            </div>
            {this.props.trash === "Trash" ? (
              <DeleteIcon
                restoreTrash={this.unSetTrash}
                deleteNote={this.deleteNote}
              />
            ) : (
              <NoteIcon
                archive={this.props.archive}
                getColor={this.getColor}
                getArchive={this.getArchive}
                setArchive={this.setArchive}
                setUnarchive={this.setUnarchive}
                setTrash={this.setTrash}
              />
            )}
            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              open={this.state.snack}
              autoHideDuration={6000}
              onClose={this.handleClose}
              ContentProps={{
                "aria-describedby": "message-id",
              }}
              message={<span id="message-id">{this.state.message}</span>}
              action={[
                <IconButton
                  key="close"
                  aria-label="close"
                  color="inherit"
                  onClick={this.handleClose}
                >
                  <CloseIcon />
                </IconButton>,
              ]}
            />
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default DisplayNote;
