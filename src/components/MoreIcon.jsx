import React, { Component } from "react";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ThemeProvider } from '@mui/material/styles';
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
        <ThemeProvider theme={theme}>
          <IconButton onClick={(event) => this.props.setMore(event)}>
            <MoreVertIcon />
          </IconButton>
        </ThemeProvider>
      </div>
    );
  }
}

export default MoreIcons;
