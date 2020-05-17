import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { IconButton, Button } from "@material-ui/core";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import NoteIcon from "./NoteIcon";
import "../scss/Dashboard.scss";
const Service = require("../services/service");

const theme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        width: "450px",
      },
    },
    MuiCard: {
      root: {
        width: "600px",
        height: "fit-content",
      },
    },
    MuiInput: {
      root: {
        position: "unset",
      },
    },
    MuiInputBase: {
      root: {
        height: "50px",
      },
    },
    MuiButton: {
      contained: {
        color: "#287AE6",
        box: {
          shadow:
            " 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
        },
        backgroundColor: "white",
      },
    },
  },
});

export class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      remainder: null,
      color: {
        name: "white",
        code: "#FFFFFF",
      },
      isArchive: false,
      labels: [],
      isPinned: false,
      isTrash: false,
    };
  }

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

  changePin = () => {
    this.setState({
      isPinned: !this.state.isPinned,
    });
  };

  input = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  close = (event) => {
    this.props.props.handleToggle(event);
    if (this.state.title !== "" && this.state.description !== "") {
      let request = {
        title: this.state.title,
        description: this.state.description,
        labels: this.state.labels,
        color: {
          name: this.state.color.name,
          code: this.state.color.code,
        },
        isArchive: this.state.isArchive,
        isTrash: this.state.isTrash,
        isPinned: this.state.isPinned,
        remainder: this.state.remainder,
      };
      Service.create_note(request, (error, data) => {
        if (error) {
          console.log(error);
        } else {
          console.log(data);
          this.props.getAllNotes();
          this.setState({
            title: "",
            description: "",
            labels: [],
            color: {
              name: "white",
              code: "#FFFFFF",
            },
            isArchive: false,
            isTrash: false,
            isPinned: false,
            remainder: null,
          });
        }
      });
    }
  };

  render() {
    return (
      <div className={this.props.props.openNoteEditor ? "notes" : "note"}>
        <MuiThemeProvider theme={theme}>
          {this.props.props.openNoteEditor ? (
            <div className="card-create-note">
              <ClickAwayListener onClickAway={(event) => this.close(event)}>
                <Card style={{ backgroundColor: this.state.color.code }}>
                  <div className="form">
                    <form
                      noValidate
                      autoComplete="off"
                      className="formCreateNote"
                    >
                      <div className="textField">
                        <TextField
                          placeholder="Title"
                          variant="standard"
                          name="title"
                          value={this.state.title}
                          onChange={(event) => this.input(event)}
                        />
                      </div>
                      <div className="textField">
                        <TextField
                          placeholder="Take a note..."
                          variant="standard"
                          name="description"
                          value={this.state.description}
                          onChange={(event) => this.input(event)}
                        />
                      </div>
                    </form>
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
                  <div className="iconsDiv">
                    <NoteIcon
                      getColor={this.getColor}
                      getArchive={this.getArchive}
                    />
                    <Button
                      variant="contained"
                      onClick={(event) => this.close(event)}
                    >
                      Close
                    </Button>
                  </div>
                </Card>
              </ClickAwayListener>
            </div>
          ) : (
            <div className="create-note">
              <form
                noValidate
                autoComplete="off"
                onClick={this.props.props.handleToggle}
              >
                <TextField
                  disabled
                  id="outlined-disabled"
                  defaultValue="Take a note..."
                  variant="outlined"
                />
              </form>
              <div className="icons">
                <IconButton>
                  <img src={require("../assets/new_list.svg")} alt="new_list" />
                </IconButton>
                <IconButton>
                  <img
                    src={require("../assets/paint_brush.svg")}
                    alt="paint_brush"
                  />
                </IconButton>
                <IconButton>
                  <img
                    src={require("../assets/image_icon.svg")}
                    alt="image_icon"
                  />
                </IconButton>
              </div>
            </div>
          )}
        </MuiThemeProvider>
      </div>
    );
  }
}

export default CreateNote;
