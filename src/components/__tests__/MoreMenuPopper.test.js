import React from "react";
import { shallow } from "enzyme";
import Popper from "@mui/material/Popper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MoreMenuPopper from "../MoreMenuPopper";

describe("<MoreMenuPopper /> Component", () => {
  let props = {
    openMenuPopper: true,
  };

  it("renders without crashing", () => {
    shallow(<MoreMenuPopper {...props} />);
  });

  it("Should render popper", () => {
    const component = shallow(<MoreMenuPopper {...props} />);
    const wrapper = component.find(Popper);
    expect(wrapper.length).toBe(1);
  });

  it("Should render List", () => {
    const component = shallow(<MoreMenuPopper {...props} />);
    const wrapper = component.find(List);
    expect(wrapper.length).toBe(1);
  });

  it("Should render ListItem", () => {
    const component = shallow(<MoreMenuPopper {...props} />);
    const wrapper = component.find(ListItem);
    expect(wrapper.length).toBe(2);
  });
});
