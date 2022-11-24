import React, { Component } from "react";
import Axios from 'axios';
import '../Form.css';
import constants from "../../constants.json";

export default class SignUp extends Component {
    constructor(props) {
        super (props);
        this.state = {
            username: "",
            name: "",
            passwordHash: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { username, name, passwordHash } = this.state;
        console.log(username, name, passwordHash);
        fetch("https://e-commerce-web-app-be.herokuapp.com/auth/register", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            username,
            name,
            passwordHash,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "userRegister");
          });
      }

    render() {
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
                            Get Started with us today! Create your account by filling out the information out here
                            below.
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
                                placeholder='Enter your username'
                                onChange={e => this.setState({username: e.target.value})}
                            />
                        </div>
                        <div className='form-inputs'>
                            <label  htmlFor='name'
                                    className='form-label'>
                                        name
                            </label>
                            <input
                                id='name'
                                type='name'
                                name='name'
                                required='name require'
                                className='form-input'
                                placeholder='Enter your name'
                                onChange={e => this.setState({name: e.target.value})}
                            />
                        </div>
                        <div className='form-inputs'>
                            <label htmlFor='password'
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
                                onChange={e => this.setState({passwordHash: e.target.value})}
                            />
                        </div>
                        <button className='form-input-btn'
                            type='submit'>
                            Sign up
                        </button>
                        <span className='form-input-login'>
                            Already have an account? Sign In <a href='/sign-in'>here</a>
                        </span>
                    </form>
                </div>
            </div>
        )
    }
}