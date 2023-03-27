/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import styles from "@/styles/Resume.module.css";

const Resume = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          Technologies | broken down by FE, BE, DB, etc.
          <img
            height="30"
            width="33"
            src="https://user-images.githubusercontent.com/25181517/192107854-765620d7-f909-4953-a6da-36e1ef69eea6.png"
            alt="HTTP"
            title="HTTP"
          />
          <img
            height="30"
            width="33"
            src="https://user-images.githubusercontent.com/25181517/192107856-aa92c8b1-b615-47c3-9141-ed0d29a90239.png"
            alt="GraphQL"
            title="GraphQL"
          />
          <img
            height="30"
            width="33"
            src="https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png"
            alt="REST"
            title="REST"
          />
          <img
            height="30"
            width="33"
            src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png"
            alt="HTML"
            title="HTML"
          />
          <img
            height="30"
            width="33"
            src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png"
            alt="CSS"
            title="CSS"
          />
          <img
            height="30"
            width="33"
            src="https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png"
            alt="Figma"
            title="Figma"
          />
          <img
            height="30"
            width="33"
            src="https://user-images.githubusercontent.com/25181517/189716630-fe6c084c-6c66-43af-aa49-64c8aea4a5c2.png"
            alt="Material UI"
            title="Material UI"
          />
          <img
            height="30"
            width="33"
            src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"
            alt="JavaScript"
            title="JavaScript"
          />
          <img
            height="30"
            width="33"
            src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
            alt="React"
            title="React"
          />
          <img
            height="30"
            width="33"
            src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png"
            alt="TypeScript"
            title="TypeScript"
          />
          <img
            height="30"
            width="33"
            src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png"
            alt="Node.js"
            title="Node.js"
          />
          <img
            height="30"
            width="33"
            src="https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png"
            alt="Redux"
            title="Redux"
          />
          <img
            height="30"
            width="33"
            src="https://user-images.githubusercontent.com/25181517/187955005-f4ca6f1a-e727-497b-b81b-93fb9726268e.png"
            alt="Jest"
            title="Jest"
          />
          <img
            height="30"
            width="33"
            src="https://user-images.githubusercontent.com/25181517/192149581-88194d20-1a37-4be8-8801-5dc0017ffbbe.png"
            alt="Go"
            title="Go"
          />
          <img
            height="30"
            width="33"
            src="https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png"
            alt="PostgreSQL"
            title="PostgreSQL"
          />
          <img
            height="30"
            width="33"
            src="https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png"
            alt="MySQL"
            title="MySQL"
          />
          <img
            height="30"
            width="33"
            src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png"
            alt="mongoDB"
            title="mongoDB"
          />
          <img
            height="30"
            width="33"
            src="https://user-images.githubusercontent.com/25181517/117207330-263ba280-adf4-11eb-9b97-0ac5b40bc3be.png"
            alt="Docker"
            title="Docker"
          />
          <img
            height="30"
            width="33"
            src="https://user-images.githubusercontent.com/25181517/183868728-b2e11072-00a5-47e2-8a4e-4ebbb2b8c554.png"
            alt="CI/CD"
            title="CI/CD"
          />
          <img
            height="30"
            width="33"
            src="https://user-images.githubusercontent.com/25181517/183345125-9a7cd2e6-6ad6-436f-8490-44c903bef84c.png"
            alt="Nginx"
            title="Nginx"
          />
          <img
            height="30"
            width="33"
            src="https://user-images.githubusercontent.com/25181517/183896132-54262f2e-6d98-41e3-8888-e40ab5a17326.png"
            alt="AWS"
            title="AWS"
          />
          <img
            height="30"
            width="33"
            src="https://user-images.githubusercontent.com/25181517/183911547-990692bc-8411-4878-99a0-43506cdb69cf.png"
            alt="GCP"
            title="GCP"
          />
          <br />
        </div>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Technologies" />
          <Tab label="Experience" />
          <Tab label="Education" />
        </Tabs>
      </div>
    </>
  );
};

export default Resume;
