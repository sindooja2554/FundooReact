import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { IconButton, Button } from "@material-ui/core";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Chip from "@material-ui/core/Chip";
import NoteIcon from "./NoteIcon";
import "../scss/Dashboard.scss";
import "../scss/DisplayNote.scss";
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
      labelName: "",
      from: "Create_Note",
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
    this.props.handleToggle(event);
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

  handleChecked = (event, item) => {
    console.log("event.", event.target.checked, item);
    this.state.labels.push(item.label);
    this.setState({
      labels: this.state.labels,
    });
  };

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.label !== prevProps.label) {
      this.state.labels.pop(prevProps.label);
      this.state.labels.push(this.props.label);
      this.setState({
        labels: this.state.labels,
      });
    }
  }

  UNSAFE_componentWillMount() {
    if (this.props.title === "label") {
      this.state.labels.push(this.props.label);
      this.setState({
        labels: this.state.labels,
      });
      console.log(this.props.label);
    }
  }

  render() {
    return (
      <div className={this.props.openNoteEditor ? "notes" : "note"}>
        <MuiThemeProvider theme={theme}>
          {this.props.openNoteEditor ? (
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
                          fullWidth
                        />
                      </div>
                      <div className="textField">
                        <TextField
                          placeholder="Take a note..."
                          variant="standard"
                          name="description"
                          value={this.state.description}
                          onChange={(event) => this.input(event)}
                          fullWidth
                        />
                      </div>
                      {this.state.labels.length !== 0 && (
                        <div className="labelsArray">
                          {this.state.labels.map((item, index) => (
                            <div key={index} className="labelsDiv">
                              <Chip label={item} />
                            </div>
                          ))}
                        </div>
                      )}
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
                      title={this.state.from}
                      handleChecked={this.handleChecked}
                      labels={this.props.labels}
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
                onClick={this.props.handleToggle}
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
