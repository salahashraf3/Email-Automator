import React, { useState } from "react";
import Button from "./button";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";

const LoginRegisterForm = ({ formType }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRepassword] = useState("");
  const [checkPass, setCheckPass] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [reSpinner,setReSpinner] =useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === "login") {
      console.log(email, password);
    } else {
      console.log(email, password, rePassword);
    }
  };
  

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (password.length >= 5) {
      setCheckPass(true);
    } else {
      setCheckPass(false);
    }
  };

  return (
    <div className="form_container">
      <div className="form_wrapper">
        <form onSubmit={handleSubmit} className="form">
          <h2>{formType === "login" ? "Login" : "Register"}</h2>
          <div className="input_box">
            <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            <i className="bx bxs-envelope"></i>
          </div>
          {formType === "register" && (
            <div className="input_box">
              <input
                type="password"
                placeholder="Enter Password"
                onChange={handlePasswordChange}
                onFocus={() => setSpinner(true)}
                onBlur={() => setSpinner(false)}
              />
              {spinner ? (
                <i>
                  <BeatLoader color="black" size={6} />
                </i>
              ) : checkPass ? (
                <i className="bx bx-check" style={{ color: "#008300" }}></i>
              ) : (
                <i className="bx bxs-lock-alt"></i>
              )}
            </div>
          )}
          {formType === "register" && (
            <div className="input_box">
              <input
                type="password"
                placeholder="Re-enter Password"
                onChange={(e) => setRepassword(e.target.value)}
                onFocus={() => setReSpinner(true)}
                onBlur={() => setReSpinner(false)}
              />
              {reSpinner ? (
                <i>
                  <BeatLoader color="black" size={6} />
                </i>
              ) : (
                <i class="bx bxs-lock-alt"></i>
              )}
            </div>
          )}
          {formType === "login" && (
            <div className="input_box">
            <input
              type="password"
              placeholder="Enter Password"
              onChange={handlePasswordChange}
              onFocus={() => setSpinner(true)}
              onBlur={() => setSpinner(false)}
            />
            {spinner ? (
              <i>
                <BeatLoader color="black" size={6} />
              </i>
            ) : checkPass ? (
              <i className="bx bx-check" style={{ color: "#008300" }}></i>
            ) : (
              <i className="bx bxs-lock-alt"></i>
            )}
          </div>
          )}
          <div className="btn_group">
            <Button className="btn_send">
              {formType === "login" ? "Login" : "Register"}
            </Button>
            <Link to={formType === "login" ? "/register" : "/login"}>
              <Button className="btn_edit">
                {formType === "login" ? "Register" : "Login"}
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginRegisterForm;
