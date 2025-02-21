import React from "react";
import { shallow } from "enzyme";
import Login from "../Login";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Fundoo from "../Fundoo";

const setUp = () => {
  const component = shallow(<Login />);
  return component;
};

describe("<Login /> Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("renders without crashing", () => {
    shallow(<Login />);
  });

  it("Should have only 1 class with same name", () => {
    const wrapper = component.find(".loginMain");
    expect(wrapper.length).toBe(1);
  });

  it("Should have card", () => {
    const wrapper = component.find(Card);
    expect(wrapper.length).toBe(1);
  });

  it("Should have form", () => {
    const wrapper = component.find("form");
    expect(wrapper.length).toBe(1);
  });

  it("Should render Fundoo", () => {
    const wrapper = component.find(Fundoo);
    expect(wrapper.length).toBe(1);
  });

  it("Should have 2 class with same name", () => {
    const wrapper = component.find(".signIn");
    expect(wrapper.length).toBe(2);
  });

  it("Should have 2 class with same name", () => {
    const wrapper = component.find(".sign-in");
    expect(wrapper.length).toBe(2);
  });

  it("Should have only 1 class with same name", () => {
    const wrapper = component.find(".forgot");
    expect(wrapper.length).toBe(1);
  });

  it("Should have only 1 class with same name", () => {
    const wrapper = component.find(".login");
    expect(wrapper.length).toBe(1);
  });

  it("Should have a textfield", () => {
    const wrapper = component.find(TextField);
    expect(wrapper.length).toBe(2);
  });

  it("Should have a button", () => {
    const wrapper = component.find(Button);
    expect(wrapper.length).toBe(2);
  });
});
