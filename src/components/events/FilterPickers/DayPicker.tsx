import React, { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const DayPicker = () => {
  const [day, setDay] = useState("");

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setDay(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="day-select-label">Day of the Week</InputLabel>
      <Select
        labelId="day-select-label"
        id="day-select"
        value={day}
        label="Day of the Week"
        onChange={handleChange}
      >
        <MenuItem value="Sunday">Sunday</MenuItem>
        <MenuItem value="Monday">Monday</MenuItem>
        <MenuItem value="Tuesday">Tuesday</MenuItem>
        <MenuItem value="Wednesday">Wednesday</MenuItem>
        <MenuItem value="Thursday">Thursday</MenuItem>
        <MenuItem value="Friday">Friday</MenuItem>
        <MenuItem value="Saturday">Saturday</MenuItem>
      </Select>
    </FormControl>
  );
};

export default DayPicker;
