import React, { useState } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";

const miscellaneousTypes = ["Other", "Music"];

const MiscellaneousPicker = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="miscellaneous-select-label">Miscellaneous</InputLabel>
      <Select
        labelId="miscellaneous-select-label"
        id="miscellaneous-select"
        value={selectedValue}
        label="Miscellaneous"
        onChange={handleChange}
      >
        {miscellaneousTypes.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MiscellaneousPicker;
