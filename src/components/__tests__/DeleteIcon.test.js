import React from "react";
import { shallow } from "enzyme";
import DeleteIcon from "../DeleteIcon";
import IconButton from "@mui/material/IconButton";

describe("<ColorIcon /> Component", () => {
  it("renders without crashing", () => {
    shallow(<DeleteIcon />);
  });

  it("Should have only 1 class with same name", () => {
    const component = shallow(<DeleteIcon />);
    const wrapper = component.find(".delete_icons");
    expect(wrapper.length).toBe(1);
  });

  it("Should have IconButton", () => {
    const component = shallow(<DeleteIcon />);
    const wrapper = component.find(IconButton);
    expect(wrapper.length).toBe(2);
  });
});
