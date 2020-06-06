import React from "react";
import { shallow } from "enzyme";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import { Button, IconButton } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import EditNoteDialog from "./EditNoteDialog";

describe("<EditLabelDialog /> Component", () => {
  let props = {
    openEditLabel: true,
    note: {
      color: {
        name: "white",
        code: "#FFFFFF",
      },
      title: "csdjcbjsdnc",
      description: "asncdns jdsnscndskc kdsmckl",
      isArchive: false,
      isPinned: false,
      labels: [{ label: "Sdslmlsm" }],
      collaborator: [
        {
          imageUrl: "",
          firstName: "",
        },
      ],
      reminder: "May 28, 12:00:00",
    },
    openEditNote: true,
  };
  it("renders without crashing", () => {
    shallow(<EditNoteDialog {...props} />);
  });

  it("Should have a Dialog", () => {
    const component = shallow(<EditNoteDialog {...props} />);
    const wrapper = component.find(Dialog);
    expect(wrapper.length).toBe(1);
  });

  it("Should have a paper", () => {
    const component = shallow(<EditNoteDialog {...props} />);
    const wrapper = component.find(Paper);
    expect(wrapper.length).toBe(1);
  });

  it("Should have a DailogContent", () => {
    const component = shallow(<EditNoteDialog {...props} />);
    const wrapper = component.find(DialogContent);
    expect(wrapper.length).toBe(1);
  });

  it("Should have a TextField", () => {
    const component = shallow(<EditNoteDialog {...props} />);
    const wrapper = component.find(TextField);
    expect(wrapper.length).toBe(2);
  });

  it("Should have a IconButton", () => {
    const component = shallow(<EditNoteDialog {...props} />);
    const wrapper = component.find(IconButton);
    expect(wrapper.length).toBe(2);
  });

  it("Should have a Chip", () => {
    const component = shallow(<EditNoteDialog {...props} />);
    const wrapper = component.find(Chip);
    expect(wrapper.length).toBe(2);
  });

  it("Should have a DialogActions", () => {
    const component = shallow(<EditNoteDialog {...props} />);
    const wrapper = component.find(DialogActions);
    expect(wrapper.length).toBe(1);
  });

  it("Should have a button", () => {
    const component = shallow(<EditNoteDialog {...props} />);
    const wrapper = component.find(Button);
    expect(wrapper.length).toBe(1);
  });
});
