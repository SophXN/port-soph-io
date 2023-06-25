import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import axios from "axios";
import { Airport } from "./searchairport";

const API_KEY = process.env.CLIMATIQ_API;
const API_URL = "https://beta3.api.climatiq.io/travel/flights";

type Flight = {
  from: string;
  to: string;
  passengers: number;
  class: string;
};
interface RequestBody {
  legs: Flight[];
}

type FlghtCardProps = {
  departure: Airport;
  arrival: Airport;
  passengerCount: number;
  tripType: string;
  classType: string;
};
export default function FlghtCard({
  departure,
  arrival,
  passengerCount,
  tripType,
  classType,
}: FlghtCardProps): JSX.Element | null {
  const [estimate, setEstimate] = useState<number | null>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const requestBody: RequestBody = {
      legs: [
        {
          from: departure.code,
          to: arrival.code,
          passengers: passengerCount,
          class: classType,
        },
        {
          from: departure.code,
          to: arrival.code,
          passengers: passengerCount,
          class: classType,
        },
      ],
    };

    axios
      .post(API_URL, requestBody, {
        headers: { Authorization: `Bearer ${API_KEY}` },
      })
      .then((response) => {
        let totalCo2e = 0;
        totalCo2e = response.data.legs.reduce(
          (acc: any, leg: { co2e: any }) => {
            return acc + leg.co2e;
          },
          0
        );

        setEstimate(Math.round(totalCo2e));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });

    console.log("from flightCard: ", tripType);
  }, []);

  if (isLoading || estimate === null) {
    return <div></div>;
  }

  return (
    <>
      <div>
        <Card>
          <h4 className="px-5 py-2 text-xl tracking-tight text-gray-900 dark:text-white">
            {classType === "economy" ? "An" : "A"} {classType} {tripType} flight
            from {departure.name} to {arrival.name} for {passengerCount}{" "}
            {passengerCount > 1 ? "passengers" : "passenger"}, the carbon
            estimate is: <br />
          </h4>
          <h5 className="px-5 py-2 text-xl text-center font-normal text-gray-700 dark:text-gray-400">
            {estimate} kg CO2e
          </h5>
        </Card>
      </div>
    </>
  );
}
