import React, { useState } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";

const performanceTypes = [
  "Opera / Voice",
  "Classical",
  "Historical Performance",
  "Recital",
  "Orchestra",
  "Contemporary / New Work",
  "Drama",
  "Dance",
  "Chamber Music",
  "Jazz",
];

const PerformanceTypePicker = () => {
  const [performanceType, setPerformanceType] = useState<string>("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setPerformanceType(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="performance-type-select-label">
        Performance Type
      </InputLabel>
      <Select
        labelId="performance-type-select-label"
        id="performance-type-select"
        value={performanceType}
        label="Performance Type"
        onChange={handleChange}
      >
        {performanceTypes.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default PerformanceTypePicker;
