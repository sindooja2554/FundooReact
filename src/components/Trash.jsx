import React, { Component } from "react";
import DisplayNote from "./DisplayNote";
import Appbar from "./Appbar";
import Drawer from "./Drawer";
import "../scss/NoteCard.scss";
import "../scss/Dashboard.scss";
const Service = require("../services/service");

export class Trash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getAllTrash: [],
      trashLength: 0,
      openDrawer: true,
      openCreateNote: false,
      title: "Trash",
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

  getAllTrash = () => {
    this.setState({
      getAllTrash: [],
    });
    Service.getAllNotes((error, data) => {
      if (error) {
        console.log("error------------->", error, data);
      } else {
        let trashCount = 0;
        data.data.data.forEach((element) => {
          if (element.isTrash === true) {
            trashCount++;
            this.state.getAllTrash.push(element);
          }
        });
        this.setState({
          trashLength: trashCount,
        });
      }
    });
  };

  UNSAFE_componentWillMount() {
    this.getAllTrash();
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

          <div className="noteDisplay">
            {this.state.trashLength > 0 && (
              <div className="deleteDisplay">
                {this.state.getAllTrash.map((item, index) => (
                  <div key={index} className="displayDiv">
                    <DisplayNote
                      note={item}
                      trash={this.state.title}
                      getAllNotes={this.getAllTrash}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Trash;
