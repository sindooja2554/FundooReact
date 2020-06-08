import React from "react";
import { shallow } from "enzyme";
import DeleteDialog from "../DeleteDialog";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

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
