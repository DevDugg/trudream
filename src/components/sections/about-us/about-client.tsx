import AboutCard from "./about-card";
import React from "react";
import { aboutData } from "@/data/about-us.data";

const AboutClient = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 sm:gap-6">
      {aboutData.map((item, i) => (
        <AboutCard key={i} {...item} />
      ))}
    </div>
  );
};

export default AboutClient;
