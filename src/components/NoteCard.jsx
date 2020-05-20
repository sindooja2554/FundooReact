import React, { Component } from "react";
import CreateNote from "./CreateNote";
import DisplayNote from "./DisplayNote";
import "../scss/NoteCard.scss";
const Service = require("../services/service");

export class NoteCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getAllNotes: [],
      getAllPinned: [],
      getAllLabels: [],
      noteLength: 0,
      pinLength: 0,
    };
  }
  getAllNotes = () => {
    this.setState({
      getAllNotes: [],
      getAllPinned: [],
    });
    Service.getAllNotes((error, data) => {
      if (error) {
        console.log("error------------->", error, data);
      } else {
        let noteCount = 0;
        let pinCount = 0;
        let array = data.data.data.reverse();
        array.forEach((element) => {
          if (element.isPinned !== false && element.isTrash !== true) {
            pinCount++;
            this.state.getAllPinned.push(element);
          } else if (element.isArchive !== true && element.isTrash !== true) {
            noteCount++;
            this.state.getAllNotes.push(element);
          }
        });
        this.setState({
          pinLength: pinCount,
          noteLength: noteCount,
        });
      }
    });
  };

  getAllLabels = () => {
    this.setState({
      getAllLabels: [],
    });
    Service.getAllLabels().then((data) => {
      this.setState({
        getAllLabels: data.data.data,
      });
    });
  };

  UNSAFE_componentWillMount() {
    this.getAllNotes();
    this.getAllLabels();
  }

  render() {
    return (
      <div className="noteCard">
        <CreateNote
          handleToggle={this.props.handleToggle}
          openNoteEditor={this.props.openCreateNote}
          getAllNotes={this.getAllNotes}
          props={this.props}
        />
        {this.state.pinLength > 0 && (
          <div className="label">
            <span>PINNED</span>
          </div>
        )}
        <div className="noteDisplay">
          {this.state.pinLength > 0 && (
            <div className="notesDisplay">
              {this.state.getAllPinned.map((item, index) => (
                <div key={index} className="displayDiv">
                  <DisplayNote
                    note={item}
                    getAllNotes={this.getAllNotes}
                    view={this.props.view}
                    labels={this.state.getAllLabels}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        {this.state.pinLength > 0 && this.state.noteLength > 0 && (
          <div className="label">
            <span>OTHERS</span>
          </div>
        )}

        {this.state.noteLength > 0 && (
          <div className="noteDisplay">
            <div className="notesDisplay">
              {this.state.getAllNotes.map((item, index) => (
                <div key={index} className="displayDiv">
                  <DisplayNote
                    note={item}
                    getAllNotes={this.getAllNotes}
                    view={this.props.view}
                    labels={this.state.getAllLabels}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default NoteCard;
