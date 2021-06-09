import React, { useState } from "react";
import { TextField, Button, Box } from "@material-ui/core";
import DateTimePicker from "./DateTimePicker";
import { CameraAlt } from "@material-ui/icons";
import "react-datepicker/dist/react-datepicker.css";

function AppForm({ data, setData }) {
  const handleOnChange = (e, name) => {
    const currentValue = e.currentTarget.value;
    const newData = { ...data };
    newData[name] = currentValue;
    setData(newData);
  };

  const handleDateChange = (newDate) => {
    const newData = { ...data };
    newData.currentDate = newDate;
    setData(newData);
  };

  return (
    <Box mt={3} mb={4}>
      <form>
        <DateTimePicker
          currentDate={data.currentDate}
          onDateChange={handleDateChange}
        />
        <Box my={4}>
          <TextField
            error={data.isError === "amount" ? true : false}
            id="outlined-number"
            label="Amount"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            fullWidth
            onChange={(e) => handleOnChange(e, "amount")}
          />
        </Box>
        <Box my={4}>
          <TextField
            error={data.isError === "remark" ? true : false}
            id="outlined-secondary"
            label="Remark"
            variant="outlined"
            fullWidth
            onChange={(e) => handleOnChange(e, "remark")}
          />
        </Box>
        <Box>
          <Button
            style={{ color: "#1976d2", fontWeight: 700 }}
            variant="outlined"
            startIcon={<CameraAlt />}
          >
            Attach Image
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default AppForm;
