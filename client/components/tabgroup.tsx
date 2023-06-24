"use client";

import { Tabs } from "flowbite-react";
import { BsFillAirplaneFill } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import AirportSearch, { Airport, Direction } from "./searchairport";
import FlightCard from "./flightcard";
import { useState } from "react";
import FlightOptions from "./flightoptions";

export default function TabGroup() {
  const defaultState: Airport = {
    code: "",
    name: "",
  };
  const [departureAirport, setDepartureAirport] = useState(defaultState);
  const [arrivalAirport, setArrivalAirport] = useState(defaultState);

  const handleAirportSelection = (direction: string, airport: Airport) => {
    if (direction === "departure") {
      setDepartureAirport(airport);
    }
    if (direction === "arrival") {
      setArrivalAirport(airport);
    }
  };

  return (
    <Tabs.Group aria-label="Tabs with icons" style="underline" className="p-4">
      <Tabs.Item
        active
        icon={BsFillAirplaneFill}
        title={<span>&nbsp;&nbsp;&nbsp;Air</span>}
      >
        <div className="rounded-lg bg-white-50 shadow-lg w-full">
          <FlightOptions />
          <AirportSearch
            direction={Direction.Departure}
            handleAirportSelection={handleAirportSelection}
          />
          <AirportSearch
            direction={Direction.Arrival}
            handleAirportSelection={handleAirportSelection}
          />
          <div className="flex justify-center">
            <FlightCard departure={departureAirport} arrival={arrivalAirport} />
          </div>
        </div>
      </Tabs.Item>
      <Tabs.Item icon={AiFillCar} title={<span>&nbsp;&nbsp;&nbsp;Road</span>}>
        <div>
          Carbon emissions from a trip taken on the road comparing electric vs a
          gas powered vehicle.{" "}
          <span className="font-medium text-gray-800 dark:text-white"></span>.
          Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </div>
      </Tabs.Item>
    </Tabs.Group>
  );
}
