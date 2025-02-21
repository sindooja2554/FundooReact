import React, { Component } from "react";
import IconButton from "@mui/material/IconButton";
import reminder from '../assets/reminder.svg';

export class ReminderIcon extends Component {
  render() {
    return (
      <div>
        <IconButton onClick={(event) => this.props.setReminder(event)}>
          <img src={reminder} alt="reminder" />
        </IconButton>
      </div>
    );
  }
}

export default ReminderIcon;
