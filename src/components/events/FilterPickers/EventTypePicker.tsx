import React, { useState } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";

const eventTypes = ["Special Event", "Membership Event"];

const EventTypePicker = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="event-type-select-label">Event Type</InputLabel>
      <Select
        labelId="event-type-select-label"
        id="event-type-select"
        value={selectedValue}
        label="Event Type"
        onChange={handleChange}
      >
        {eventTypes.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default EventTypePicker;
