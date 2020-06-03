import React from "react";
import { shallow } from "enzyme";
import Register from "./Register";
import Fundoo from "./Fundoo";

const setUp = () => {
  const component = shallow(<Register />);
  return component;
};

describe("<Register /> Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("renders without crashing", () => {
    shallow(<Register />);
  });

  it("Should have only 1 class with same name", () => {
    const wrapper = component.find(".registerMain");
    expect(wrapper.length).toBe(1);
  });

  it("Should have only 1 class with same name", () => {
    const component = setUp();
    const wrapper = component.find(".left-section");
    expect(wrapper.length).toBe(1);
  });

  it("Should have only 4 class with same name", () => {
    const component = setUp();
    const wrapper = component.find(".signUp");
    expect(wrapper.length).toBe(4);
  });

  it("Should have only 2 class with same name", () => {
    const component = setUp();
    const wrapper = component.find(".sign-up");
    expect(wrapper.length).toBe(2);
  });

  it("should render one <Fundoo>", () => {
    const wrapper = setUp();
    expect(wrapper.find(Fundoo)).toHaveLength(1);
  });
});
