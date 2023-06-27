import { Tabs } from "flowbite-react";
import { BsFillAirplaneFill } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import AirportSearch, { Airport, Direction } from "./searchairport";
import FlightCard from "./flightcard";
import { useEffect, useState } from "react";
import FlightOptions from "./flightoptions";

export default function TabGroup() {
  const defaultState: Airport = {
    code: "",
    name: "",
  };
  const [departureAirport, setDepartureAirport] = useState(defaultState);
  const [arrivalAirport, setArrivalAirport] = useState(defaultState);
  const [tripType, setTripType] = useState("one way");
  const [classType, setClassType] = useState("economy");
  const [passengerCount, setPassengerCount] = useState(1);

  useEffect(() => {}, [
    departureAirport,
    arrivalAirport,
    passengerCount,
    tripType,
    classType,
  ]);

  const handleAirportSelection = (direction: string, airport: Airport) => {
    if (direction === "departure") {
      setDepartureAirport(airport);
    }
    if (direction === "arrival") {
      setArrivalAirport(airport);
    }
  };

  return (
    <Tabs.Group
      aria-label="Tabs with icons"
      style="underline"
      className="w-full p-1"
    >
      <Tabs.Item
        active
        icon={BsFillAirplaneFill}
        title={<span>&nbsp;&nbsp;&nbsp;Air</span>}
      >
        <div className="bg-white rounded-lg shadow-md mb-4">
          <FlightOptions
            setTripType={setTripType}
            setClassType={setClassType}
            setPassengerCount={setPassengerCount}
          />
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <AirportSearch
            direction={Direction.Departure}
            handleAirportSelection={handleAirportSelection}
          />
          <AirportSearch
            direction={Direction.Arrival}
            handleAirportSelection={handleAirportSelection}
          />
          {departureAirport.name !== "" && arrivalAirport.name !== "" && (
            <>
              <div className="">
                <FlightCard
                  departure={departureAirport}
                  arrival={arrivalAirport}
                  passengerCount={passengerCount}
                  tripType={tripType}
                  classType={classType}
                />
              </div>
            </>
          )}
        </div>
      </Tabs.Item>
      <Tabs.Item icon={AiFillCar} title={<span>&nbsp;&nbsp;&nbsp;Road</span>}>
        <div>
          Coming Soon! Carbon emissions from a trip taken on the road comparing
          electric vs a gas powered vehicle.{" "}
        </div>
      </Tabs.Item>
    </Tabs.Group>
  );
}
