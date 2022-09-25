import React, { useState, useEffect } from "react";
import "./login.css";
import { registerUser } from './../APi/index'
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import {useNavigate} from 'react-router-dom'
function Signup() {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const register = async () => {
    const data = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };
    registerUser(data)
      .then((res) => {
        console.log("res in signup:", res);
        console.log("res.data.message in signup:", res.data);

        if (res.data.message === "user has been registered") {
          localStorage.setItem("token", res.data.token);
          alert(res.data);
        //   toast.success(res.data, {
        //    theme: "colored"
        //  })
          navigate("/");
        } else {
          // toast.error(res.data, {
          //   theme: "colored"
          // })
          alert(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
        alert("there is an error");
      });
  };
  return (
    <div className="app ">
      <div className="">
        <div className="card card-container mt-5 pt-5" id="Card">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <div>
            <div className="form-group mt-2">
              <label className="Email">firstName</label>
              <input
                type="text"
                required="required"
                className="form-control"
                name="firstName"
                value={firstName}
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}

              />
            </div>
            <div className="form-group mt-2">
              <label className="Email">lastName</label>
              <input
                type="text"
                required="required"
                className="form-control"
                name="lastName"
                value={lastName}
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
              />
            </div>
            <div className="form-group mt-2">
              <label className="Email">Email</label>
              <input
                type="email"
                required="required"
                className="form-control"
                name="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>

            <div className="form-group mt-2">
              <label className="Email">Password</label>
              <input type="password" className="form-control"  value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }} />
            </div>
            <div className="form-group mt-2">
              <label className="Email">Confirm Password</label>
              <input type="password" className="form-control"    value={confirmPassword}
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                }} />
            </div>

            <div className="form-group">
              <button
                                  onClick={() => register()}

                className="btn btn-primary  mt-3"
                id="Login"
                disabled={!email || !password}
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
