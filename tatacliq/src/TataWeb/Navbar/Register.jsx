import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../CONTEXT/AuthContext";


const Register = () => {
  const [userData, setUserData] = useState({ name: "", email: "", password: "", confirmPassword: "", role: "Buyer" })

  const { state } = useContext(AuthContext)
  const router = useNavigate()

  const handleChange = (event) => {
      setUserData({ ...userData, [event.target.name]: event.target.value })
  }
  const selectRole = (event) => {
      setUserData({ ...userData, "role": event.target.value })
  }

  const handleSubmit = async (event) => {
      event.preventDefault();
      if (userData.name && userData.email && userData.password && userData.confirmPassword && userData.role) {
          if (userData.password === userData.confirmPassword) {
              const response = await axios.post("http://localhost:8004/register", { userData });
              if (response.data.success) {
                  setUserData({ name: "", email: "", password: "", confirmPassword: "", role: "Buyer" })
                  router('/login')
                  toast.success(response.data.message)
              } else {
                  toast.error(response.data.message)
              }

          } else {
              toast.error("Password and Confirm Password not Matched.")
          }
      } else {
          toast.error("All fields are mandtory.")
      }
  }
  // console.log(userData, "userData")

  useEffect(() => {
      if (state?.user?.name) {
          router('/')
      }
  }, [state])

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
            <label>Confirm Password :</label>
            <br />
            <input
              type="password"
              name="confirmPassword"
              value={userData.confirmPassword}
              onChange={handleChange}
            />
            <br />
            <button>REGISTER</button>
            <p>
              already have an account? <u >Login</u>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
