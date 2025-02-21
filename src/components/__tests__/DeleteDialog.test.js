import React from "react";
import { shallow } from "enzyme";
import DeleteDialog from "../DeleteDialog";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

describe("<Fundoo /> Component", () => {
  let props = {
    open: true,
  };
  it("renders without crashing", () => {
    shallow(<DeleteDialog {...props} />);
  });

  it("Should have a Dialog", () => {
    const component = shallow(<DeleteDialog {...props} />);
    const wrapper = component.find(Dialog);
    expect(wrapper.length).toBe(1);
  });

  it("Should have a DialogTitle", () => {
    const component = shallow(<DeleteDialog {...props} />);
    const wrapper = component.find(DialogTitle);
    expect(wrapper.length).toBe(1);
  });

  it("Should have a DialogAction", () => {
    const component = shallow(<DeleteDialog {...props} />);
    const wrapper = component.find(DialogActions);
    expect(wrapper.length).toBe(1);
  });

  it("Should have a Button", () => {
    const component = shallow(<DeleteDialog {...props} />);
    const wrapper = component.find(Button);
    expect(wrapper.length).toBe(2);
  });
});
