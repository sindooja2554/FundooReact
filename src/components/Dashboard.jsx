import React, { Component } from "react";
import Appbar from "./Appbar";
import Drawer from "./Drawer";
import NoteCard from "./NoteCard";
import "../scss/Dashboard.scss";

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDrawer: true,
      openCreateNote: false,
      getAllLabels: [],
      view: false,
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

  showView = () => {
    console.log("view---------------->", !this.state.view);
    this.setState({
      view: !this.state.view,
    });
  };

  render() {
    return (
      <div className="dashboard">
        <div className="appbar">
          <Appbar
            handleDrawer={this.handleDrawerOpen}
            showView={this.showView}
            props={this.props}
          />
        </div>
        <div className="drawer-create-note">
          <div className={this.state.openDrawer ? "drawer" : "drawers"}>
            <Drawer getValue={this.state.openDrawer} props={this.props} />
          </div>
          <div className={this.state.openDrawer ? "Note" : "Notes"}>
            <NoteCard
              handleToggle={this.handleCreateNote}
              openNoteEditor={this.state.openCreateNote}
              view={this.state.view}
              props={this.props}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
