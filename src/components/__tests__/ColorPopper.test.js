import React from "react";
import { shallow } from "enzyme";
import ColorPopper from "../ColorPopper";
import Popper from "@mui/material/Popover";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

describe("<ColorPopper /> Component", () => {
  let props = {
    openColorPopper: true,
  };

  it("renders without crashing", () => {
    shallow(<ColorPopper {...props} />);
  });

  it("Should render popper", () => {
    const component = shallow(<ColorPopper />);
    const wrapper = component.find(Popper);
    expect(wrapper.length).toBe(1);
  });

  it("Should have only 1 class with same name", () => {
    const component = shallow(<ColorPopper />);
    const wrapper = component.find(".color");
    expect(wrapper.length).toBe(12);
  });

  it("Should render tooltip", () => {
    const component = shallow(<ColorPopper />);
    const wrapper = component.find(Tooltip);
    expect(wrapper.length).toBe(12);
  });

  it("Should render IconButton", () => {
    const component = shallow(<ColorPopper />);
    const wrapper = component.find(IconButton);
    expect(wrapper.length).toBe(12);
  });
});
