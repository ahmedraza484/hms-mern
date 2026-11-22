import React from "react";
import img1 from "../assets/cardiologist.jpg";
import img2 from "../assets/dermatologist.jpg";
import img3 from "../assets/neurologist.jpg";
import img4 from "../assets/oncologist.jpg";
import img5 from "../assets/ophthalmologist.jpg";
import img6 from "../assets/Orthopedic.jpg";
import img7 from "../assets/pediatric.jpg";
import img8 from "../assets/radiologist.jpg";

const Departments = () => {
  const departmentData = [
    {
      id: 1,
      title: "Cardiology",
      img: img1,
    },
    {
      id: 2,
      title: "Dermatologist",
      img: img2,
    },
    {
      id: 3,
      title: "Neurologist",
      img: img3,
    },
    {
      id: 4,
      title: "Oncologist",
      img: img4,
    },
    {
      id: 5,
      title: "Ophthalmologist",
      img: img5,
    },
    {
      id: 6,
      title: "Orthopedic",
      img: img6,
    },
    {
      id: 7,
      title: "Pediatric",
      img: img7,
    },
    {
      id: 8,
      title: "Radiologist",
      img: img8,
    },
  ];
  return (
    <section className="department-section">
      <h2>Departments</h2>
      {departmentData.map((item) => (
        <div className="department-card" key={item.id}>
          <img src={item.img} alt={item.title} className="department-img" />
          <div className="department-label">
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Departments;
