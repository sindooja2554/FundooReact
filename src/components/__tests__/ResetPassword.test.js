import React from "react";
import { shallow } from "enzyme";
import ResetPassword from "../ResetPassword";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import { IconButton, Button } from "@material-ui/core";
import Fundoo from "../Fundoo";

const setUp = () => {
  const component = shallow(<ResetPassword />);
  return component;
};

describe("<Login /> Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("renders without crashing", () => {
    shallow(<ResetPassword />);
  });

  it("Should have only 1 class with same name", () => {
    const wrapper = component.find(".resetMain");
    expect(wrapper.length).toBe(1);
  });

  it("Should have card", () => {
    const wrapper = component.find(Card);
    expect(wrapper.length).toBe(1);
  });

  it("Should render Fundoo", () => {
    const wrapper = component.find(Fundoo);
    expect(wrapper.length).toBe(1);
  });

  it("Should have form", () => {
    const wrapper = component.find("form");
    expect(wrapper.length).toBe(1);
  });

  it("Should have a textfield", () => {
    const wrapper = component.find(TextField);
    expect(wrapper.length).toBe(1);
  });

  it("Should have a button", () => {
    const wrapper = component.find(Button);
    expect(wrapper.length).toBe(1);
  });

  it("Should have a Icon button", () => {
    const wrapper = component.find(IconButton);
    expect(wrapper.length).toBe(1);
  });

  it("Should have only 1 class with same name", () => {
    const wrapper = component.find(".reset");
    expect(wrapper.length).toBe(1);
  });

  it("Should have only 1 class with same name", () => {
    const wrapper = component.find(".reset-password");
    expect(wrapper.length).toBe(1);
  });

  it("Should have only 1 class with same name", () => {
    const wrapper = component.find(".password");
    expect(wrapper.length).toBe(1);
  });

  it("Should have only 1 class with same name", () => {
    const wrapper = component.find(".resetpassword");
    expect(wrapper.length).toBe(1);
  });
});
