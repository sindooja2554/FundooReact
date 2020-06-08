import React from "react";
import { shallow } from "enzyme";
import LabelPopper from "../LabelPopper";
import Popper from "@material-ui/core/Popper";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

describe("<LabelPopper /> Component", () => {
  let props = {
    openlabelPopper: true,
    labels: [{ label: "cldsm" }, { label: "ssknks" }],
    noteLabels: [{ label: "dmld" }],
  };

  it("renders without crashing", () => {
    shallow(<LabelPopper {...props} />);
  });

  it("Should render popper", () => {
    const component = shallow(<LabelPopper {...props} />);
    const wrapper = component.find(Popper);
    expect(wrapper.length).toBe(1);
  });

  it("Should render List", () => {
    const component = shallow(<LabelPopper {...props} />);
    const wrapper = component.find(List);
    expect(wrapper.length).toBe(1);
  });

  it("Should render ListSubheader", () => {
    const component = shallow(<LabelPopper {...props} />);
    const wrapper = component.find(ListSubheader);
    expect(wrapper.length).toBe(1);
  });

  it("Should render ListItem", () => {
    const component = shallow(<LabelPopper {...props} />);
    const wrapper = component.find(ListItem);
    expect(wrapper.length).toBe(4);
  });

  it("Should render ListItemIcon", () => {
    const component = shallow(<LabelPopper {...props} />);
    const wrapper = component.find(ListItemIcon);
    expect(wrapper.length).toBe(2);
  });

  it("Should render ListItemText", () => {
    const component = shallow(<LabelPopper {...props} />);
    const wrapper = component.find(ListItemText);
    expect(wrapper.length).toBe(3);
  });

  it("Should render Checkbox", () => {
    const component = shallow(<LabelPopper {...props} />);
    const wrapper = component.find(Checkbox);
    expect(wrapper.length).toBe(2);
  });
});
