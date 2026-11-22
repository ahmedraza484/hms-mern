import React from "react";
import Biography from "../components/Biography";
import biographyImg from "../assets/biography.png";

const About = () => {
  return (
    <>
      <Biography imgUrl={biographyImg} />
    </>
  );
};

export default About;
