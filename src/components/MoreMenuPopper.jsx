import React, { Component } from "react";
import Popper from "@mui/material/Popper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import LabelPopper from "./LabelPopper";
import "../scss/NoteIcon.scss";

export class MoreMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Popper
          className="pop"
          open={this.props.openMenuPopper}
          anchorEl={this.props.anchorEl}
          placement="bottom-start"
        >
          {this.props.title === "Create_Note" ? (
            <List>
              <ListItem button onClick={(event) => this.props.labels(event)}>
                Add Label
              </ListItem>
            </List>
          ) : (
            <List>
              <ListItem button onClick={() => this.props.setTrash()}>
                Delete Note
              </ListItem>
              <ListItem button onClick={(event) => this.props.labels(event)}>
                Add Label
              </ListItem>
            </List>
          )}
        </Popper>
      </div>
    );
  }
}

export default MoreMenu;
