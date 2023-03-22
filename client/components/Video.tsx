import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Video = () => {
  return (
    <div className="relative w-screen h-screen">
      <video
        autoPlay
        loop
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
        <p className="flex flex-row justify-center text-lg gap-5 px-10 py-5">
          <a href="https://github.com/SophXN" target="_blank">
            <GitHubIcon />
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/sophia-x-nguyen/"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a href="https://cal.com/sophie" target="_blank">
            <CalendarMonthIcon />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Video;
