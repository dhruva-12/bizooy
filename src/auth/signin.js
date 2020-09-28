import React from 'react';
import logo from '../assets/images/bizooy-logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthService from "../api/auth.service";

import { withRouter } from "react-router";

const Signin = ({ history }) => {

    const handleSubmit = async (event) => {

        event.preventDefault();

        alert(event.target.email.value);

        try {

            const loggedInUser = await AuthService.login({
                email: event.target.email.value,
                password: event.target.password.value,
            }); 

            console.log(loggedInUser);
            // if (app.options.apiKey !== "REACT_APP_FIREBASE_KEY") {
            //     await app
            //         .auth()
            //         .signInWithEmailAndPassword(email, password);
            //     setValue(man);
            //     history.push(`${process.env.PUBLIC_URL}/dashboard/default`);
            // }
            // else {
            //     history.push(`${process.env.PUBLIC_URL}/dashboard/default`);
            // }
        } catch (error) {
            setTimeout(() => {
                toast.error("Oppss.. The password is invalid or the user does not have a password.");
            }, 200);
        }
    }

    //un-comment this loginAuth Function when u want use login with firebase only 
    // const loginAuth = async () => {
    //     try {
    //         await app
    //             .auth()
    //             .signInWithEmailAndPassword(email, password);
    //         setValue(man);
    //         history.push(`${process.env.PUBLIC_URL}/dashboard/default`);

    //     } catch (error) {
    //         setTimeout(() => {
    //             toast.error("Oppss.. The password is invalid or the user does not have a password.");
    //         }, 200);
    //     }
    // }

    return (
        <div>
            <div className="page-wrapper">
                <div className="container-fluid p-0">
                    {/* <!-- login page start--> */}
                    <div className="authentication-main">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="auth-innerright">
                                    <div className="authentication-box">
                                        <div className="text-center">
                                            <img src={logo} alt="" /></div>
                                        <div className="card mt-4">
                                            <div className="card-body">
                                                <div className="text-center">
                                                    <h4>LOGIN</h4>
                                                    <h6>Enter your Username and Password </h6>
                                                </div>
                                                < form className = "theme-form"
                                                onSubmit = {
                                                    handleSubmit
                                                } >
                                                    <div className="form-group">
                                                        <label className="col-form-label pt-0">Your Name</label>
                                                        <input className="form-control" type="email" name="email"
                                                            placeholder="Email address"
                                                        />
                                                        {/* {errors.email && 'Email is required'} */}
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-form-label">Password</label>
                                                        <input className="form-control" type="password" name="password" />
                                                        {/* {errors.password && 'Email is required'} */}
                                                    </div>
                                                    <div className="form-group form-row mt-3 mb-0">
                                                        <button className="btn btn-primary btn-block" type="submit">Login</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ToastContainer />
                    {/* <!-- login page end--> */}
                </div>
            </div>
        </div>
    );
};

export default withRouter(Signin);