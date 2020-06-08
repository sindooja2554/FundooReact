import React from "react";
import { shallow } from "enzyme";
import IconButton from "@material-ui/core/IconButton";
import ReminderIcon from "../ReminderIcon";

describe("<ReminderIcon /> Component", () => {
  it("renders without crashing", () => {
    shallow(<ReminderIcon />);
  });

  it("Should have IconButton", () => {
    const component = shallow(<ReminderIcon />);
    const wrapper = component.find(IconButton);
    expect(wrapper.length).toBe(1);
  });
});
