import React, { Component } from "react";
import { Popover, Typography, Divider, Button } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

class RemindPopper extends Component {
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
  getReminder = () => {
    this.props.getReminder(this.state.date, this.state.time);
    this.props.close();
  };

  render() {
    return (
      <div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Popover
            open={this.props.openRemindPopper}
            anchorEl={this.props.anchorEl}
            onClose={this.props.onClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <div className="reminderPopper">
              <Typography>Pick Date and Time</Typography>
              <Divider />
              <DatePicker
                label="Select Date"
                value={this.state.date}
                onChange={this.handleDate}
                renderInput={(params) => <input {...params} />}
              />
              <TimePicker
                label="Select Time"
                value={this.state.time}
                onChange={this.handleTime}
                renderInput={(params) => <input {...params} />}
              />
            </div>
            <div className="saveDiv">
              <Button onClick={this.getReminder}>Save</Button>
            </div>
          </Popover>
        </LocalizationProvider>
      </div>
    );
  }
}

export default RemindPopper;
