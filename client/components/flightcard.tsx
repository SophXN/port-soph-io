import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import axios from "axios";

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

export default function FlghtCard(): JSX.Element | null {
  const [estimate, setEstimate] = useState<number | null>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const requestBody: RequestBody = {
      legs: [
        {
          from: "BER",
          to: "HAM",
          passengers: 2,
          class: "first",
        },
        {
          from: "HAM",
          to: "JFK",
          passengers: 2,
          class: "economy",
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
  }, []);

  if (isLoading || estimate === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <Card style={{ width: "275px" }}>
          <h5 className="px-5 py-2 text-xl tracking-tight text-gray-900 dark:text-white">
            One economy roundtrip flight from Berlin to New York.
          </h5>
          <p className="px-5 py-2 text-center font-normal text-gray-700 dark:text-gray-400">
            Carbon Estimate <br /> {estimate} kg CO2e
          </p>
        </Card>
      </div>
    </>
  );
}
