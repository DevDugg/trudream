import { aboutData } from "@/data/about-us.data";
import React from "react";
import AboutCard from "./about-card";

const AboutClient = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 sm:gap-6">
      {aboutData.map((item) => (
        <AboutCard key={item.title} {...item} />
      ))}
    </div>
  );
};

export default AboutClient;
