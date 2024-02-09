import React from 'react';
import '../assets/css/login.css'; // Import your CSS file
import rubeesLogo from '../assets/images/rubees-logo.png';
import elementaryLogo from '../assets/images/elementary-logo.png';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { setCookie } from '../utils/cookies';

function Login() {
    const [email, userEmail] = useState('')
    const [password, userPassword] = useState('')

    const History = useNavigate();

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/login", {
                email, password
            });
            if (response.data === "User Confirmed") {
                History("/home", { state: { id: email } });
                setCookie("name", email, 5)
            } else if (response.data === "Email not registered") {
                alert("Please sign up");
            }
        } catch (error) {
            alert("Wrong Credentials");
            console.log(error);
        }
    }

    return (

        <div className="body background" style={{ backgroundImage: 'url(' + require('../assets/images/login-background-image.png') + ')' }}>


            <div className="login-parent-container">

                <div className="login-parent-container-first-column">

                    <div className="login-child-container-first-column">

                        <div className="login-child-container-rubees-logo-row">
                            <div className="rubees-logo-holder">
                                <img src={rubeesLogo} width="40px" alt="Rubees logo" />
                                <span className="rubees-text-holder">rubees</span>
                            </div>
                        </div>

                        <div className="elementary-logo-holder">
                            <img src={elementaryLogo} width="300px" alt="Elementary logo" />
                            <p className="elementary-text-holder">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Praesent tincidunt leo nisl, et varius justo tincidunt eget.
                                Pellentesque at sodales orci.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="login-parent-container-second-column">

                    <div className="login-child-container-second-column">
                        <div className="form-holder">
                            <div className="login-text-holder">
                                <b>Sign In</b>
                            </div>

                            <form onSubmit={submit}>
                                <div className="form__group field">
                                    <input type="email" className="form__field" onChange={(e) => (userEmail(e.target.value))} placeholder="Email" id='email' required />
                                    <label htmlFor="email" className="form__label">Email</label>
                                </div>

                                <div className="form__group field">
                                    <input type="password" className="form__field" onChange={(e) => (userPassword(e.target.value))} placeholder="Password" id='password' required />
                                    <label htmlFor="password" className="form__label">Password</label>
                                </div>

                                <button className="login-button login-button-bg" type='submit'>Continue</button>
                            </form>

                            <div className="login-connect-with-holder">
                                <span className="login-connect-with-text">Or Connect with...</span>
                            </div>

                            <div className="login-connect-with-holder-icons">
                                <svg width="40" height="40" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="43.5" cy="43.5" r="43.5" fill="#9b9b9b" />
                                    <path d="M54.2699 36.0909V44.2727H31.8153V36.0909H54.2699ZM36.4972 71V34.3182C36.4972 31.6212 37.0047 29.3864 38.0199 27.6136C39.035 25.8258 40.4441 24.4924 42.2472 23.6136C44.0502 22.7197 46.1335 22.2727 48.4972 22.2727C50.0426 22.2727 51.4972 22.3939 52.8608 22.6364C54.2396 22.8636 55.2623 23.0682 55.929 23.25L54.1562 31.3864C53.7472 31.25 53.2472 31.1364 52.6562 31.0455C52.0805 30.9545 51.535 30.9091 51.0199 30.9091C49.7169 30.9091 48.8229 31.197 48.3381 31.7727C47.8532 32.3485 47.6108 33.1364 47.6108 34.1364V71H36.4972Z" fill="white" />
                                </svg>

                                <svg width="40" height="40" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="43.5" cy="43.5" r="43.5" fill="#9b9b9b" />
                                    <path d="M50.6527 37.4943C50.4595 36.7784 50.1754 36.1477 49.8004 35.6023C49.4254 35.0455 48.9652 34.5739 48.4197 34.1875C47.8743 33.8011 47.2493 33.5114 46.5447 33.3182C45.8402 33.1136 45.0675 33.0114 44.2266 33.0114C42.5334 33.0114 41.0675 33.4205 39.8288 34.2386C38.6016 35.0568 37.6527 36.25 36.9822 37.8182C36.3118 39.375 35.9766 41.267 35.9766 43.4943C35.9766 45.733 36.3004 47.642 36.9482 49.2216C37.5959 50.8011 38.5334 52.0057 39.7607 52.8352C40.9879 53.6648 42.4766 54.0795 44.2266 54.0795C45.772 54.0795 47.0788 53.8295 48.147 53.3295C49.2266 52.8182 50.0447 52.0966 50.6016 51.1648C51.1584 50.233 51.4368 49.1364 51.4368 47.875L53.005 48.0625H44.5163V41.9091H59.5675V46.5284C59.5675 49.6534 58.9027 52.3295 57.5732 54.5568C56.255 56.7841 54.4368 58.4943 52.1186 59.6875C49.8118 60.8807 47.1584 61.4773 44.1584 61.4773C40.8288 61.4773 37.9027 60.7557 35.38 59.3125C32.8572 57.8693 30.8913 55.8125 29.4822 53.142C28.0732 50.4602 27.3686 47.2784 27.3686 43.5966C27.3686 40.733 27.7947 38.1932 28.647 35.9773C29.4993 33.75 30.6868 31.8636 32.2095 30.3182C33.7436 28.7727 35.5163 27.6023 37.5277 26.8068C39.5504 26.0114 41.7266 25.6136 44.0561 25.6136C46.0788 25.6136 47.9595 25.9034 49.6982 26.483C51.4482 27.0625 52.9936 27.8807 54.3345 28.9375C55.6868 29.9943 56.7834 31.25 57.6243 32.7045C58.4652 34.1591 58.9879 35.7557 59.1925 37.4943H50.6527Z" fill="white" />
                                </svg>
                            </div>

                            <div className="sign-up-holder">
                                <span className="no-account-text">Don't have an account?</span>
                                <Link to="/signup" className="sign-up-text">Sign up</Link>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
};

export default Login;
