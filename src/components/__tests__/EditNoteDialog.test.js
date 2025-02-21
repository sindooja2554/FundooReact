import React from "react";
import { shallow } from "enzyme";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import { Button, IconButton } from "@mui/material";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import EditNoteDialog from "../EditNoteDialog";

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
