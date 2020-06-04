import React from "react";
import { shallow } from "enzyme";
import ForgotPassword from "./ForgotPassword";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Fundoo from "./Fundoo";

const setUp = () => {
  const component = shallow(<ForgotPassword />);
  return component;
};

describe("<Login /> Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("renders without crashing", () => {
    shallow(<ForgotPassword />);
  });

  it("Should have only 1 class with same name", () => {
    const wrapper = component.find(".forgotMain");
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

  it("Should have only 1 class with same name", () => {
    const wrapper = component.find(".forgot");
    expect(wrapper.length).toBe(1);
  });

  it("Should have only 1 class with same name", () => {
    const wrapper = component.find(".forgot-password");
    expect(wrapper.length).toBe(1);
  });

  it("Should have only 1 class with same name", () => {
    const wrapper = component.find(".email");
    expect(wrapper.length).toBe(1);
  });

  it("Should have only 1 class with same name", () => {
    const wrapper = component.find(".forget");
    expect(wrapper.length).toBe(1);
  });
});
