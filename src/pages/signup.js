import React, { Fragment } from 'react';
import logo from '../assets/images/bizooy-logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";
import { register } from '../actions/auth.action'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormFields } from "../libs/hooksLib";

const Signup = () => {
    const [fields, handleFieldChange] = useFormFields({
        name: "",
        email: "",
        password: "",
        phone: "",
        website: "",
        street: "",
        city: "",
        state: "",
        country: "",
        zip: ""
    });

    let dispatch = useDispatch();

    let history = useHistory();

    const registered = useSelector((state) => state.authUser.registered);

    const registerAuth = (e) => {
        e.preventDefault();
        dispatch(register(fields.name, fields.email, fields.password, fields.phone, fields.website, fields.street, fields.city, fields.state, fields.country, fields.zip));
        // AuthService.register(name, email, password, phone, website, street, city, state, country, zip);
    }

    return (
        <Fragment>
            {
                (registered) ?
                    history.push(`${process.env.PUBLIC_URL}/dashboard/default`)
                    :
                    null
            }
            <div className="page-wrapper">
                <div className="container-fluid">
                    {/* <!-- sign up page start--> */}
                    <div className="authentication-main">
                        <div className="row">
                            <div className="col-sm-12 p-0">
                                <div className="auth-innerright">
                                    <div className="authentication-box">
                                        <div className="text-center"><img src={logo} alt="" /></div>
                                        {
                                            (!registered) ?
                                                <div className="card mt-4 p-4">
                                                    <h4 className="text-center">NEW USER</h4>
                                                    <h6 className="text-center">Enter your Username and Password For Signup</h6>
                                                    <form className="theme-form" onSubmit={
                                                        registerAuth
                                                    }>
                                                        <div className="form-group">
                                                            <label className="col-form-label">User Name</label>
                                                            <input className="form-control" type="text" placeholder="User Name" required="" id="name"  value={fields.name} onChange={handleFieldChange} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-form-label">Email</label>
                                                            <input className="form-control" type="email" placeholder="Email" required="" id="email"  value={fields.email} onChange={handleFieldChange} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-form-label">Password</label>
                                                            <input className="form-control" type="password" placeholder="**********" required="" id="password"  value={fields.password} onChange={handleFieldChange} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-form-label">Phone Number</label>
                                                            <input className="form-control" type="number" placeholder="Phone Number" required="" id="phone"  value={fields.phone} onChange={handleFieldChange} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-form-label">Website</label>
                                                            <input className="form-control" type="text" placeholder="Website" id="website"  value={fields.website} onChange={handleFieldChange} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-form-label">Address</label>
                                                            <div className="form-row">
                                                                <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <input className="form-control" type="text" placeholder="Street" required="" id="street"  value={fields.street} onChange={handleFieldChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <input className="form-control" type="text" placeholder="City" required="" id="city"  value={fields.city} onChange={handleFieldChange} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <input className="form-control" type="text" placeholder="State" required="" id="state"  value={fields.state} onChange={handleFieldChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <select className="form-control" id="country"  value={fields.country} onChange={handleFieldChange} name="country" >
                                                                            <option>India</option>
                                                                            <option>South Africa</option>
                                                                            <option>United State</option>
                                                                            <option>Australia</option>
                                                                        </select>
                                                                        {/* <input className="form-control" type="text" placeholder="Country" required="" id="fname"  value={fields.name} onChange={e => setCountry(e.target.value)} value={country} /> */}
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <input className="form-control" type="number" placeholder="Zip Code" required="" id="zip"  value={fields.zip} onChange={handleFieldChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="col-sm-4">
                                                                <button className="btn btn-primary" type="submit" onClick={(e) => registerAuth(e)}>Sign Up</button>
                                                            </div>
                                                            <div className="col-sm-8">
                                                                <div className="text-left mt-2 m-l-20">Are you already user?  <a className="btn-link text-capitalize" href="/pages/login">Login</a></div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                :
                                                <div className="text-center mt-5">
                                                    <h5>Successfully registered!</h5><a className="btn-link f-16 text-capitalize" href="/pages/login">Click here to login</a>
                                                </div>

                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ToastContainer />
                    {/* <!-- sign up page ends--> */}
                </div>
            </div>
        </Fragment >
    );
};

export default Signup;