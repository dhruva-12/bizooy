import React, { useState } from 'react';
import logo from '../assets/images/bizooy-logo.png';
import { signin } from '../actions/auth.action'
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, useHistory } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [name, setName] = useState(null);
    const [pass, setPass] = useState(null);

    let history = useHistory();

    const dispatch = useDispatch();

    const isAuthenticated = useSelector((state) => state.authUser.isAuthenticated);
    const isLoading = useSelector((state) => state.authUser.isLoading);
    
    const loginAuth = (e) => {
        e.preventDefault();
        dispatch(signin(name, pass));
        if (isLoading) {
            toast.info("Loading...", {
                position: "top-center",
                autoClose: 5000,
            });
        }
    }

    return (
        <div>
            <div className="page-wrapper">
                {
                    (isAuthenticated) ?
                        history.push(`${process.env.PUBLIC_URL}/dashboard`)
                        :
                        null
                }
                <div className="container-fluid p-0">
                    {/* <!-- login page start--> */}
                    <div className="authentication-main">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="auth-innerright">
                                    <div className="authentication-box">
                                        <div className="text-center"><img src={logo} alt="" /></div>
                                        <div className="card mt-4">
                                            <div className="card-body">
                                                <div className="text-center">
                                                    <h4>LOGIN</h4>
                                                    <h6>Enter your Username and Password </h6>
                                                </div>
                                                <form className="theme-form">
                                                    <div className="form-group">
                                                        <label className="col-form-label pt-0">Your Name</label>
                                                        <input className="form-control" type="text" required="" onChange={e => setName(e.target.value)} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-form-label">Password</label>
                                                        <input className="form-control" type="password" required="" onChange={e => setPass(e.target.value)} />
                                                    </div>
                                                    <div className="form-group form-row mt-3 mb-0">
                                                        <div className="col-sm-12">
                                                            <div className="mt-2 text-center"><a className="btn-link text-capitalize" href="/pages/resetPwdWithEmail">Forgot Password?</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group form-row mt-3 mb-0">
                                                        <button className="btn btn-primary btn-block" type="submit" onClick={(e) => loginAuth(e)}>Login</button>
                                                    </div>
                                                    <div className="form-group form-row mt-3 mb-0">
                                                        <div className="col-sm-12">
                                                            <div className="mt-2 text-center">Are you a new user?&nbsp;&nbsp;<a className="btn-link text-capitalize" href="/pages/signup">Sign up</a>
                                                            </div>
                                                        </div>
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

export default withRouter(Login);