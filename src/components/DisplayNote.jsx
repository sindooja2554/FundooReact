import React, { Component } from "react";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeProvider } from '@mui/material/styles';
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "./DeleteIcon";
import NoteIcon from "./NoteIcon";
import EditDialog from "./EditNoteDialog";
import { createTheme } from '@mui/material/styles';
import CollaboartorDialog from "./CollaboratorDialog";
import PersonIcon from "@mui/icons-material/Person";
import "../scss/DisplayNote.scss";
import PropTypes from "prop-types";
import unpin_icon from '../assets/unpinned.svg';
import pin_icon from '../assets/pin_icon.svg';
const Service = require("../services/service");

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          width: "inherit",
        },
      }
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
      openCollaboratorDialog: false,
      isHovered: false,
      remainder: null,
    };
  }

  handleHover = () => {
    this.setState({
      isHovered: !this.state.isHovered,
    });
  };

  getReminderData = (date, time) => {
    if (date !== null && time !== null) {
      let newTime = time.toString().slice(16, 25),
        dateFront = date.toString().slice(3, 10);
      let reminder =
        dateFront + "," + date.toString().slice(11, 15) + " " + newTime;

      let request = {
        noteId: this.props.note._id,
        remainder: reminder,
      };
      Service.addReminder(request)
        .then((response) => {
          this.props.getAllNotes();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  handleReminder = () => {
    let request = {
      noteId: this.props.note._id,
      remainder: null,
    };
    Service.removeReminder(request)
      .then((data) => {
        this.props.getAllNotes();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  setCollaborator = () => {
    this.setState({
      openCollaboratorDialog: !this.state.openCollaboratorDialog,
    });
  };

  closeCollaboratorDialog = () => {
    this.setState({
      openCollaboratorDialog: false,
    });
    this.props.getAllNotes();
  };

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
    let request = {
      _id: this.props.note._id,
      labelId: item._id,
    };
    Service.removeLabelFromNote(request)
      .then((data) => {
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
        <ThemeProvider theme={theme}>
          <Paper
            elevation={3}
            variant="outlined"
            draggable
            onDragStart={(e) => this.props.handleDragStart(e, this.props.note)}
            style={{
              backgroundColor:
                this.state.color.code === "#FFFFFF"
                  ? this.props.note.color.code
                  : this.state.color.code,
            }}
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHover}
          >
            <div className="displayNote">
              <Typography onClick={() => this.handleEditDialog()}>
                {this.props.note.title}
              </Typography>
              {this.props.trash !== "Trash" && (
                <div
                  className={
                    this.state.isHovered ? "pinIcons" : "displayBlocked"
                  }
                >
                  {this.state.isPinned ? (
                    <IconButton onClick={(event) => this.changePin()}>
                      <img
                        src={unpin_icon}
                        alt="unpin_icon"
                      />
                    </IconButton>
                  ) : (
                    <IconButton onClick={(event) => this.changePin()}>
                      <img
                        src={pin_icon}
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
            <div className="label-collaborator">
              {this.props.note.remainder !== null && (
                <div className="reminder">
                  <Chip
                    onClick={() => this.handleEditDialog()}
                    label={this.props.note.remainder}
                    onDelete={() => this.handleReminder()}
                  />
                </div>
              )}
              {this.props.note.labels.length !== 0 && (
                <div className="labelsArray">
                  {this.props.note.labels.map((item, index) => (
                    <div key={index} className="labelsDiv">
                      <Chip
                        onClick={() => this.handleEditDialog()}
                        label={item.label}
                        onDelete={() => this.handleDelete(item)}
                      />
                    </div>
                  ))}
                </div>
              )}
              {this.props.note.collaborator.length !== 0 && (
                <div className="collaborator">
                  {this.props.note.collaborator.map((item, index) => (
                    <div key={index}>
                      <IconButton onClick={() => this.setCollaborator(item)}>
                        {item.imageUrl.length !== 0 ? (
                          <Avatar alt="Color" src={item.imageUrl} />
                        ) : (
                          <div>
                            {item.firstName !== undefined ? (
                              <Avatar>{item.firstName.charAt(0)}</Avatar>
                            ) : (
                              <Avatar>
                                <PersonIcon />
                              </Avatar>
                            )}
                          </div>
                        )}
                      </IconButton>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div
              className={this.state.isHovered ? "NoteIcon" : "noteDisplayBlock"}
            >
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
                  getReminder={this.getReminderData}
                />
              )}
            </div>
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
                labels={this.props.note.labels}
                createLabels={this.props.createLabels}
                trash={this.props.trash}
                handleEditClose={this.handleEditClose}
              />
            )}
            {this.state.openCollaboratorDialog === true && (
              <CollaboartorDialog
                openCollaboratorDialog={this.state.openCollaboratorDialog}
                note={this.props.note}
                closeCollaboratorDialog={this.closeCollaboratorDialog}
              />
            )}
          </Paper>
        </ThemeProvider>
      </div>
    );
  }
}

DisplayNote.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    remainder: PropTypes.string,
    isPinned: PropTypes.bool,
    isArchive: PropTypes.bool,
    isTrash: PropTypes.bool,
    labels: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
      })
    ),
    collaborator: PropTypes.arrayOf(
      PropTypes.shape({
        email: PropTypes.string,
      })
    ),
  }),
};

export default DisplayNote;
