import React from "react";
import { shallow } from "enzyme";
import Fundoo from "../Fundoo";

describe("<Fundoo /> Component", () => {
  it("renders without crashing", () => {
    shallow(<Fundoo />);
  });

  it("Should have only 1 class with same name", () => {
    const component = shallow(<Fundoo />);
    const wrapper = component.find(".app-name");
    expect(wrapper.length).toBe(1);
  });

  it("Should have only 1 class with same name", () => {
    const component = shallow(<Fundoo />);
    const wrapper = component.find(".blue");
    expect(wrapper.length).toBe(2);
  });

  it("Should have only 1 class with same name", () => {
    const component = shallow(<Fundoo />);
    const wrapper = component.find(".red");
    expect(wrapper.length).toBe(2);
  });

  it("Should have only 1 class with same name", () => {
    const component = shallow(<Fundoo />);
    const wrapper = component.find(".yellow");
    expect(wrapper.length).toBe(1);
  });

  it("Should have only 1 class with same name", () => {
    const component = shallow(<Fundoo />);
    const wrapper = component.find(".green");
    expect(wrapper.length).toBe(1);
  });
});
