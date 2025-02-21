import React from "react";
import { shallow } from "enzyme";
import DiscardChanges from "../DiscardChanges";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

describe("<Fundoo /> Component", () => {
  let props = {
    open: true,
  };
  it("renders without crashing", () => {
    shallow(<DiscardChanges {...props} />);
  });

  it("Should have a Dialog", () => {
    const component = shallow(<DiscardChanges {...props} />);
    const wrapper = component.find(Dialog);
    expect(wrapper.length).toBe(1);
  });

  it("Should have a DialogTitle", () => {
    const component = shallow(<DiscardChanges {...props} />);
    const wrapper = component.find(DialogTitle);
    expect(wrapper.length).toBe(1);
  });

  it("Should have a DialogAction", () => {
    const component = shallow(<DiscardChanges {...props} />);
    const wrapper = component.find(DialogActions);
    expect(wrapper.length).toBe(1);
  });

  it("Should have a Button", () => {
    const component = shallow(<DiscardChanges {...props} />);
    const wrapper = component.find(Button);
    expect(wrapper.length).toBe(2);
  });
});
