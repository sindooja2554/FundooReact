import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { MuiThemeProvider } from "@material-ui/core";
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  overrides: {
    MuiIconButton: {
      root: {
        color: "black",
      },
    },
  },
});

export class MoreIcons extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <IconButton onClick={(event) => this.props.setMore(event)}>
            <MoreVertIcon />
          </IconButton>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default MoreIcons;
