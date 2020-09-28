import React, { Fragment } from 'react';
import logo from '../assets/images/bizooy-logo.png';

const LoginWithBgImg = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <div className="auth-bg">
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
                                        <input className="form-control" type="text" required="" />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">Password</label>
                                        <input className="form-control" type="password" required="" />
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
        </Fragment>
    );
};

export default LoginWithBgImg;