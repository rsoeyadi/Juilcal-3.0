import React, { useState } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";

const educationAndWorkshops = ["Preparatory Education", "Master Class"];

const EducationAndWorkshopsPicker = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="education-workshops-select-label">
        Education and Workshops
      </InputLabel>
      <Select
        labelId="education-workshops-select-label"
        id="education-workshops-select"
        value={selectedValue}
        label="Education and Workshops"
        onChange={handleChange}
      >
        {educationAndWorkshops.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default EducationAndWorkshopsPicker;
