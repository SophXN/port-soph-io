import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import axios from "axios";

const API_KEY = process.env.CLIMATIQ_API;
const API_URL = "https://beta3.api.climatiq.io/estimate";

interface Params {
  energy: number;
  energy_unit: string;
}

interface EmissionFactor {
  activity_id: string;
}

interface RequestBody {
  emission_factor: EmissionFactor;
  parameters: Params;
}
export default function FactCard(): JSX.Element | null {
  const [estimate, setEstimate] = useState<number | null>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const requestBody: RequestBody = {
      emission_factor: {
        activity_id: "electricity-energy_source_grid_mix",
      },
      parameters: {
        energy: 4200,
        energy_unit: "kWh",
      },
    };

    axios
      .post(API_URL, requestBody, {
        headers: { Authorization: `Bearer ${API_KEY}` },
      })
      .then((response) => {
        setEstimate(Math.round(response.data.co2e));
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
            The average UK household consumes 4.200 kWh of electricity every
            year
          </h5>
          <p className="px-5 py-2 text-center font-normal text-gray-700 dark:text-gray-400">
            Carbon Estimate <br /> {estimate} kg CO2e
          </p>
        </Card>
      </div>
    </>
  );
}
