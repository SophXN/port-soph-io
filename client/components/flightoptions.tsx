import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";

export default function FlightOptions() {
  const [tripType, setTripType] = React.useState("");
  const [classType, setClassType] = React.useState("");

  const handleTripChange = (event: SelectChangeEvent) => {
    setTripType(event.target.value as string);
  };
  const handleClassChange = (event: SelectChangeEvent) => {
    setClassType(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 150 }} className="flex flex-row gap-2 p-4">
      <FormControl>
        <InputLabel id="demo-simple-select-label">Passengers</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={classType}
          label="Flight class"
          onChange={handleClassChange}
          style={{ width: "100px" }}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>&gt;3</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Trip type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tripType}
          label="Trip type"
          onChange={handleTripChange}
          style={{ width: "150px" }}
        >
          <MenuItem value={1}>
            <span style={{ marginRight: "0.5rem" }}>
              <HiOutlineArrowsRightLeft />
            </span>
            Round trip
          </MenuItem>
          <MenuItem value={2}>One way</MenuItem>
          <MenuItem value={3}>Multi-city</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Class</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={classType}
          label="Flight class"
          onChange={handleClassChange}
          style={{ width: "150px" }}
        >
          <MenuItem value={1}>Economy</MenuItem>
          <MenuItem value={2}>Business</MenuItem>
          <MenuItem value={3}>First</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
