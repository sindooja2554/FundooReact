import React from "react";
import { shallow } from "enzyme";
import DisplayNote from "../DisplayNote";
import Paper from "@mui/material/Paper";
import { Typography, Chip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import NoteIcon from "../NoteIcon";
import DeleteIcon from "../DeleteIcon";
import checkPropTypes from "check-prop-types";

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

  describe("Checking props types", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        note: {
          title: "sjkdnjcn",
          description: "dlksnclkdn",
          remainder: "May30, 21:00:00",
          isPinned: false,
          isArchive: false,
          isTrash: false,
          labels: [
            {
              label: "scmd1",
            },
          ],
          collaborator: [
            {
              email: "sdsknk@cjnc.com",
            },
          ],
        },
      };

      const propsError = checkPropTypes(
        DisplayNote.propTypes,
        expectedProps,
        "props",
        DisplayNote.name
      );

      expect(propsError).toBeUndefined();
    });
  });
});
