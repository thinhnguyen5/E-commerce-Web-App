import React, { Component } from "react";
import {useNavigate} from "react-router-dom";
import '../userData.css'

export default class UserDetail extends Component {
    constructor(props) {
      super(props);
      this.state = {
        userData: "",
      };
    this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
      fetch("https://e-commerce-web-app-be.herokuapp.com/auth/userData", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          accessToken: window.localStorage.getItem("accessToken"),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userData");
          this.setState({ userData: data.data });
        });
    }

    handleClick = () => {
        localStorage.clear();
        window.location.href = "./sign-in";
        // if(!localStorage.getItem('accessToken')) {
        //     navigate('/sign-in')
        // }
    }

    render() {
      return (
        <>
            <section className="p-8 max-w-6xl mx-auto">
                <div className="text-center">
                    <h1 className="flex items-center justify-center text-slate-800 text-center px-5 text-3xl lg:text-5xl mb-10">
                        Welcome Back!
                    </h1>
                </div>
                <div>
                    <div className="auth-wrapper">
                        <div className="auth-inner">
                            <div>
                                Username:<h1>{this.state.userData.username}</h1>
                                Name: <h1>{this.state.userData.name}</h1>
                            </div>
                        </div>
                        <button
                            onClick={this.handleClick }
                            className="mb-10 mt-10 content-end lg:flex-1 cursor-pointer flex items-center justify-center gap-4 bg-white py-2 px-4 font-bold rounded-lg shadow hover:bg-slate-600 transition-all duration-200 ml-96">Logout</button>
                    </div>
                </div>
            </section>
        </>
      );
    }
}