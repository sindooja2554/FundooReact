import React from "react";
import { shallow } from "enzyme";
import { createStore } from "redux";
import rootReducer from "../redux/rootReducer";
import Trash from "./Trash";

const store = createStore(rootReducer);

const setUp = (initialState = {}) => {
  const component = shallow(<Trash store={store} />)
    .childAt(0)
    .dive();
  return component;
};

describe("<Reminder /> Component", () => {
  let component;
  const initialState = {
    openDrawer: {
      open: true,
    },
    view: {
      view: false,
    },
  };

  beforeEach(() => {
    component = setUp(initialState);
  });

  it("Should have only 1 class with same name", () => {
    const wrapper = component.find(".dashboard");
    expect(wrapper.length).toBe(1);
  });

  it("Should have only 1 class with same name", () => {
    const wrapper = component.find(".appbar");
    expect(wrapper.length).toBe(1);
  });

  it("Should have only 1 class with same name", () => {
    const wrapper = component.find(".drawer-create-note");
    expect(wrapper.length).toBe(1);
  });

  it("Should have only 1 class with same name", () => {
    const wrapper = component.find(".drawer");
    expect(wrapper.length).toBe(1);
  });
});
