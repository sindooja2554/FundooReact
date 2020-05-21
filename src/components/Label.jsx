import React, { Component } from "react";
// import Avatar from "@material-ui/core/Avatar";
import CreateNote from "./CreateNote";
import Appbar from "./Appbar";
import Drawer from "./Drawer";
import DisplayNote from "./DisplayNote";
import "../scss/NoteCard.scss";
import "../scss/Dashboard.scss";
const Service = require("../services/service");

export class Label extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDrawer: true,
      openCreateNote: false,
      view: false,
      getAllNotesWithLabels: [],
      title: this.props.match.params.key,
      from: "label",
    };
  }

  handleDrawerOpen = (event) => {
    this.setState({
      openDrawer: !this.state.openDrawer,
    });
  };

  handleCreateNote = () => {
    this.setState({
      openCreateNote: !this.state.openCreateNote,
    });
  };

  getAllNotesWithLabels = () => {
    this.setState({
      title: this.props.match.params.key,
      getAllNotesWithLabels: [],
      from: "label",
    });
    Service.getAllNotes((error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data.data.data);
        let count = 0;
        data.data.data.forEach((element) => {
          count++;
          if (element.labels.length !== 0) {
            element.labels.forEach((key) => {
              if (key.label === this.props.match.params.key) {
                this.state.getAllNotesWithLabels.push(element);
              }
            });
          }
        });
        if (data.data.data.length === count) {
          this.setState({
            getAllNotesWithLabels: this.state.getAllNotesWithLabels,
          });
        }
      }
    });
  };

  showView = () => {
    this.setState({
      view: !this.state.view,
    });
  };

  componentDidUpdate() {
    if (this.props.match.params.key !== this.state.title) {
      this.getAllNotesWithLabels();
    }
  }

  UNSAFE_componentWillMount() {
    this.getAllNotesWithLabels();
  }

  render() {
    return (
      <div className="dashboard">
        <div className="appbar">
          <Appbar
            handleDrawer={this.handleDrawerOpen}
            props={this.props}
            showView={this.showView}
          />
        </div>
        <div className="drawer-create-note">
          <div className={this.state.openDrawer ? "drawer" : "drawers"}>
            <Drawer getValue={this.state.openDrawer} props={this.props} />
          </div>
          <div
            className={this.state.openDrawer ? "outerDrawer" : "outerDrawers"}
          >
            <div className="hold">
              <div className="create-note-label">
                <CreateNote
                  handleToggle={this.handleCreateNote}
                  openNoteEditor={this.state.openCreateNote}
                  title={this.state.from}
                  label={this.state.title}
                  props={this.props}
                />
              </div>
              <div className="labelDisplay">
                {this.state.getAllNotesWithLabels.length === 0 ? null : ( // </div> //   </Avatar> //     /> //       width="50" //       height="50" //       alt="label" //       src={require("../assets/label.svg")} //     <img //   <Avatar variant="square"> // <div className="avatar">
                  <div className="deleteDisplay">
                    {this.state.getAllNotesWithLabels.map((item, index) => (
                      <div key={index} className="displayDiv">
                        <DisplayNote
                          note={item}
                          view={this.state.view}
                          archive={this.state.title}
                          getAllNotes={this.getAllNotesWithLabels}
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

export default Label;
