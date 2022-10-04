import React, { useState, useEffect } from "react";
import { loginUser } from "./../APi/index";
import { useNavigate } from "react-router-dom";
import "./login.css";
function Login() {
  let navigate  = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const data = {
      email,
      password,
    };
    loginUser(data)
      .then((res) => {
        console.log("res in login::", res);
        if (res.data.message === "user login Successfully") {
          localStorage.setItem("token", res.data.token);
          alert(res.data.message)
          navigate("/");
        }
        else {

          alert(res.data.message)
        }
      })
      .catch((error) => {
        console.log(error);
        alert("there is an error");
      });
    // window.location.reload();
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

            <div >
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
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />

              </div>

              <div className="form-group">
                <button

                  className="btn btn-primary  mt-3"
                  id="Login"
                  onClick={() => login()}


                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
}

export default Login;

