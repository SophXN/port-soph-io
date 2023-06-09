import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export interface Airport {
  code: string;
  name: string;
}

export enum Direction {
  Departure = "departure",
  Arrival = "arrival",
}

interface AirportSearchProps {
  direction: Direction;
  handleAirportSelection: (direction: string, airport: Airport) => void;
}

const AirportSearch: React.FC<AirportSearchProps> = ({
  direction,
  handleAirportSelection,
}) => {
  const handleSelectAirport = (
    airport: Airport | null,
    currentDirection: Direction
  ) => {
    if (airport) {
      if (currentDirection === Direction.Departure) {
        handleAirportSelection("departure", airport);
      } else if (currentDirection === Direction.Arrival) {
        handleAirportSelection("arrival", airport);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      {direction === Direction.Departure ? (
        <div className="mt-4 mb-1 text-xl font-bold">
          <h2>Departure Airport</h2>
        </div>
      ) : (
        <div className="text-xl font-bold mb-1">
          <h2>Arrival Airport</h2>
        </div>
      )}
      {direction === Direction.Departure ? (
        <>
          <Autocomplete
            id="departure"
            options={airports}
            getOptionLabel={(option) => `${option.name}, ${option.code}`}
            isOptionEqualToValue={(option, value) => option.code === value.code}
            renderInput={(params) => (
              <TextField {...params} label="Where From?" />
            )}
            onChange={(event, value) =>
              handleSelectAirport(value, Direction.Departure)
            }
          />
        </>
      ) : (
        <>
          <Autocomplete
            id="arrival"
            options={airports}
            getOptionLabel={(option) => `${option.name}, ${option.code}`}
            isOptionEqualToValue={(option, value) => option.code === value.code}
            renderInput={(params) => (
              <TextField {...params} label="Where To?" />
            )}
            onChange={(event, value) =>
              handleSelectAirport(value, Direction.Arrival)
            }
          />
        </>
      )}
    </div>
  );
};

export default AirportSearch;

const airports = [
  { code: "ATL", name: "Hartsfield-Jackson Atlanta International Airport" },
  { code: "PEK", name: "Beijing Capital International Airport" },
  { code: "LAX", name: "Los Angeles International Airport" },
  { code: "DXB", name: "Dubai International Airport" },
  { code: "ORD", name: "O'Hare International Airport" },
  { code: "HND", name: "Tokyo Haneda Airport" },
  { code: "DFW", name: "Dallas/Fort Worth International Airport" },
  { code: "CGK", name: "Soekarno-Hatta International Airport" },
  { code: "CDG", name: "Charles de Gaulle Airport" },
  { code: "LHR", name: "Heathrow Airport" },
  { code: "PVG", name: "Shanghai Pudong International Airport" },
  { code: "JFK", name: "John F. Kennedy International Airport" },
  { code: "AMS", name: "Amsterdam Airport Schiphol" },
  { code: "FRA", name: "Frankfurt Airport" },
  { code: "IST", name: "Istanbul Airport" },
  { code: "SIN", name: "Singapore Changi Airport" },
  { code: "CAN", name: "Guangzhou Baiyun International Airport" },
  { code: "DEN", name: "Denver International Airport" },
  { code: "ICN", name: "Incheon International Airport" },
  { code: "BKK", name: "Suvarnabhumi Airport" },
  { code: "MAD", name: "Adolfo Suárez Madrid–Barajas Airport" },
  { code: "LAS", name: "McCarran International Airport" },
  { code: "SFO", name: "San Francisco International Airport" },
  { code: "CLT", name: "Charlotte Douglas International Airport" },
  { code: "PHX", name: "Phoenix Sky Harbor International Airport" },
  { code: "IAH", name: "George Bush Intercontinental Airport" },
  { code: "MIA", name: "Miami International Airport" },
  { code: "SYD", name: "Sydney Airport" },
  { code: "DEL", name: "Indira Gandhi International Airport" },
  { code: "DME", name: "Domodedovo International Airport" },
  { code: "GRU", name: "São Paulo–Guarulhos International Airport" },
  { code: "MEX", name: "Mexico City International Airport" },
  { code: "KUL", name: "Kuala Lumpur International Airport" },
  { code: "EWR", name: "Newark Liberty International Airport" },
  { code: "HKG", name: "Hong Kong International Airport" },
  { code: "MCO", name: "Orlando International Airport" },
  { code: "LGW", name: "Gatwick Airport" },
  { code: "CTU", name: "Chengdu Shuangliu International Airport" },
  { code: "BOM", name: "Chhatrapati Shivaji Maharaj International Airport" },
  { code: "YYZ", name: "Toronto Pearson International Airport" },
  { code: "ARN", name: "Stockholm Arlanda Airport" },
  { code: "ATH", name: "Athens International Airport" },
  { code: "BCN", name: "Barcelona-El Prat Airport" },
  { code: "BNE", name: "Brisbane Airport" },
  { code: "BRU", name: "Brussels Airport" },
  { code: "BUD", name: "Budapest Ferenc Liszt International Airport" },
  {
    code: "BWI",
    name: "Baltimore/Washington International Thurgood Marshall Airport",
  },
  { code: "CAI", name: "Cairo International Airport" },
  { code: "CCU", name: "Netaji Subhash Chandra Bose International Airport" },
  { code: "CGH", name: "São Paulo/Congonhas Airport" },
  { code: "CPT", name: "Cape Town International Airport" },
  { code: "CSX", name: "Changsha Huanghua International Airport" },
  { code: "DUB", name: "Dublin Airport" },
  { code: "FCO", name: "Leonardo da Vinci–Fiumicino Airport" },
  { code: "GIG", name: "Rio de Janeiro–Galeão International Airport" },
  { code: "HAM", name: "Hamburg Airport" },
  { code: "HEL", name: "Helsinki Airport" },
  { code: "JNB", name: "OR Tambo International Airport" },
  { code: "KIX", name: "Kansai International Airport" },
  { code: "KRK", name: "John Paul II International Airport Kraków–Balice" },
  { code: "LIS", name: "Lisbon Airport" },
  { code: "MEL", name: "Melbourne Airport" },
  { code: "MNL", name: "Ninoy Aquino International Airport" },
  { code: "MUC", name: "Munich Airport" },
  { code: "NRT", name: "Narita International Airport" },
  { code: "OSL", name: "Oslo Airport, Gardermoen" },
  { code: "OTP", name: "Henri Coandă International Airport" },
  { code: "PRG", name: "Václav Havel Airport Prague" },
  { code: "PTY", name: "Tocumen International Airport" },
  { code: "RUH", name: "King Khalid International Airport" },
  { code: "SCL", name: "Comodoro Arturo Merino Benítez International Airport" },
  { code: "SEA", name: "Seattle-Tacoma International Airport" },
  { code: "SVO", name: "Sheremetyevo International Airport" },
  { code: "TPE", name: "Taiwan Taoyuan International Airport" },
  { code: "VIE", name: "Vienna International Airport" },
  { code: "WAW", name: "Warsaw Chopin Airport" },
  {
    code: "YUL",
    name: "Montréal–Pierre Elliott Trudeau International Airport",
  },
  { code: "YVR", name: "Vancouver International Airport" },
  {
    code: "YWG",
    name: "Winnipeg James Armstrong Richardson International Airport",
  },
  { code: "YXE", name: "Saskatoon John G. Diefenbaker International Airport" },
  { code: "YYC", name: "Calgary International Airport" },
  { code: "ZRH", name: "Zurich Airport" },
];
