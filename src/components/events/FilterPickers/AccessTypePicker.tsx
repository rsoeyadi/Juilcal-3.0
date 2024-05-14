import React, { useState } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";

const accessTypes = ["Free", "Live Streaming", "Relaxed Performance"];

const AccessTypePicker = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="access-type-select-label">Access Type</InputLabel>
      <Select
        labelId="access-type-select-label"
        id="access-type-select"
        value={selectedValue}
        label="Access Type"
        onChange={handleChange}
      >
        {accessTypes.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default AccessTypePicker;
