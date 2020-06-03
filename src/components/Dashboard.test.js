import React from "react";
import { shallow } from "enzyme";
import Dashboard from "./Dashboard";
import { Provider } from "react-redux";

const setUp = (store = {}) => {
  const component = shallow(
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
  console.log("component", component.debug());
  return component;
};

describe("<Dashboard /> Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it("Should have only 1 class with same name", () => {
    // const component = mount(<Dashboard />);
    // const wrapper = component.find(".dashboard");
    // expect(wrapper.length).toBe(1);
  });
  //   it("Should have only 1 class with same name", () => {
  //     const component = shallow(<Dashboard />);
  //     const wrapper = component.find(".appbar");
  //     expect(wrapper.length).toBe(1);
  //   });
  //   it("Should have only 1 class with same name", () => {
  //     const component = shallow(<Dashboard />);
  //     const wrapper = component.find(".drawer-create-note");
  //     expect(wrapper.length).toBe(1);
  //   });
});
