import React from "react";
import { shallow } from "enzyme";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import { Button } from "@material-ui/core";
import NoteIcon from "../NoteIcon";
import CreateNote from "../CreateNote";

describe("<Fundoo /> Component", () => {
  it("renders without crashing", () => {
    shallow(<CreateNote />);
  });

  it("Should have only 1 class with same name", () => {
    let props = {
      openNoteEditor: false,
    };
    const component = shallow(<CreateNote props={props} />);
    const wrapper = component.find(".note");
    expect(wrapper.length).toBe(1);
  });

  it("Should have only 1 class with same name", () => {
    let props = {
      openNoteEditor: true,
    };
    const component = shallow(<CreateNote {...props} />);
    const wrapper = component.find(".card-create-note");
    console.log(wrapper.length);
    expect(wrapper.length).toBe(1);
  });

  it("Should have only 1 class with same name", () => {
    let props = {
      openNoteEditor: true,
    };
    const component = shallow(<CreateNote {...props} />);
    const wrapper = component.find(".card");
    expect(wrapper.length).toBe(1);
  });

  it("Should have Card", () => {
    let props = {
      openNoteEditor: true,
    };
    const component = shallow(<CreateNote {...props} />);
    const wrapper = component.find(Card);
    expect(wrapper.length).toBe(1);
  });

  it("Should have only 1 class with same name", () => {
    let props = {
      openNoteEditor: true,
    };
    const component = shallow(<CreateNote {...props} />);
    const wrapper = component.find(".formInput");
    expect(wrapper.length).toBe(1);
  });

  it("Should have only 1 class with same name", () => {
    let props = {
      openNoteEditor: true,
    };
    const component = shallow(<CreateNote {...props} />);
    const wrapper = component.find(".formCreateNote");
    expect(wrapper.length).toBe(1);
  });

  it("Should have only 1 class with same name", () => {
    let props = {
      openNoteEditor: true,
    };
    const component = shallow(<CreateNote {...props} />);
    const wrapper = component.find(".textField");
    expect(wrapper.length).toBe(2);
  });

  it("Should have TextField", () => {
    let props = {
      openNoteEditor: true,
    };
    const component = shallow(<CreateNote {...props} />);
    const wrapper = component.find(TextField);
    expect(wrapper.length).toBe(2);
  });

  it("Should have only 1 class with same name", () => {
    let props = {
      openNoteEditor: true,
    };
    const component = shallow(<CreateNote {...props} />);
    const wrapper = component.find(".label-collaborator");
    expect(wrapper.length).toBe(1);
  });

  it("Should have only 1 class with same name", () => {
    let props = {
      openNoteEditor: true,
    };
    const component = shallow(<CreateNote {...props} />);
    const wrapper = component.find(".iconsDiv");
    expect(wrapper.length).toBe(1);
  });

  it("Should render note icon component", () => {
    let props = {
      openNoteEditor: true,
    };
    const component = shallow(<CreateNote {...props} />);
    const wrapper = component.find(NoteIcon);
    expect(wrapper.length).toBe(1);
  });

  it("Should have Button", () => {
    let props = {
      openNoteEditor: true,
    };
    const component = shallow(<CreateNote {...props} />);
    const wrapper = component.find(Button);
    expect(wrapper.length).toBe(1);
  });
});
