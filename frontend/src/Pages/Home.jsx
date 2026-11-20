import React from "react";
import Hero from "../components/Hero";
import HeroImg from "../assets/hero.png";
import biographyImg from "../assets/biography.png";
import Biography from "../components/Biography";
import Departments from "../components/Departments";
import MessageForm from "../components/MessageForm";

const Home = () => {
  return (
    <>
      <Hero
        title={"Your Health, Our Priority. Expert care anytime, any where."}
        imgUrl={HeroImg}
      />
      <Biography imgUrl={biographyImg} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
