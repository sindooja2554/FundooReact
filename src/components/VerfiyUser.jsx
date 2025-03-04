import React, { Component } from "react";
import { ThemeProvider } from '@mui/material/styles';
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Fundoo from "./Fundoo";
import "../scss/Forgot.scss";
import { createTheme } from '@mui/material/styles';

const Service = require("../services/service");

const theme = createTheme({
  overrides: {
    MuiCard: {
      root: {
        width: "350px",
        height: "fit-content",
      },
    },
  },
});

export class VerfiyUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit = () => {
    let request = {
      token: this.props.match.params.token,
      isVerified: true,
    };
    Service.verify(request, (error, data) => {
      if (error) {
        console.log("error------------->", error);
      } else {
        this.props.history.push("/login");
      }
    });
  };

  render() {
    return (
      <div className="forgotMain">
        <ThemeProvider theme={theme}>
          <Card>
            <Fundoo />
            <div className="forgot">
              <b>
                <span className="forgot-password">Verify Your Email</span>
              </b>
            </div>
            <div className="forget">
              <Button
                variant="contained"
                color="primary"
                onClick={(event) => this.submit(event)}
              >
                Verify
              </Button>
            </div>
          </Card>
        </ThemeProvider>
      </div>
    );
  }
}

export default VerfiyUser;
