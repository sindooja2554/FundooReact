import React, { Component } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiDialog: {
      styleOverrides:{
        paperWidthSm: {
          width: "430px",
        },
      }
    },
  },
});

export class DiscardChanges extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Dialog
            open={this.props.open}
            onClose={this.props.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Discard changes? Your changes won't saved"}
            </DialogTitle>

            <DialogActions>
              <Button onClick={this.props.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.props.discard} color="primary" autoFocus>
                Discard
              </Button>
            </DialogActions>
          </Dialog>
        </ThemeProvider>
      </div>
    );
  }
}

export default DiscardChanges;
