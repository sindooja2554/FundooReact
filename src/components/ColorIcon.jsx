import React, { Component } from "react";
import IconButton from "@mui/material/IconButton";
import color_palatte from '../assets/color_palatte.svg';

export class ColorIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <IconButton onClick={(event) => this.props.setColor(event)}>
          <img src={color_palatte} alt="color" />
        </IconButton>
      </div>
    );
  }
}

export default ColorIcon;
