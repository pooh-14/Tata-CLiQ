import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Buyer",
  });

  const router = useNavigate();

  console.log(userData, "userData");
  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userData.name && userData.email && userData.password) {
      const usersArray = JSON.parse(localStorage.getItem("Users")) || [];
      const userDataObj = {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        role: userData.role,
        cart: [],
      };
      usersArray.push(userDataObj);
      localStorage.setItem("Users", JSON.stringify(usersArray));
      setUserData({ name: "", email: "", password: "", role: "Buyer" });
      router("/");
      toast.success("Registration Successfull.");
    } else {
      toast.error("Please fill the all fields.");
    }
  };

  function selectRole(event) {
    console.log(event.target.value, "- role");
    setUserData({ ...userData, ["role"]: event.target.value });
  }

  return (
    <div id="logon">
      <div id="logbox">
        <div id="welcome">
          <i class="fa-solid fa-xmark fa-xl"></i>
          <p>Welcome to Tata CLiQ</p>
        </div>
        <div id="logform">
          <form onSubmit={handleSubmit}>
            <label>Select Role :</label>
            <select onChange={selectRole}>
              <option value="Buyer">Buyer</option>
              <option value="Seller">Seller</option>
            </select>
            <br />
            <label>Enter your Name :</label>
            <br />
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
            />
            <br />
            <label>Enter your Email ID :</label>
            <br />
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
            <br />
            <label>Enter your Password :</label>
            <br />
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
            <br />
            <button>REGISTER</button>
            <p>
              already have an account? <u>Login</u>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
