import React, { Component } from "react";
import Appbar from "./Appbar";
import Drawer from "./Drawer";
import CreateNote from "./CreateNote";
import "../scss/Dashboard.scss";

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDrawer: true,
      openCreateNote: false,
    };
  }

  handleDrawerOpen = (event) => {
    this.setState({
      openDrawer: !this.state.openDrawer,
    });
  };

  handleCreateNote = (event) => {
    this.setState({
      openCreateNote: !this.state.openCreateNote,
    });
  };

  render() {
    return (
      <div className="dashboard">
        <div className="appbar">
          <Appbar handleDrawer={this.handleDrawerOpen} props={this.props} />
        </div>
        <div className="drawer-create-note">
          <div className="drawer">
            <Drawer getValue={this.state.openDrawer} props={this.props} />
          </div>
          <div className="createNote">
            <CreateNote
              handleToggle={this.handleCreateNote}
              openNoteEditor={this.state.openCreateNote}
              props={this.props}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
