import React, { Component } from "react";
// import ClickAwayListener from "@mui/material/ClickAwayListener";
import Popper from "@mui/material/Popover";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { ThemeProvider } from '@mui/material/styles';
import "../scss/NoteIcon.scss";
import { createTheme } from '@mui/material/styles';

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

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          width: "180px",
          height: "135px",
          display: "flex",
          flexWrap: "wrap",
        },
      },
    },
  },
});

export class ColorPopper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    this.setState({
      open: this.props.openColorPopper,
    });
  }

  closeColourPopper = () => {
    this.setState({
      open: false,
    });
    this.props.closeColourPopper();
  };

  loadColor(index) {
    this.props.props(array[index]);
    this.props.closeColourPopper();
  }

  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          {/* <ClickAwayListener onClickAway={() => this.closeColourPopper()}> */}
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
        </ThemeProvider>
      </div>
    );
  }
}

export default ColorPopper;
