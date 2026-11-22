import React, { useState } from "react";

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
    <section className="message-section">
      <form className="message-form" onSubmit={handleSubmit}>
        <h1>Send Us A Message</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Mobile Number"
            value={phone}
            onChange={(e) => {
              setphone(e.target.value);
            }}
          />
        </div>

        <textarea
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button className="btn" type="submit">
          Send
        </button>
      </form>
      </section>
    </>
  );
};

export default MessageForm;
