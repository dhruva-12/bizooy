import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer } from "../../actions/customer.action";
import "react-toastify/dist/ReactToastify.css";
import { useFormFields } from "../../libs/hooksLib";

const CustomerForm = () => {
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    phone: "",
    name: "",
  });

  const customeradd = useSelector((state) => state.customer.customer);
  const [byComingBack, setbyComingBack] = useState(false);
  const [initialState, setinitialState]=useState(true);
  function handleGoBack() {
    setbyComingBack(true);
  }

  let dispatch = useDispatch();

  const customer = (e) => {
    e.preventDefault();
    setbyComingBack(false);
      dispatch(addCustomer(fields.email, fields.phone, fields.name));
    setinitialState(false);
  };

  return (
    <Fragment>
      {(customeradd === "" || byComingBack || initialState )? (
        <div
          className="container-fluid"
          style={{ paddingLeft: "200px", paddingRight: "200px" }}
        >
          <div className="row">
            <div className="col-sm-12 p-0">
              <div className="card mt-4 p-4">
                <h4 className="text-center">ADD CUSTOMER</h4>

                <form className="theme-form" >
                  <div className="form-group">
                    <label className="col-form-label"> Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="User Name"
                      required
                      id="name"
                      value={fields.name}
                      onChange={handleFieldChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Email</label>
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email"
                      id="email"
                      value={fields.email}
                      onChange={handleFieldChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="col-form-label">Phone Number</label>
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Phone Number"
                      id="phone"
                      value={fields.phone}
                      onChange={handleFieldChange}
                      required
                    />
                  </div>

                  <div className="col text-center">
                    <button
                      style={{ width: "30%" }}
                      className="btn-lg btn-primary text-center"
                      type="submit"
                      onClick={(e) => customer(e, "success")} 
                      disabled={(customeradd === "")}
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : 
      <div className="p-3" >
        <div className="card mx-2">
          <div className="card-header text-center">
            <h6>The customer added Successfully!!</h6>
            <button
              className="btn-outline-primary"
              onClick={() => handleGoBack()}
            >
              Go Back
            </button>
          </div>
        </div>
        </div>
}
    </Fragment>
  );
};

export default CustomerForm;
