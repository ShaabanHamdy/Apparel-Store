"use client";
import React, { useState } from "react";

const nationalities = ["Egyptian", "Saudi", "Emirati", "American", "Other"];

const Register = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    bDay: "",
    bMonth: "",
    bYear: "",
    gender: "",
    password: "",
    confirmPassword: "",
    nationality: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send form to API
    alert("Registered!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <div className="flex gap-2">
          <input
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-1/2"
            required
          />
          <input
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-1/2"
            required
          />
        </div>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-full"
          required
        />
        <input
          name="mobile"
          placeholder="Mobile"
          value={form.mobile}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-full"
          required
        />
        <div className="flex gap-2">
          <input
            name="bDay"
            type="number"
            min={1}
            max={31}
            placeholder="Day"
            value={form.bDay}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-1/3"
            required
          />
          <input
            name="bMonth"
            type="number"
            min={1}
            max={12}
            placeholder="Month"
            value={form.bMonth}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-1/3"
            required
          />
          <input
            name="bYear"
            type="number"
            min={1900}
            max={2100}
            placeholder="Year"
            value={form.bYear}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-1/3"
            required
          />
        </div>
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-full"
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <select
          name="nationality"
          value={form.nationality}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-full"
          required
        >
          <option value="">Select Nationality</option>
          {nationalities.map((nat) => (
            <option key={nat} value={nat}>
              {nat}
            </option>
          ))}
        </select>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-full"
          required
        />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-full"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
