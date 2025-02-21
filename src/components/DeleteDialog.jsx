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
      styleOverrides: {
        paperWidthSm: {
          width: "430px",
        },
      }
    },
  },
});

export class DeleteDialog extends Component {
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
            {this.props.title ? (
              <DialogTitle id="alert-dialog-title">
                {
                  "We’ll delete this label and remove it from all of your Keep notes. Your notes won’t be deleted."
                }
              </DialogTitle>
            ) : (
              <DialogTitle id="alert-dialog-title">
                {"Delete note forever?"}
              </DialogTitle>
            )}

            <DialogActions>
              <Button onClick={this.props.handleClose} color="primary">
                Cancel
              </Button>
              <Button
                onClick={() => this.props.deleteNote()}
                color="primary"
                autoFocus
              >
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </ThemeProvider>
      </div>
    );
  }
}

export default DeleteDialog;
