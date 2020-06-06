import React from "react";
import { shallow } from "enzyme";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import { Button, IconButton } from "@material-ui/core";
import EditLabelDialog from "./EditLabelDialog";

describe("<EditLabelDialog /> Component", () => {
  let props = {
    openEditLabel: true,
    getLabels: [
      {
        label: "hbcjd",
      },
      {
        label: "skslmcml",
      },
    ],
  };
  it("renders without crashing", () => {
    shallow(<EditLabelDialog {...props} />);
  });

  it("Should have a Dialog", () => {
    const component = shallow(<EditLabelDialog {...props} />);
    const wrapper = component.find(Dialog);
    expect(wrapper.length).toBe(1);
  });

  it("Should have a DialogTitle", () => {
    const component = shallow(<EditLabelDialog {...props} />);
    const wrapper = component.find(DialogTitle);
    expect(wrapper.length).toBe(1);
  });

  it("Should have a DialogContent", () => {
    const component = shallow(<EditLabelDialog {...props} />);
    const wrapper = component.find(DialogContent);
    expect(wrapper.length).toBe(1);
  });

  it("Should have a TextField", () => {
    const component = shallow(<EditLabelDialog {...props} />);
    const wrapper = component.find(TextField);
    expect(wrapper.length).toBe(3);
  });

  it("Should have a IconButton", () => {
    const component = shallow(<EditLabelDialog {...props} />);
    const wrapper = component.find(IconButton);
    expect(wrapper.length).toBe(5);
  });

  it("Should have only 1 class with same name", () => {
    const component = shallow(<EditLabelDialog {...props} />);
    const wrapper = component.find(".disabledDiv");
    expect(wrapper.length).toBe(5);
  });

  it("Should have a DialogAction", () => {
    const component = shallow(<EditLabelDialog {...props} />);
    const wrapper = component.find(DialogActions);
    expect(wrapper.length).toBe(1);
  });

  it("Should have a Button", () => {
    const component = shallow(<EditLabelDialog {...props} />);
    const wrapper = component.find(Button);
    expect(wrapper.length).toBe(1);
  });
});
