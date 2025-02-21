import React from "react";
import { shallow } from "enzyme";
import CollaboratorDialog from "../CollaboratorDialog";
import Dialog from "@mui/material/Dialog";
import { DialogTitle } from "@mui/material";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";

describe("<CollaboratorDialog /> Component", () => {
  sessionStorage.setItem("imageUrl", "");
  sessionStorage.setItem("email", "");

  it("renders without crashing", () => {
    let props = {
      openCollaboratorDialog: false,
    };
    shallow(<CollaboratorDialog {...props} />);
  });

  it("Should have Dialog", () => {
    let props = {
      openCollaboratorDialog: false,
    };
    const component = shallow(<CollaboratorDialog {...props} />);
    const wrapper = component.find(Dialog);
    expect(wrapper.length).toBe(1);
  });

  it("Should have DialogTitle", () => {
    let props = {
      openCollaboratorDialog: false,
    };
    const component = shallow(<CollaboratorDialog {...props} />);
    const wrapper = component.find(DialogTitle);
    expect(wrapper.length).toBe(1);
  });

  it("Should have Divider", () => {
    let props = {
      openCollaboratorDialog: false,
    };
    const component = shallow(<CollaboratorDialog {...props} />);
    const wrapper = component.find(Divider);
    expect(wrapper.length).toBe(2);
  });

  it("Should have List", () => {
    let props = {
      openCollaboratorDialog: false,
    };
    const component = shallow(<CollaboratorDialog {...props} />);
    const wrapper = component.find(List);
    expect(wrapper.length).toBe(1);
  });

  it("Should have ListItem", () => {
    let props = {
      openCollaboratorDialog: false,
    };
    const component = shallow(<CollaboratorDialog {...props} />);
    const wrapper = component.find(ListItem);
    expect(wrapper.length).toBe(2);
  });

  it("Should have ListItemAvatar", () => {
    let props = {
      openCollaboratorDialog: false,
    };
    const component = shallow(<CollaboratorDialog {...props} />);
    const wrapper = component.find(ListItemAvatar);
    expect(wrapper.length).toBe(2);
  });
});
