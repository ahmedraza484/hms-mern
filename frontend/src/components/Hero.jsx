import { Link } from "react-router-dom";

const Hero = ({ title, imgUrl }) => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>{title}</h1>
        <p>
          Compassionate telehealth and clinic services, powered by advanced
          technology
        </p>
      </div>

      <div className="hero-image">
        <img src={imgUrl} alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
