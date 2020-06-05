import React from "react";
import { shallow } from "enzyme";
import NoteCard from "./NoteCard";
import { createStore } from "redux";
import rootReducer from "../redux/rootReducer";

const store = createStore(rootReducer);

const setUp = (initialState = {}) => {
  const component = shallow(<NoteCard store={store} />)
    .childAt(0)
    .dive();
  return component;
};

describe("<Dashboard /> Component", () => {
  let component;
  const initialState = {
    openDrawer: {
      open: false,
    },
    view: {
      view: false,
    },
  };

  beforeEach(() => {
    component = setUp(initialState);
  });

  it("Should have only 1 class with same name", () => {
    const wrapper = component.find(".noteCard");
    expect(wrapper.length).toBe(1);
  });
});
