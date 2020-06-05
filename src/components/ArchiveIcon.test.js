import React from "react";
import { shallow } from "enzyme";
import ArchiveIcon from "./ArchiveIcon";
import { IconButton } from "@material-ui/core";

describe("<ArchiveIcon /> Component", () => {
  it("renders without crashing", () => {
    shallow(<ArchiveIcon />);
  });

  it("Should have IconButton", () => {
    let props = {
      archiveIcon: "",
    };
    const component = shallow(<ArchiveIcon props={props} />);
    const wrapper = component.find(IconButton);
    expect(wrapper.length).toBe(1);
  });

  it("Should have IconButton", () => {
    let props = {
      archiveIcon: "Archive",
    };
    const component = shallow(<ArchiveIcon props={props} />);
    const wrapper = component.find(IconButton);
    expect(wrapper.length).toBe(1);
  });
});
