import React, { useState } from "react";
import axios from "axios";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    year: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/students", formData);
      alert("✅ Student added successfully!");
      setFormData({ name: "", email: "", course: "", year: "" });
    } catch (error) {
      alert("❌ Error adding student!");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="text" name="course" placeholder="Course" value={formData.course} onChange={handleChange} required />
      <input type="number" name="year" placeholder="Year" value={formData.year} onChange={handleChange} required />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;
