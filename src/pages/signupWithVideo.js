import React, { Fragment } from 'react';
import comingsoon from '../assets/images/other-images/coming-soon-bg.jpg';
import logo from '../assets/images/bizooy-logo.png';
import authVideo from '../assets/video/auth-bg.mp4';

const SignupWithVideo = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <div className="container-fluid">
                    {/* <!-- sign up page start--> */}
                    <div className="auth-bg-video">
                        <video id="bgvid" poster={comingsoon} playsInline="" autoPlay={true} muted="" loop="">
                            <source src={authVideo} type="video/mp4" />
                        </video>
                        <div className="authentication-box">
                            <div className="text-center"><img src={logo} alt="" /></div>
                            <div className="card mt-4 p-4">
                                <h4 className="text-center">NEW USER</h4>
                                <h6 className="text-center">Enter your Username and Password For Signup</h6>
                                <form className="theme-form">
                                    <div className="form-row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label">First Name</label>
                                                <input className="form-control" type="text" placeholder="John" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label">Last Name</label>
                                                <input className="form-control" type="text" placeholder="Deo" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">User Name</label>
                                        <input className="form-control" type="text" placeholder="John Deo" />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">Password</label>
                                        <input className="form-control" type="password" placeholder="**********" />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">BOD</label>
                                        <div className="form-row">
                                            <div className="col-sm-4">
                                                <select className="form-control mb-1">
                                                    <option>DD</option>
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                    <option>04</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-4">
                                                <select className="form-control mb-1">
                                                    <option>MM</option>
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                    <option>04</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-4">
                                                <select className="form-control mb-1">
                                                    <option>YYYY</option>
                                                    <option>1990</option>
                                                    <option>1991</option>
                                                    <option>1992</option>
                                                    <option>1993</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-sm-4">
                                            <button className="btn btn-primary" type="submit">Sign Up</button>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="text-left mt-2 m-l-20">Are you already user?  <a className="btn-link text-capitalize" href="login.html">Login</a></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <!-- sign up page ends--> */}
                </div>
            </div>
        </Fragment>
    );
};

export default SignupWithVideo;