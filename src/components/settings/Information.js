import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInformation } from "../../actions/settings.action";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormFields } from "../../libs/hooksLib";
import { useHistory } from "react-router";
import { signin } from '../../actions/auth.action';
import { useEffect } from "react";
const Information = () => {
  const name = useSelector((state) => state.authUser.username);
   const email = useSelector((state) => state.authUser.userEmail);
   
  
  
  const [fields, handleFieldChange] = useFormFields({
    street: "",
    city: "",
    state: "",
    country: "",
  });
  
  let dispatch = useDispatch();
  let history = useHistory();

 


  const InformationAdd = (e) => {
    e.preventDefault();

    dispatch(
      addInformation(fields.street, fields.city, fields.state, fields.country)
    );
  };

  


  return (
    <Fragment>
      <div
        className="container-fluid"
        style={{ paddingLeft: "200px", paddingRight: "200px" }}
      >
        <div className="row">
          <div className="col-sm-12 p-0">
            <div className="card mt-4 p-4">
              <form className="theme-form" onSubmit={InformationAdd}>
                <div className="form-group">
                  <h4 className="text-center p-4">INFORMATION</h4>
                  
                    <div className="row">
                      <div className="col form-group">
                        <input
                          type="text"
                          className="form-control bg-light"
                          placeholder="Name"
                          id="name"
                          value={name}
                          disabled ={true}
                          
                          
                        />
                      </div>
                      <div className="col form-group">
                        <input
                          type="text"
                          className="form-control bg-light"
                          placeholder="Email"
                          id="email"
                          value={email}
                          disabled = {true}
                          
                          
                        />
                      </div>
                    </div>
                 

                  <div className="row">
                    <div className="col form-group">
                      <input
                        className="form-control"
                        type="street"
                        placeholder="Street"
                        id="street"
                        value={fields.street}
                        onChange={handleFieldChange}
                        required
                      />
                    </div>

                    <div className="col form-group">
                      <input
                        className="form-control"
                        type="city"
                        placeholder="City"
                        id="city"
                        value={fields.city}
                        onChange={handleFieldChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col form-group">
                      <input
                        className="form-control"
                        type="state"
                        placeholder="State"
                        id="state"
                        value={fields.state}
                        onChange={handleFieldChange}
                        required
                      />
                    </div>

                    <div className="col form-group">
                      <input
                        className="form-control"
                        type="country"
                        placeholder="Country"
                        id="country"
                        value={fields.country}
                        onChange={handleFieldChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col text-center p-4">
                    <button
                      style={{ width: "30%" }}
                      className="btn-lg btn-primary text-center"
                      type="submit"
                      onClick={(e) => InformationAdd(e)}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </Fragment>
  );
};

export default Information;
