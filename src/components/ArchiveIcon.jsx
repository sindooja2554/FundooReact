import React, { Component } from "react";
import IconButton from "@mui/material/IconButton";
import UnarchiveImg from '../assets/unarchive.svg';
import ArchiveImg from '../assets/archive.svg';

export class ArchiveIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      archive: false,
    };
  }

  UNSAFE_componentWillMount() {
    if (this.props.archiveIcon === "Archive") {
      this.setState({
        archive: true,
      });
    } else {
      this.setState({
        archive: false,
      });
    }
  }

  render() {
    return (
      <div>
        {/* {this.props.archiveIcon ? ( */}
        {this.state.archive ? (
          <IconButton onClick={(event) => this.props.setUnarchive(event)}>
            <img
              src={UnarchiveImg}
              alt="unarchive_icon"
            />
          </IconButton>
        ) : (
          <IconButton onClick={(event) => this.props.setArchive(event)}>
            <img src={ArchiveImg} alt="archive" />
          </IconButton>
        )}
      </div>
    );
  }
}

export default ArchiveIcon;
