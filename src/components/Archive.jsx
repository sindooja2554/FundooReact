import React, { Component } from "react";
import CreateNote from "./CreateNote";
import DisplayNote from "./DisplayNote";
import Appbar from "./Appbar";
import Drawer from "./Drawer";
import "../scss/NoteCard.scss";
import "../scss/Dashboard.scss";
const Service = require("../services/service");

export class Archive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getAllArchive: [],
      archiveLength: 0,
      openDrawer: true,
      openCreateNote: false,
      list: false,
      title: "Archive",
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

  getAllArchive = () => {
    let archiveCount = 0;
    this.setState({
      getAllArchive: [],
    });
    Service.getAllNotes((error, data) => {
      if (error) {
        console.log(error);
      } else {
        data.data.data.forEach((element) => {
          if (element.isArchive === true && element.isTrash !== true) {
            archiveCount++;
            this.state.getAllArchive.push(element);
            this.setState({
              archiveLength: archiveCount,
            });
          }
        });
      }
    });
  };

  UNSAFE_componentWillMount() {
    this.getAllArchive();
  }

  render() {
    return (
      <div className="dashboard">
        <div className="appbar">
          <Appbar handleDrawer={this.handleDrawerOpen} props={this.props} />
        </div>
        <div className="drawer-create-note">
          <div className={this.state.openDrawer ? "drawer" : "drawers"}>
            <Drawer getValue={this.state.openDrawer} props={this.props} />
          </div>
          <div className={this.state.openDrawer ? "Note" : "Notes"}>
            <div className="noteCard">
              <CreateNote
                handleToggle={this.props.handleToggle}
                openNoteEditor={this.props.openCreateNote}
                getAllNotes={this.getAllArchive}
                props={this.props}
              />

              <div className="noteDisplay">
                {this.state.archiveLength > 0 && (
                  <div className="notesDisplay">
                    {this.state.getAllArchive.map((item, index) => (
                      <div key={index} className="displayDiv">
                        <DisplayNote
                          note={item}
                          archive={this.state.title}
                          getAllNotes={this.getAllArchive}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Archive;
