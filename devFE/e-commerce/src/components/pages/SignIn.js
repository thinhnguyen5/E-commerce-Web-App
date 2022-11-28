import React, { Component } from 'react';
import '../Form.css';
export default class SignIn extends Component  {
    constructor(props) {
        super(props);
        this.state = {
          username: "",
          passwordHash: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleSubmit(e) {
        e.preventDefault();
        const { username, passwordHash } = this.state;
        fetch("https://e-commerce-web-app-be.herokuapp.com/auth/login", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            username,
            passwordHash,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "userLogin");
            if (data.status == "ok") {
              alert("login successful");
              window.localStorage.setItem("accessToken", data.data);
              window.location.href = "./userDetail";
            }
          });
        }

      render() 
      {
        return (
          <div className='form-container'>
            <span className='close-btn'></span>
            <div className='form-content-left'>
              <img src='images/img13.jpg' alt='spacecoffee'
                   className='form-img'/>
            </div>
            <div className="form-content-right">
              <form className="form" onSubmit={this.handleSubmit}>
                <h1>
                  If you have an account already, sign in here !
                </h1>
                <div className='form-inputs'>
                    <label  htmlFor='username'
                            className='form-label'>
                            Username
                    </label>
                      <input
                          id='username'
                          type='username'
                          name='username'
                          required='username require'
                          className='form-input'
                          placeholder='Enter your name'
                          onChange={(e) => this.setState({ username: e.target.value })}
                      />
                </div>
                <div className='form-inputs'>
                    <label  htmlFor='password'
                            className='form-label'>
                            Password
                    </label>
                      <input
                          id='password'
                          type='password'
                          name='password'
                          required='password require'
                          className='form-input'
                          placeholder='Enter your password'
                          onChange={(e) => this.setState({ passwordHash: e.target.value })}
                      />
                </div>
                <button className='form-input-btn'
                        type='submit'>
                        Sign In
                </button>
                <span className='form-input-register'>
                  If you have not a account yet ? Register <a href='/sign-up'>here</a>
                </span>
              </form>
            </div>
          </div>
        )
      }
  }
