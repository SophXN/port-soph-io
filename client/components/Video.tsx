import React from "react";
const Video = () => {
  return (
    <div className="relative w-screen h-screen">
      <video
        autoPlay
        // loop
        muted
        className="absolute z-0 w-screen h-screen object-cover"
      >
        <source src="/clouds.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 flex flex-col justify-center items-end text-white h-full">
        <h1 className="font-mono text-4xl font-bold mb-4 px-10">
          sophie nguyen
        </h1>
        <p className="text-lg px-10">full stack engineer</p>
      </div>
    </div>
  );
};

export default Video;
