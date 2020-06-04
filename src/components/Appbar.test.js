import React from "react";
import { shallow } from "enzyme";
import { createStore } from "redux";
import rootReducer from "../redux/rootReducer";
import Appbar from "./Appbar";

const store = createStore(rootReducer);

const setUp = (initialState = {}) => {
  const component = shallow(<Appbar store={store} />)
    .childAt(0)
    .dive();
  return component;
};

describe("<Appbar /> Component", () => {
  let component;
  const initialState = {
    openDrawer: {
      open: false,
    },
    view: {
      view: false,
    },
  };

  sessionStorage.setItem("firstName", "Sindooja");
  sessionStorage.setItem("imageUrl", "");
  sessionStorage.setItem("profileColor", "#164D40");

  beforeEach(() => {
    component = setUp(initialState);
  });

  it("Should have only 1 class with same name", () => {
    const wrapper = component.find(".toolbar");
    expect(wrapper.length).toBe(1);
  });
});
