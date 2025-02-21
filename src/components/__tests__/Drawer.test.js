import React from "react";
import { shallow } from "enzyme";
import DrawerMenu from "../Drawer";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

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
