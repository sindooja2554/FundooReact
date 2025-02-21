import React from "react";
import { shallow } from "enzyme";
import IconButton from "@mui/material/IconButton";
import MoreIcon from "../MoreIcon";

describe("<Fundoo /> Component", () => {
  it("renders without crashing", () => {
    shallow(<MoreIcon />);
  });

  it("Should render IconButton", () => {
    const component = shallow(<MoreIcon />);
    const wrapper = component.find(IconButton);
    expect(wrapper.length).toBe(1);
  });
});
