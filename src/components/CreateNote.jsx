import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import "../scss/Dashboard.scss";

const theme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        width: "500px",
      },
    },
    MuiCard: {
      root: {
        width: "600px",
      },
    },
    MuiInput: {
      root: {
        position: "unset",
      },
    },
  },
});

export class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="note">
        <MuiThemeProvider theme={theme}>
          {this.props.openNoteEditor ? (
            <div className="card-create-note">
              <Card>
                <form noValidate autoComplete="off">
                  <TextField
                    id="standard"
                    placeholder="Title"
                    variant="standard"
                  />
                  <TextField
                    id="standard"
                    placeholder="Take a note..."
                    variant="standard"
                  />
                </form>
              </Card>
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
                <img src={require("../assets/new_list.svg")} alt="new_list" />
                <img
                  src={require("../assets/paint_brush.svg")}
                  alt="paint_brush"
                />
                <img
                  src={require("../assets/image_icon.svg")}
                  alt="image_icon"
                />
              </div>
            </div>
          )}
        </MuiThemeProvider>
      </div>
    );
  }
}

export default CreateNote;
