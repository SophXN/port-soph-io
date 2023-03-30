import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className="relative w-screen h-screen">
      {/* <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-screen h-screen object-cover"
      >
        <source src="/clouds.mp4" type="video/mp4" />
      </video> */}

      <div className="z-10 flex flex-col justify-center items-center text-white h-full">
        <p className="text-md px-10">👩🏻‍💻</p>
        <h1 className="font-mono text-4xl font-bold mb-4 px-10">
          sophie nguyen
        </h1>
        <p className="text-md px-10">Fun Stack Engineer</p>
        <p className="text-md px-10">
          Developing web-based applications on the clock, and trying to outsmart
          AI off the clock.
          <br />
        </p>
      </div>
    </div>
  );
};

export default Intro;
