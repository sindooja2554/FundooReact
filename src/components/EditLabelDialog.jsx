import React, { Component } from "react";
// import { ThemeProvider } from '@mui/material/styles';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import DoneIcon from "@mui/icons-material/Done";
import CreateIcon from "@mui/icons-material/Create";
import "../scss/NoteIcon.scss";
import DeleteDialog from "./DeleteDialog";
import deleteImg from '../assets/delete.svg';
const Service = require("../services/service");

export class EditLabelDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "",
      labelName: "",
      disabled: false,
      getLabels: [],
      checkId: null,
      exist: false,
      openDeleteDialog: false,
      title: "Label",
      deleteId: "",
    };
  }

  input = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  changeValue(event) {
    this.setState({
      labelName: event.target.value,
    });
  }

  focusInput = (component) => {
    if (component) {
      component.focus();
    }
  };

  handleDisabled = () => {
    this.setState({
      disabled: false,
    });
  };

  handleDisable = () => {
    this.setState({
      disabled: true,
      label: "",
    });
  };

  handleDialogClose = () => {
    this.setState({
      openDeleteDialog: false,
    });
  };

  changeLabel = (item) => {
    this.setState({
      checkId: item._id,
      labelName: item.name,
    });
  };

  createLabel = () => {
    this.handleDisable();
    let request = {
      label: this.state.label,
    };
    this.state.getLabels.forEach((element) => {
      if (element.name === request.label) {
        this.setState({
          exist: true,
          label: "",
        });
      }
    });
    if (this.state.exist === false) {
      Service.createLabel(request)
        .then((data) => {
          this.state({
            label: "",
          });
          this.state.getLabels.push(request.label);
          this.props.getAllLabels();
        })
        .catch((error) => {
          console.log("error------------->", error);
        });
    }
  };

  editLabel = (item) => {
    this.setState({
      checkId: "",
    });
    let request = {
      _id: item._id,
      label: this.state.labelName,
    };
    Service.updateLabel(request)
      .then((data) => {
        this.props.getAllLabels();
        this.state.getLabels.push(request.label);
      })
      .catch((error) => {
        console.log("error---------------->", error);
      });
  };

  delete = (item) => {
    this.setState({
      openDeleteDialog: true,
      deleteId: item._id,
    });
  };

  deleteLabel = () => {
    let request = {
      _id: this.state.deleteId,
    };
    Service.deleteLabel(request)
      .then((data) => {
        for (let i = 0; i < this.state.getLabels.length; i++) {
          if (this.state.getLabels[i]._id === request._id) {
            this.state.getLabels.splice(i, 1);
            this.props.getAllLabels();
            this.handleDialogClose();
          }
        }
      })
      .catch((error) => {
        console.log("error----------------->", error);
      });
  };

  UNSAFE_componentWillMount() {
    this.setState({
      getLabels: this.props.getLabels,
    });
  }

  render() {
    return (
      <div>
        <Dialog
          open={this.props.openEditLabel}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit Labels</DialogTitle>
          <DialogContent>
            {this.state.disabled ? (
              <div className="disabledDiv">
                <IconButton onClick={() => this.handleDisabled()}>
                  <AddIcon />
                </IconButton>
                <TextField
                  disabled
                  id="standard-disabled"
                  placeholder="Create new label"
                  name="label"
                  value={this.state.label}
                  fullWidth
                  onClick={() => this.handleDisabled()}
                />
              </div>
            ) : (
              <div className="disabledDiv">
                <IconButton onClick={() => this.handleDisable()}>
                  <ClearIcon />
                </IconButton>
                <TextField
                  autoFocus
                  margin="dense"
                  id="label"
                  placeholder="Create new label"
                  name="label"
                  value={this.state.label}
                  onChange={(event) => this.input(event)}
                  fullWidth
                />
                <IconButton onClick={() => this.createLabel()}>
                  <DoneIcon />
                </IconButton>
              </div>
            )}
            {this.state.getLabels.map((item, index) => (
              <div className="disabledDiv" key={index}>
                {this.state.checkId !== item._id ? (
                  <div className="disabledDiv" key={index}>
                    <IconButton onClick={() => this.delete(item)}>
                      <img src={deleteImg} alt="delete" />
                    </IconButton>
                    <TextField
                      disabled
                      id={index + "standard-disabled"}
                      defaultValue={item.label}
                      fullWidth
                      onClick={() => this.changeLabel(item)}
                    />
                    <IconButton onClick={() => this.changeLabel(index)}>
                      <CreateIcon />
                    </IconButton>
                  </div>
                ) : (
                  <div className="disabledDiv" key={index}>
                    <IconButton onClick={() => this.delete(item)}>
                      <img src={require("../assets/delete.svg")} alt="delete" />
                    </IconButton>
                    <TextField
                      autoFocus
                      margin="dense"
                      id={index + "standard-read-only-input"}
                      name="label"
                      ref={this.focusInput}
                      value={this.state.labelName}
                      fullWidth
                      onChange={(event) => this.changeValue(event)}
                    />
                    <IconButton onClick={() => this.editLabel(item)}>
                      <DoneIcon />
                    </IconButton>
                  </div>
                )}
              </div>
            ))}
            {this.state.openDeleteDialog === true && (
              <DeleteDialog
                title={this.state.title}
                open={this.state.openDeleteDialog}
                handleClose={this.handleDialogClose}
                deleteNote={this.deleteLabel}
              />
            )}
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => this.props.handleEditLabelsClose()}
              color="primary"
            >
              Done
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default EditLabelDialog;
