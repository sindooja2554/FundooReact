import React, { Component } from "react";
import IconButton from "@mui/material/IconButton";
import CollaboratorImg from '../assets/collaborator.svg'

export class CollaboratorIcon extends Component {
  render() {
    return (
      <div>
        <IconButton onClick={() => this.props.collaborator()}>
          <img src={CollaboratorImg} alt="collaborator" />
        </IconButton>
      </div>
    );
  }
}

export default CollaboratorIcon;
