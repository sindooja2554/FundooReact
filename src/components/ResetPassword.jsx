import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from '@mui/material/styles';
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton } from "@mui/material";
import Fundoo from "./Fundoo";
import { createTheme } from '@mui/material/styles';
import "../scss/Reset.scss";
const Service = require("../services/service");

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

var passwordPattern = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;

export class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      show: false,
    };
  }

  input = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  showPassword(event) {
    this.setState({
      show: !this.state.show,
    });
  }

  submit(event) {
    if (!passwordPattern.test(this.state.password)) {
      alert("Password fields are invalid");
      return;
    } else {
      let request = {
        token: this.props.match.params.token,
        password: this.state.password,
      };
      Service.reset(request, (error, data) => {
        if (error) {
          console.log("Error", error);
        } else {
          this.props.history.push("/login");
        }
      });
    }
  }

  render() {
    return (
      <div className="resetMain">
        <ThemeProvider theme={theme}>
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
                  type={this.state.show ? "text" : "password"}
                  autoComplete="current-password"
                  variant="outlined"
                  value={this.state.password}
                  onChange={(event) => this.input(event)}
                />
                <IconButton onClick={(event) => this.showPassword(event)}>
                  {this.state.show ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
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
        </ThemeProvider>
      </div>
    );
  }
}

export default ResetPassword;
