import React, { useState } from "react";
import {  Link } from "react-router-dom";
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
    var url = "http://localhost/resource/PHP/signup.php"
    var headers = {
      "Accept":"application/json",
      "Content-type":"application/json"
    }
    fetch(url , {
      method: "POST", 
      headers: headers, 
      body:JSON.stringify(formData)
    }).then((response) => response.json())
    .then((response) => {
      console.log(response)
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <div>SignUp</div>
  )
}
export default SignUpPage