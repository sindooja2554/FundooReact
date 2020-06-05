import React from "react";
import { shallow } from "enzyme";
import CollaboratorIcon from "./CollaboratorIcon";
import IconButton from "@material-ui/core/IconButton";

describe("<CollaboratorIcon /> Component", () => {
  it("renders without crashing", () => {
    shallow(<CollaboratorIcon />);
  });

  it("Should have IconButton", () => {
    const component = shallow(<CollaboratorIcon />);
    const wrapper = component.find(IconButton);
    expect(wrapper.length).toBe(1);
  });

  it("Should have img", () => {
    const component = shallow(<CollaboratorIcon />);
    const wrapper = component.find("img");
    expect(wrapper.length).toBe(1);
  });
});
