import React, { Fragment, useState } from 'react';
import logo from '../assets/images/bizooy-logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { passwordForgot } from '../actions/auth.action'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validateEmail } from '../utils/validation'

const ResetPwdWithEmail = () => {
    const [email, setEmail] = useState('');
    let dispatch = useDispatch();

    const passReset = useSelector((state) => state.authUser.passReset);

    const forgotPass = (e) => {
        e.preventDefault();
        let isEmailVaild = validateEmail(email);
        (!isEmailVaild) ?
            dispatch(passwordForgot(email))
            :
            toast.info("Email entered is invalid!", {
                position: "top-center",
                autoClose: 5000,
            });
    }

    return (
        <Fragment>
            <div className="page-wrapper">
                <div className="container-fluid">
                    {/* <!-- Reset Password page start--> */}
                    <div className="authentication-main">
                        <div className="row">
                            <div className="col-md-12 p-0">
                                <div className="auth-innerright">
                                    <div className="authentication-box">
                                        <div className="text-center"><img src={logo} alt="" /></div>
                                        {
                                            (!passReset) ?
                                                <div className="card mt-4 p-4">
                                                    <form className="theme-form">
                                                        <h5 className="mb-3 f-w-600 text-center">FORGOT PASSWORD?</h5>
                                                        <h6 className="f-16 text-center">Enter your email address to reset your password. </h6>
                                                        <div className="form-group mt-4">
                                                            <input className="form-control" type="email" placeholder="Enter your email" required onChange={e => setEmail(e.target.value)} value={email} />
                                                        </div>
                                                        <div className="form-group text-center">
                                                            <div className="d-inline-block form-group mb-0">
                                                                <div className="col-md-2">
                                                                    <button className="btn btn-primary" type="submit" onClick={(e) => forgotPass(e)}>Reset Password</button>
                                                                </div>
                                                            </div>
                                                            <div className="d-inline-block form-group mb-0">
                                                                <div className="col-md-2">
                                                                    <button className="btn" type="reset"><a className="btn-link text-capitalize" href="/pages/login">Back</a></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div> :
                                                <div className="text-center mt-5">
                                                    <h5>Reset Link sent on your email!</h5><a className="btn-link f-16 text-capitalize" href="/pages/login">Back</a>
                                                </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ToastContainer />
                    {/* <!-- Reset Password page end--> */}
                </div>
            </div>
        </Fragment>
    );
};

export default ResetPwdWithEmail;