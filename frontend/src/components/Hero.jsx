import { Link } from "react-router-dom";

const Hero = ({ title, imgUrl }) => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>{title}</h1>
          <p>
            Compassionate telehealth and clinic services, powered by advanced
            technology
          </p>
          <Link to="/appointment" className="appointment-btn">
            <button>Book Appointment</button>
          </Link>
          {/* <button className="appointment-btn">
            <Link to="/appointment">Book An Appointment</Link>
          </button> */}
        </div>
        <div className="hero-content">
          <img src={imgUrl} alt="" />
        </div>
      </section>
    </>
  );
};

export default Hero;
