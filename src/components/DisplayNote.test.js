import React from "react";
import { shallow } from "enzyme";
import DisplayNote from "./DisplayNote";
import Paper from "@material-ui/core/Paper";
import { Typography, Chip } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import NoteIcon from "./NoteIcon";
import DeleteIcon from "./DeleteIcon";

describe("<DisplayNote /> Component", () => {
  let props = {
    note: {
      reminder: "May 31, 21:05:00",
      labels: [{ label: "dkklk" }, { label: "shbxjhs" }],
      isPinned: false,
      color: { code: "#FFFFFF" },
      collaborator: [
        {
          imageUrl: "",
          firstName: "",
        },
      ],
    },
  };

  it("renders without crashing", () => {
    shallow(<DisplayNote {...props} />);
  });

  it("Should have a Paper", () => {
    const component = shallow(<DisplayNote {...props} />);
    const wrapper = component.find(Paper);
    expect(wrapper.length).toBe(1);
  });

  it("Should have only 1 class with same name", () => {
    const component = shallow(<DisplayNote {...props} />);
    const wrapper = component.find(".displayNote");
    expect(wrapper.length).toBe(2);
  });

  it("Should have a Typography", () => {
    const component = shallow(<DisplayNote {...props} />);
    const wrapper = component.find(Typography);
    expect(wrapper.length).toBe(2);
  });

  it("Should have only 1 class with same name", () => {
    const component = shallow(<DisplayNote {...props} />);
    const wrapper = component.find(".displayBlocked");
    expect(wrapper.length).toBe(1);
  });

  it("Should have a IconButton", () => {
    const component = shallow(<DisplayNote {...props} />);
    const wrapper = component.find(IconButton);
    expect(wrapper.length).toBe(2);
  });

  it("Should have only 1 class with same name", () => {
    const component = shallow(<DisplayNote {...props} />);
    const wrapper = component.find(".label-collaborator");
    expect(wrapper.length).toBe(1);
  });

  it("Should have only 1 class with same name", () => {
    const component = shallow(<DisplayNote {...props} />);
    const wrapper = component.find(".reminder");
    expect(wrapper.length).toBe(1);
  });

  it("Should have a chip", () => {
    const component = shallow(<DisplayNote {...props} />);
    const wrapper = component.find(Chip);
    expect(wrapper.length).toBe(3);
  });

  it("Should have only 1 class with same name", () => {
    const component = shallow(<DisplayNote {...props} />);
    const wrapper = component.find(".labelsArray");
    expect(wrapper.length).toBe(1);
  });

  it("Should have only 1 class with same name", () => {
    const component = shallow(<DisplayNote {...props} />);
    const wrapper = component.find(".labelsDiv");
    expect(wrapper.length).toBe(2);
  });

  it("Should have only 1 class with same name", () => {
    const component = shallow(<DisplayNote {...props} />);
    const wrapper = component.find(".noteDisplayBlock");
    expect(wrapper.length).toBe(1);
  });

  it("Should render NoteIcon", () => {
    let props = {
      note: {
        reminder: "May 31, 21:05:00",
        labels: [{ label: "dkklk" }, { label: "shbxjhs" }],
        isPinned: false,
        color: { code: "#FFFFFF" },
        collaborator: [
          {
            imageUrl: "",
            firstName: "",
          },
        ],
      },
    };
    const component = shallow(<DisplayNote {...props} />);
    const wrapper = component.find(NoteIcon);
    expect(wrapper.length).toBe(1);
  });

  it("Should render DeleteIcon when props have trash", () => {
    let props = {
      trash: "Trash",
      note: {
        reminder: "May 31, 21:05:00",
        labels: [{ label: "dkklk" }, { label: "shbxjhs" }],
        isPinned: false,
        color: { code: "#FFFFFF" },
        collaborator: [
          {
            imageUrl: "",
            firstName: "",
          },
        ],
      },
    };
    const component = shallow(<DisplayNote {...props} />);
    const wrapper = component.find(DeleteIcon);
    expect(wrapper.length).toBe(1);
  });
});
