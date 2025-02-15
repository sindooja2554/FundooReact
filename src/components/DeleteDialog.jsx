import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { MuiThemeProvider } from "@material-ui/core";
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  overrides: {
    MuiDialog: {
      paperWidthSm: {
        width: "430px",
      },
    },
  },
});

export class DeleteDialog extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
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
        </MuiThemeProvider>
      </div>
    );
  }
}

export default DeleteDialog;
