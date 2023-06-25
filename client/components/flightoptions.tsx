import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  HiOutlineArrowsRightLeft,
  HiArrowSmallRight,
  HiArrowsPointingOut,
} from "react-icons/hi2";

export default function FlightOptions() {
  const [, setTripType] = React.useState("");
  const [, setClassType] = React.useState("");
  const [, setPassengerCount] = React.useState("1");

  const handleFlightOption = (event: SelectChangeEvent, option: string) => {
    switch (option) {
      case "tripType":
        setTripType(event.target.value as string);
        break;
      case "classType":
        setClassType(event.target.value as string);
        break;
      case "passengerCount":
        setPassengerCount(event.target.value as string);
        break;
      default:
        setTripType("");
    }
  };

  return (
    <Box sx={{ minWidth: 150 }} className="flex flex-row gap-2 p-4">
      <FormControl>
        <InputLabel id="demo-simple-select-label">Passengers</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={"1"}
          label="passenger count"
          onChange={(e: SelectChangeEvent) =>
            handleFlightOption(e, "passengerCount")
          }
          className="flex flex-row items-center"
          style={{ width: "100px" }}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3 +</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Trip type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className="flex flex-row items-center"
          defaultValue={"1"}
          label="Trip type"
          onChange={(e: SelectChangeEvent) => handleFlightOption(e, "tripType")}
          style={{ minWidth: "175px", display: "flex" }}
          MenuProps={{
            classes: {
              paper: "max-h-64",
            },
          }}
          renderValue={(selected) => (
            <div className="flex items-center">
              {selected === "1" && (
                <span className="mr-2">
                  <HiOutlineArrowsRightLeft />
                </span>
              )}
              {selected === "2" && (
                <span className="mr-2">
                  <HiArrowSmallRight />
                </span>
              )}
              {selected === "3" && (
                <span className="mr-2">
                  <HiArrowsPointingOut />
                </span>
              )}
              <div className="whitespace-nowrap">
                {selected === "1"
                  ? "Round trip"
                  : selected === "2"
                  ? "One way"
                  : "Multi-city"}
              </div>
            </div>
          )}
        >
          <MenuItem value={"1"}>
            <span className="mr-2">
              <HiOutlineArrowsRightLeft />
            </span>
            Round trip
          </MenuItem>
          <MenuItem value={"2"}>
            <span className="mr-2">
              <HiArrowSmallRight />
            </span>
            One way
          </MenuItem>
          <MenuItem value={"3"}>
            <span className="mr-2">
              <HiArrowsPointingOut />
            </span>
            Multi-city
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Class</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={"1"}
          label="Flight class"
          onChange={(e: SelectChangeEvent) =>
            handleFlightOption(e, "classType")
          }
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
