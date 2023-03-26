import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import Home from "../../../components/Home";
import styles from "@/styles/Home.module.css";

const Resume = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Home />
      <div className={styles.main}>
        <div className={styles.description}>
          Overview | general statement about me + y i code <br />
          Technologies | broken down by FE, BE, DB, etc. <br />
          Experience | ⚒ <br />
          Education | 🎓
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
