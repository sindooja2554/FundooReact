import React, { Component } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import Popover from "@material-ui/core/Popover";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

export class RemindPopper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      time: null,
    };
  }

  handleDate = (date) => {
    this.setState({
      date: date,
    });
  };

  handleTime = (time) => {
    this.setState({
      time: time,
    });
  };

  render() {
    return (
      <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Popover
            open={this.props.openRemindPopper}
            anchorEl={this.props.anchorEl}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <Typography>Pick Date and Time</Typography>
            <Divider />
            <div>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                value={this.state.date}
                onChange={(date) => this.handleDate(date)}
                format="MM/dd/yyyy"
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </div>
            <div>
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                value={this.state.time}
                onChange={(time) => this.handleTime(time)}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
            </div>
          </Popover>
        </MuiPickersUtilsProvider>
      </div>
    );
  }
}

export default RemindPopper;
