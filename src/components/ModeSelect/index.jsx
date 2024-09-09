import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useColorScheme } from "@mui/material/styles";
import { FormControl, InputLabel } from "@mui/material";

const ModeSelect = () => {
  const { mode, setMode } = useColorScheme();
  const handleChange = (e) => {
    const selectedMode = e.target.value;
    setMode(selectedMode);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-mode">Mode</InputLabel>
      <Select labelId="label-mode" value={mode} onChange={handleChange}>
        <MenuItem value="system">System</MenuItem>
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ModeSelect;
