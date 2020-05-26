import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "./DeleteIcon";
import NoteIcon from "./NoteIcon";
import EditDialog from "./EditNoteDialog";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import "../scss/DisplayNote.scss";
const Service = require("../services/service");

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        width: "inherit",
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
      openEditDialog: false,
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

  handleDelete = (item) => {
    console.log(item);
    let request = {
      _id: this.props.note._id,
      labelId: item._id,
    };
    Service.removeLabelFromNote(request)
      .then((data) => {
        console.log(data);
        this.props.getAllNotes();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  removeCollaborator = (item) => {
    console.log("item--------->", item);
  };

  handleEditDialog = () => {
    this.setState({
      openEditDialog: !this.state.openEditDialog,
    });
  };

  handleEditClose = () => {
    this.setState({
      openEditDialog: !this.state.openEditDialog,
    });
    this.props.getAllNotes();
  };

  UNSAFE_componentWillMount() {
    this.setState({
      isPinned: this.props.note.isPinned,
    });
  }

  render() {
    return (
      <div className={this.props.view ? "list" : "grid"}>
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
              <Typography onClick={() => this.handleEditDialog()}>
                {this.props.note.title}
              </Typography>
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
            <div
              className="displayNote"
              onClick={() => this.handleEditDialog()}
            >
              <Typography onClick={() => this.handleEditDialog()}>
                {this.props.note.description}
              </Typography>
            </div>
            {this.props.note.labels.length !== 0 && (
              <div className="labelsArray">
                {this.props.note.labels.map((item, index) => (
                  <div key={index} className="labelsDiv">
                    <Chip
                      label={item.label}
                      onDelete={() => this.handleDelete(item)}
                    />
                  </div>
                ))}
                {this.props.note.collaborator.length !== 0 && (
                  <div className="collaborator">
                    {this.props.note.collaborator.map((item, index) => (
                      <div key={index}>
                        <IconButton
                          onClick={() => this.removeCollaborator(item)}
                        >
                          {/* <div className="avatarDiv"> */}
                          {this.props.note.collaborator[index].imageUrl
                            .length !== 0 ? (
                            <Avatar alt="Color">
                              {this.props.note.collaborator[index].imageUrl}
                            </Avatar>
                          ) : (
                            <Avatar>
                              <PersonIcon />
                            </Avatar>
                            // <Avatar alt="Color">
                            //   {this.props.note.collaborator[
                            //     index
                            //   ].firstName.charAt(0)}
                            // </Avatar>
                          )}
                          {/* </div> */}
                        </IconButton>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
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
                getAllNotes={this.props.getAllNotes}
                labels={this.props.labels}
                noteLabels={this.props.noteLabels}
                note={this.props.note}
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
            {this.state.openEditDialog !== false && (
              <EditDialog
                note={this.props.note}
                archive={this.props.archive}
                openEditNote={this.state.openEditDialog}
                trash={this.props.trash}
                handleEditClose={this.handleEditClose}
              />
            )}
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default DisplayNote;
