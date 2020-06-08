import React from "react";
import { shallow } from "enzyme";
import NoteIcon from "../NoteIcon";
import ReminderIcon from "../ReminderIcon";
import CollaboratorIcon from "../CollaboratorIcon";
import ColorIcon from "../ColorIcon";
import ArchiveIcon from "../ArchiveIcon";
import MoreIcon from "../MoreIcon";

describe("<NoteIcon /> Component", () => {
  it("renders without crashing", () => {
    shallow(<NoteIcon />);
  });

  it("Should have only 1 class with same name", () => {
    const component = shallow(<NoteIcon />);
    const wrapper = component.find(".note_icons");
    expect(wrapper.length).toBe(1);
  });

  it("Should have ReminderIcon", () => {
    const component = shallow(<NoteIcon />);
    const wrapper = component.find(ReminderIcon);
    expect(wrapper.length).toBe(1);
  });

  it("Should have CollaboratorIcon", () => {
    const component = shallow(<NoteIcon />);
    const wrapper = component.find(CollaboratorIcon);
    expect(wrapper.length).toBe(1);
  });

  it("Should have ColorIcon", () => {
    const component = shallow(<NoteIcon />);
    const wrapper = component.find(ColorIcon);
    expect(wrapper.length).toBe(1);
  });

  it("Should have ArchiveIcon", () => {
    const component = shallow(<NoteIcon />);
    const wrapper = component.find(ArchiveIcon);
    expect(wrapper.length).toBe(1);
  });

  it("Should have MoreIcon", () => {
    const component = shallow(<NoteIcon />);
    const wrapper = component.find(MoreIcon);
    expect(wrapper.length).toBe(1);
  });
});
