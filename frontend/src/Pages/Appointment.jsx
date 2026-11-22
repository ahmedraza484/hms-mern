import React from 'react'
import Hero from '../components/Hero'
import appointmentImg from "../assets/appointment-img.png";
import AppointmentForm from '../components/AppointmentForm';

const Appointment = () => {
  return (
    <>
    <Hero
        title={"Scedule Your Appointment"}
        imgUrl={appointmentImg}
      />
      <AppointmentForm/>
    </>
  )
}

export default Appointment