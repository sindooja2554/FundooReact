import React, { Component } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ReminderIcon from "./ReminderIcon";
import ColorIcon from "./ColorIcon";
import ArchiveIcon from "./ArchiveIcon";
import MoreIcon from "./MoreIcon";
import ColorPopper from "./ColorPopper";
import MoreMenu from "./MoreMenuPopper";
import ReminderPopper from "./RemindPopper";
import "../scss/NoteIcon.scss";

export class NoteIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openColorPopper: false,
      openMenuPopper: false,
      openRemindPopper: false,
      archive: false,
      anchorEl: null,
    };
  }

  handleClickAway = (event) => {
    this.setState({
      openMenuPopper: false,
      openColorPopper: false,
      anchorEl: null,
    });
  };

  changeColour = (event) => {
    this.setState({
      openColorPopper: !this.state.openColorPopper,
      anchorEl: event.currentTarget,
    });
  };

  closeColourPopper = () => {
    this.setState({
      openColorPopper: false,
      anchorEl: null,
    });
  };

  loadColor = (element) => {
    this.props.getColor(element);
  };

  changeArchive = (event) => {
    this.setState({
      archive: !this.state.archive,
    });
    this.props.getArchive(event);
    this.props.setArchive(event);
  };

  openMoreMenuPopper = (event) => {
    this.setState({
      openMenuPopper: !this.state.openMenuPopper,
      anchorEl: event.currentTarget,
    });
  };

  openRemindPopper = (event) => {
    this.setState({
      openRemindPopper: !this.state.openRemindPopper,
      anchorEl: event.currentTarget,
    });
  };

  render() {
    return (
      <div>
        <ClickAwayListener onClickAway={this.handleClickAway}>
          <div className="note_icons">
            <ReminderIcon setReminder={this.openRemindPopper} />
            <ReminderPopper
              openRemindPopper={this.state.openRemindPopper}
              anchorEl={this.state.anchorEl}
            />
            <ColorIcon setColor={this.changeColour} />
            <ColorPopper
              openColorPopper={this.state.openColorPopper}
              anchorEl={this.state.anchorEl}
              closeColourPopper={this.closeColourPopper}
              props={this.loadColor}
            />
            <ArchiveIcon
              archiveIcon={this.props.archive}
              archive={this.state.archive}
              setArchive={this.changeArchive}
              setUnarchive={this.props.setUnarchive}
            />
            <MoreIcon setMore={this.openMoreMenuPopper} />
            <MoreMenu
              setTrash={this.props.setTrash}
              openMenuPopper={this.state.openMenuPopper}
              anchorEl={this.state.anchorEl}
            />
          </div>
        </ClickAwayListener>
      </div>
    );
  }
}

export default NoteIcon;
