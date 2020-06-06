import React from "react";
import { shallow } from "enzyme";
import { IconButton, Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import ProfileUploadDialog from "./ProfileUploadDialog";

describe("<ProfileUploadDialog /> Component", () => {
  let props = {
    open: true,
  };
  it("renders without crashing", () => {
    shallow(<ProfileUploadDialog {...props} />);
  });

  it("Should have a Dialog", () => {
    const component = shallow(<ProfileUploadDialog {...props} />);
    const wrapper = component.find(Dialog);
    expect(wrapper.length).toBe(1);
  });

  it("Should have a IconButton", () => {
    const component = shallow(<ProfileUploadDialog {...props} />);
    const wrapper = component.find(IconButton);
    expect(wrapper.length).toBe(1);
  });

  it("Should have a DialogContent", () => {
    const component = shallow(<ProfileUploadDialog {...props} />);
    const wrapper = component.find(DialogContent);
    expect(wrapper.length).toBe(1);
  });

  it("Should have a DialogActions", () => {
    const component = shallow(<ProfileUploadDialog {...props} />);
    const wrapper = component.find(DialogActions);
    expect(wrapper.length).toBe(1);
  });

  it("Should have a Button", () => {
    const component = shallow(<ProfileUploadDialog {...props} />);
    const wrapper = component.find(Button);
    expect(wrapper.length).toBe(2);
  });
});
