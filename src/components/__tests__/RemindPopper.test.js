import React from "react";
import { shallow } from "enzyme";
import Popover from "@material-ui/core/Popover";
import RemindPopper from "../RemindPopper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { KeyboardDatePicker, KeyboardTimePicker } from "@material-ui/pickers";
import Button from "@material-ui/core/Button";

describe("<MoreMenuPopper /> Component", () => {
  let props = {
    openRemindPopper: true,
  };

  it("renders without crashing", () => {
    shallow(<RemindPopper {...props} />);
  });

  it("Should render popover", () => {
    const component = shallow(<RemindPopper {...props} />);
    const wrapper = component.find(Popover);
    expect(wrapper.length).toBe(1);
  });

  it("Should have typography", () => {
    const component = shallow(<RemindPopper {...props} />);
    const wrapper = component.find(Typography);
    expect(wrapper.length).toBe(1);
  });

  it("Should have divider", () => {
    const component = shallow(<RemindPopper {...props} />);
    const wrapper = component.find(Divider);
    expect(wrapper.length).toBe(1);
  });

  it("Should have keyboard date picker", () => {
    const component = shallow(<RemindPopper {...props} />);
    const wrapper = component.find(KeyboardDatePicker);
    expect(wrapper.length).toBe(1);
  });

  it("Should have keyboard time picker", () => {
    const component = shallow(<RemindPopper {...props} />);
    const wrapper = component.find(KeyboardTimePicker);
    expect(wrapper.length).toBe(1);
  });

  it("Should have button", () => {
    const component = shallow(<RemindPopper {...props} />);
    const wrapper = component.find(Button);
    expect(wrapper.length).toBe(1);
  });
});
