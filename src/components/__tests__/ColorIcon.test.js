import React from "react";
import { shallow } from "enzyme";
import ColorIcon from "../ColorIcon";
import IconButton from "@material-ui/core/IconButton";

describe("<ColorIcon /> Component", () => {
  it("renders without crashing", () => {
    shallow(<ColorIcon />);
  });

  it("Should have IconButton", () => {
    const component = shallow(<ColorIcon />);
    const wrapper = component.find(IconButton);
    expect(wrapper.length).toBe(1);
  });

  it("Should have img", () => {
    const component = shallow(<ColorIcon />);
    const wrapper = component.find("img");
    expect(wrapper.length).toBe(1);
  });
});
