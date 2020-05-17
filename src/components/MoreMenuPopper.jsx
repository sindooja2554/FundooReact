import React, { Component } from "react";
import Popper from "@material-ui/core/Popper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
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
          <List>
            <ListItem button onClick={() => this.props.setTrash()}>
              Delete Note
            </ListItem>
            <ListItem button>Add Label</ListItem>
          </List>
        </Popper>
      </div>
    );
  }
}

export default MoreMenu;
