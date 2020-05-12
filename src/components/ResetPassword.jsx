import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Fundoo from "./Fundoo";
import "../scss/Reset.scss";

const theme = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        width: "350px",
        height: "fit-content",
      },
    },
    MuiInputBase: {
      input: {
        box: { shadow: "none" },
        width: "100%",
      },
    },
    MuiButton: {
      containedPrimary: {
        color: "#fff",
        backgroundColor: "#287AE6",
      },
    },
  },
});

var passwordPattern = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;

export class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
    };
  }

  input = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submit(event) {
    if (!passwordPattern.test(this.state.password)) {
      alert("Password fields are invalid");
      return;
    } else {
      console.log("values in state-------------->", this.state);
    }
  }

  render() {
    return (
      <div className="resetMain">
        <MuiThemeProvider theme={theme}>
          <Card>
            <Fundoo />
            <div className="reset">
              <b>
                <span className="reset-password">Reset Password</span>
              </b>
            </div>
            <form noValidate autoComplete="off">
              <div className="password">
                <TextField
                  required
                  id="outlined-password-input"
                  label="Password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                  value={this.state.password}
                  onChange={(event) => this.input(event)}
                />
              </div>
              <div className="resetpassword">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={(event) => this.submit(event)}
                >
                  Reset Password
                </Button>
              </div>
            </form>
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default ResetPassword;
