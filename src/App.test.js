import React from "react";
// import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import App from "./App";

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("First React component test with Enzyme", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
});

describe("<App /> Component", () => {
  it("Should have only 1 class with same name", () => {
    const component = shallow(<App />);
    const wrapper = component.find(".App");
    expect(wrapper.length).toBe(1);
  });
});
