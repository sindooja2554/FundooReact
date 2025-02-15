import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { MuiThemeProvider } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Fundoo from "./Fundoo";
import "../scss/Forgot.scss";
import { createTheme } from '@mui/material/styles';

const Service = require("../services/service");

var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gim;

const theme = createTheme({
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

export class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  input = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submit(event) {
    if (!emailPattern.test(this.state.email)) {
      alert("Email fields are invalid");
      return;
    } else {
      let request = {
        email: this.state.email,
      };
      Service.forgot(request, (error, data) => {
        if (error) {
          console.log(error);
        } else {
          this.setState({
            email: "",
          });
          alert("Reset password link has been sent to registered email");
        }
      });
    }
  }

  render() {
    return (
      <div className="forgotMain">
        <MuiThemeProvider theme={theme}>
          <Card>
            <Fundoo />
            <div className="forgot">
              <b>
                <span className="forgot-password">Forgot Password</span>
              </b>
            </div>
            <form noValidate autoComplete="off">
              <div className="email">
                <TextField
                  required
                  id="outlined-required"
                  label="Email"
                  name="email"
                  variant="outlined"
                  value={this.state.email}
                  onChange={(event) => this.input(event)}
                />
              </div>
              <div className="forget">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={(event) => this.submit(event)}
                >
                  Forgot Password
                </Button>
              </div>
            </form>
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default ForgotPassword;
