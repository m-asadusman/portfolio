import { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {

      const res = await fetch("https://formspree.io/f/mrewvyqn", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (res.ok) {
        setStatus("sent");
        setValues({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="contact-form contact-form--sent">
        <p className="eyebrow">Message sent</p>
        <p>Thanks — I'll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <label htmlFor="name">
          <span className="eyebrow">Name</span>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={values.name}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="email">
          <span className="eyebrow">Email</span>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={handleChange}
          />
        </label>
      </div>

      <label htmlFor="message">
        <span className="eyebrow">Message</span>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={handleChange}
        />
      </label>

      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {status === "error" && (
        <p className="contact-form__error">
          Something went wrong — try again, or email me directly.
        </p>
      )}
    </form>
  );
}