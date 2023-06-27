import { Dispatch, SetStateAction } from "react";
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

interface FlightOptionsProps {
  setTripType: Dispatch<SetStateAction<string>>;
  setClassType: Dispatch<SetStateAction<string>>;
  setPassengerCount: Dispatch<SetStateAction<number>>;
}
export default function FlightOptions({
  setTripType,
  setClassType,
  setPassengerCount,
}: FlightOptionsProps) {
  const handleFlightOption = (event: SelectChangeEvent, option: string) => {
    switch (option) {
      case "tripType":
        setTripType(event.target.value as string);
        break;
      case "classType":
        console.log(event.target.value);
        setClassType(event.target.value as string);
        break;
      case "passengerCount":
        setPassengerCount(parseInt(event.target.value));
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
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Trip type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className="flex flex-row items-center"
          defaultValue={"one way"}
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
              {selected === "round trip" && (
                <span className="mr-2">
                  <HiOutlineArrowsRightLeft />
                </span>
              )}
              {selected === "one way" && (
                <span className="mr-2">
                  <HiArrowSmallRight />
                </span>
              )}
              {selected === "multi-city" && (
                <span className="mr-2">
                  <HiArrowsPointingOut />
                </span>
              )}
              <div className="whitespace-nowrap">
                {selected === "round trip"
                  ? "Round trip"
                  : selected === "one way"
                  ? "One way"
                  : "Multi-city"}
              </div>
            </div>
          )}
        >
          <MenuItem value={"round trip"}>
            <span className="mr-2">
              <HiOutlineArrowsRightLeft />
            </span>
            Round trip
          </MenuItem>
          <MenuItem value={"one way"}>
            <span className="mr-2">
              <HiArrowSmallRight />
            </span>
            One way
          </MenuItem>
          <MenuItem disabled value={"multi-city"}>
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
          defaultValue={"economy"}
          label="Flight class"
          onChange={(e: SelectChangeEvent) =>
            handleFlightOption(e, "classType")
          }
          style={{ width: "150px" }}
        >
          <MenuItem value={"economy"}>Economy</MenuItem>
          <MenuItem value={"business"}>Business</MenuItem>
          <MenuItem value={"first"}>First</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
