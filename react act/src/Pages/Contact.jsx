import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      setErrors({ ...errors, [e.target.name]: "This field is required" });
    } else if (e.target.name === "email" && !/\S+@\S+\.\S+/.test(e.target.value)) {
      setErrors({ ...errors, email: "Invalid email address" });
    } else {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill out all fields.");
      return;
    }

    alert("Message sent successfully!");

    setForm({ name: "", email: "", message: "" });
    setSubmitted(true);
  };

  return (
<section id="contact">
  <h2>Contact</h2>
  <form onSubmit={handleSubmit}>
    <input name="name" placeholder="Name" onBlur={handleBlur} onChange={handleChange} value={form.name} />
    <span className={`error-message ${errors.name ? 'active' : ''}`}>{errors.name}</span>

    <input name="email" placeholder="Email" onBlur={handleBlur} onChange={handleChange} value={form.email} />
    <span className={`error-message ${errors.email ? 'active' : ''}`}>{errors.email}</span>

    <textarea name="message" placeholder="Message" onBlur={handleBlur} onChange={handleChange} value={form.message}></textarea>
    <span className={`error-message ${errors.message ? 'active' : ''}`}>{errors.message}</span>

    <button type="submit">Send</button>

    {submitted && <p style={{ color: "green", marginTop: "10px" }}>Your message has been sent!</p>}
  </form>
</section>
  );
}

export default Contact;