import React, { Component } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteDialogBox from "./DeleteDialog";
import delete_note from '../assets/delete.svg';
import restore_note from '../assets/restore.svg';

export class DeleteIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDeleteDialog: false,
    };
  }

  setDeleteNote() {
    this.setState({
      openDeleteDialog: true,
    });
  }

  handleDialogClose = () => {
    this.setState({
      openDeleteDialog: false,
    });
  };

  deleteNote = () => {
    this.setState({
      openDeleteDialog: false,
    });
    this.props.deleteNote();
  };

  render() {
    return (
      <div className="delete_icons">
        <IconButton onClick={() => this.setDeleteNote()}>
          <img src={delete_note} alt="delete_note" />
        </IconButton>
        <IconButton onClick={() => this.props.restoreTrash()}>
          <img src={restore_note} alt="restore_note" />
        </IconButton>
        <DeleteDialogBox
          open={this.state.openDeleteDialog}
          handleClose={this.handleDialogClose}
          deleteNote={this.deleteNote}
        />
      </div>
    );
  }
}

export default DeleteIcon;
