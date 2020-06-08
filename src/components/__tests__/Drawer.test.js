import React from "react";
import { shallow } from "enzyme";
import DrawerMenu from "../Drawer";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

describe("<Fundoo /> Component", () => {
  it("renders without crashing", () => {
    shallow(<DrawerMenu />);
  });

  it("Should have only 1 class with same name", () => {
    const component = shallow(<DrawerMenu />);
    const wrapper = component.find(Drawer);
    expect(wrapper.length).toBe(1);
  });

  it("Should have only 1 class with same name", () => {
    const component = shallow(<DrawerMenu />);
    const wrapper = component.find(List);
    expect(wrapper.length).toBe(1);
  });

  it("Should have ListItemIcon", () => {
    const component = shallow(<DrawerMenu />);
    const wrapper = component.find(ListItemIcon);
    expect(wrapper.length).toBe(5);
  });

  it("Should have Divider", () => {
    const component = shallow(<DrawerMenu />);
    const wrapper = component.find(Divider);
    expect(wrapper.length).toBe(5);
  });

  it("Should have ListItemText", () => {
    const component = shallow(<DrawerMenu />);
    const wrapper = component.find(ListItemText);
    expect(wrapper.length).toBe(5);
  });

  it("Should have ListItem", () => {
    const component = shallow(<DrawerMenu />);
    const wrapper = component.find(ListItem);
    expect(wrapper.length).toBe(5);
  });
});
