import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import FlightLottie from "../public/flightlottie.json";

const AnimatedHeader: React.FC = () => {
  return (
    <div className="mt-[-200px]">
      <Player src={FlightLottie} className="player" loop autoplay />{" "}
    </div>
  );
};

export default AnimatedHeader;
