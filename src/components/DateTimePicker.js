import React from "react";
import "date-fns";
import { Box } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import { DateRange, AccessTime } from "@material-ui/icons";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

function DateTimePicker({ currentDate, onDateChange }) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Box display="flex" flexDirection="row">
        <Box mr={1}>
          <KeyboardDatePicker
            placeholder="2018/10/10"
            inputVariant="outlined"
            value={currentDate}
            keyboardIcon={<DateRange />}
            onChange={(date) => onDateChange(date)}
            format="yyyy/MM/dd"
          />
        </Box>
        <Box ml={1}>
          <KeyboardTimePicker
            inputVariant="outlined"
            id="time-picker"
            variant="inline"
            value={currentDate}
            keyboardIcon={<AccessTime />}
            onChange={(date) => onDateChange(date)}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
        </Box>
      </Box>
    </MuiPickersUtilsProvider>
  );
}

export default DateTimePicker;
