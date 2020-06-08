import React from "react";
import { shallow } from "enzyme";
import CollaboratorDialog from "../CollaboratorDialog";
import Dialog from "@material-ui/core/Dialog";
import { DialogTitle } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

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
