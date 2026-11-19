import React from "react";
import Hero from "../components/Hero";
import HeroImg from "../assets/hero.png";

const Home = () => {
  return (
    <>
      <Hero
        title={"Your Health, Our Priority. Expert care anytime, any where."}
        imgUrl={HeroImg}
      />
    </>
  );
};

export default Home;
