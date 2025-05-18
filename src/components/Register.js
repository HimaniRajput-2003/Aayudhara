import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    bloodGroup: '',
    dob: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Form submitted:", formData);
    alert("Registration successful!");
    // You can send formData to a backend API here.
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full Name</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="phone">Phone Number</label>
        <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            />
       

        <label>Gender</label>
        <div className="gender-group">
          <label><input type="radio" name="gender" value="male" onChange={handleChange} required /> Male</label>
          <label><input type="radio" name="gender" value="female" onChange={handleChange} required /> Female</label>
          <label><input type="radio" name="gender" value="other" onChange={handleChange} required /> Other</label>
        </div>

        <label htmlFor="bloodGroup">Blood Group</label>
        <select
          id="bloodGroup"
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          required
        >
          <option value="">--Select Blood Group--</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>

        <label htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
         <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
