import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css" //only bulma

const Register = () => {
  const [name, setName] = useState("");
  const [validName, setvalidName] = useState('');
  const [email, setEmail] = useState("");
  const [validMail, setvalidMail] = useState('');
  const [password, setPassword] = useState("");
  const [validPass, setvalidPass] = useState('');
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const addUser = async (e) => {
    e.preventDefault();
    try {
      await axios({
        method: 'post',
        url: "http://localhost:5000/register",
        data: {
          name: name,
          email: email,
          password: password,
          confPassword: confPassword,
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
      setvalidName('Username already exists!');
    }
  };

  const checkUsername = (e) =>{
    setName(e.target.value);
    if(name.length===0) {
      setvalidName('Please enter a username')
    } else {
      setvalidName('');
      return true;
    }
  }

  const regex = /\S+@\S+\.\S+/;
  const checkEmail = (e) =>{
    setEmail(e.target.value);
    if(regex.test(email)===false) {
      setvalidMail('Please enter valid Email')
    } else {
      setvalidMail('');
      return true;
    }
  }


  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const checkPass = (e) =>{
    e.preventDefault();
    setPassword(e.target.value);
    if(e.target.value === confPassword){
      setMsg("");
    } else{
      setMsg('Passwords do not match!');
    }
    if(passRegex.test(password)){
      setvalidPass('Please enter a valid password!');
    } else{
      setvalidPass('');
      return true;
    }
  }

  const checkConfirmPass = (e) => {
    setConfPassword(e.target.value);
    if(e.target.value===password) {
      setMsg('');
    } else {
      setMsg('Passwords do not match');
      return true;
    }
  }



  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
              <form onSubmit={addUser} className="box">
                <div className="field mt-5">
                  <label className="label">Username</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      placeholder="Username"
                      value={name}
                      onChange={checkUsername}
                    />
                  </div>
                  <p class="help is-danger">{validName}</p>
                </div>
                <div className="field mt-5">
                  <label className="label">Email</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      placeholder="Email"
                      value={email}
                      autoComplete="off"
                      onChange={checkEmail}
                    />
                  </div>
                  <p class="help is-danger">{validMail}</p>
                </div>
                <div className="field mt-5">
                  <label className="label">Password</label>
                  <div className="controls">
                    <input
                      type="password"
                      className="input"
                      placeholder="********"
                      autoComplete="off"
                      value={password}
                      onChange={checkPass}
                    />
                  </div>
                  <p class="help is-danger">{validPass}</p>
                </div>
                <div className="field mt-5">
                  <label className="label">Confirm Password</label>
                  <div className="controls">
                    <input
                      type="password"
                      className="input"
                      placeholder="********"
                      value={confPassword}
                      onChange={checkConfirmPass}
                    />
                  </div>
                  <p class="help is-danger">{msg}</p>
                </div>
                <div className="field mt-5">
                  <button className="button is-success">
                    Register
                  </button>
                </div>
                <div className="field mt-5">
                  <p>Already have an account?</p>
                  <a href="login">Login</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;