import React, { Component } from "react";
import Popper from "@material-ui/core/Popover";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
// import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import "../scss/NoteIcon.scss";

const array = [
  { code: "#FFFFFF", name: "white" },
  { code: "#F28B82", name: "red" },
  { code: "#F7BC04", name: "orange" },
  { code: "#FCF474", name: "yellow" },
  { code: "#CCFF90", name: "green" },
  { code: "#A7FFEB", name: "teal" },
  { code: "#CBF0F8", name: "blue" },
  { code: "#AECBFA", name: "Drak blue" },
  { code: "#D7AEFB", name: "purple" },
  { code: "#FACFE8", name: "pink" },
  { code: "#E6C9A8", name: "Brown" },
  { code: "#E8EAED", name: "grey" },
];

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        width: "180px",
        height: "135px",
        display: "flex",
        flexWrap: "wrap",
      },
    },
  },
});

export class ColorPopper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // closeColourPopper = (event) => {
  //   this.props.closeColourPopper();
  // };

  loadColor(index) {
    this.props.props(array[index]);
    this.props.closeColourPopper();
  }

  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          {/* <ClickAwayListener onClickAway={(event) => this.closeColourPopper()}> */}
          <Popper
            open={this.props.openColorPopper}
            anchorEl={this.props.anchorEl}
            placement="top"
          >
            {array.map((item, index) => (
              <div key={index} className="color">
                <Tooltip title={item.name}>
                  <IconButton
                    onClick={() => this.loadColor(index)}
                    style={{ backgroundColor: item.code }}
                  ></IconButton>
                </Tooltip>
              </div>
            ))}
          </Popper>
          {/* </ClickAwayListener> */}
        </MuiThemeProvider>
      </div>
    );
  }
}

export default ColorPopper;
