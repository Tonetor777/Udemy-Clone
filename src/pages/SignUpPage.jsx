import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "", 
    role: "student"
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/UDEMY/PHP/signup.php";
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(formData)
      });

      const responseBody = await response.text(); // Get raw response text
      try {
        const jsonResponse = JSON.parse(responseBody); // Try to parse as JSON
        console.log(jsonResponse);
        if (jsonResponse.status === 'success') {
          // Handle success
        } else {
          setError(jsonResponse.message || "An error occurred");
        }
      } catch (e) {
        // Handle non-JSON response
        console.error("Non-JSON response:", responseBody);
        setError("An unexpected error occurred");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("An error occurred while sending the request");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen font-sans">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold ml-4 mb-8">
          Sign up and start learning
        </h1>
        {error && <div className="text-red-600">{error}</div>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="border px-6 border-black overflow-hidden transition-all duration-300">
            <label htmlFor="firstName" className="block mb-1 pt-8 font-semibold">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 focus:outline-none"
              required
            />
          </div>
          <div className="border px-6 border-black overflow-hidden transition-all duration-300">
            <label htmlFor="lastName" className="block mb-1 pt-8 font-semibold">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 focus:outline-none"
              required
            />
          </div>
          <div className="border px-6 border-black overflow-hidden">
            <label htmlFor="email" className="block mb-1 pt-8 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded px-3 focus:outline-none"
              required
            />
          </div>
          <div className="border px-6 border-black overflow-hidden">
            <label htmlFor="password" className="block mb-1 pt-8 font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded px-3 focus:outline-none"
              required
            />
          </div>
          <div>
            <input
              type="checkbox"
              id="special-offers"
              name="special-offers"
              className="mr-2 ml-2 border-black"
            />
            <label className="text-2xl font-normal" htmlFor="special-offers">
              Send me special offers, personalized recommendations, and learning
              tips
            </label>
            </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-5 font-bold rounded mb-8 hover:bg-purple-700"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-8 text-gray-800 text-lg mb-10">
          <p>
            By signing up, you agree to our Terms of use and Privacy Policy.
          </p>
        </div>
        <div>
          <hr />
        </div>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-900 font-bold underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
