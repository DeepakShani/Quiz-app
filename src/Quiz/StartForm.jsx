import React, { useState } from "react";

export default function StartForm({ onSubmit }) {
  const [form, setForm] = useState({ name: "", email: "", age: "", gender: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.age || !form.gender) {
      alert("Please fill all details!");
      return;
    }
    onSubmit(form);
  };

  return (
    <div className="start-form-card fade-up">
      <h2 className="form-title">Enter Your Details</h2>

      <form onSubmit={handleSubmit} className="form-grid">
        <label className="form-label">Full Name</label>
        <input type="text" name="name" placeholder="Enter your full name" className="form-input" onChange={handleChange} />

        <label className="form-label">Email</label>
        <input type="email" name="email" placeholder="Enter your email" className="form-input" onChange={handleChange} />

        <label className="form-label">Age</label>
        <input type="number" name="age" placeholder="Enter your age" className="form-input" onChange={handleChange} />

        <label className="form-label">Gender</label>
        <select name="gender" className="form-input" onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <button type="submit" className="btn btn-primary mt-3">Start Quiz</button>
      </form>
    </div>
  );
}
