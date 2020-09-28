import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addMailchimp,
  addMailchimpdisable,
} from "../../actions/mailchimp.action";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormFields } from "../../libs/hooksLib";
import mailchimp from "../../assets/images/mailchimp.png";

const Mailchimp = () => {
  const [fields, handleFieldChange] = useFormFields({
    api_key: "",
  });

  let dispatch = useDispatch();

  const [byComingBack, setbyComingBack] = useState(false);

  const mailchimpstatus = useSelector((state) => state.mailchimp.mailchimp);


  function handleGoBack() {
    setbyComingBack(true);
  }

  const mailChimp = (e, status) => {
    e.preventDefault();
    setbyComingBack(false);
    (status == "enable") ? dispatch(addMailchimp(fields.api_key)) : dispatch(addMailchimpdisable(fields.api_key));
  }

  return (
    <Fragment>
      {(mailchimpstatus === "" || byComingBack) ? (
        <div className="container-fluid mailchimp">
          <div className="row">
            <div className="col-sm-12 p-0">
              <div className="card mt-4 p-4">
                <form className="theme-form">
                  <div className="form-group text-center">
                    <img className="img-responsive" src={mailchimp} />
                    <p className="text-left">API KEY</p>
                    <input className="form-control" placeholder="Enter API key" id="api_key" value={fields.api_key} onChange={handleFieldChange} required />
                  </div>
                  <button type="submit" className="btn btn-primary mr-4" onClick={(e) => mailChimp(e, "enable")} disabled={(mailchimpstatus === "active") ? true : false}>Enable</button>
                  <button type="submit" className="btn btn-primary" onClick={(e) => mailChimp(e, "disable")} disabled={(mailchimpstatus === "disabled") ? true : false}>Disable</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) :
        <div className="container-fluid mt-4 p-4 ">
          <div className="card ">
            <div className="card-body text-center">
              <img className="img-responsive" src={mailchimp} />
              <h6>
                Status:
                <span className={`dot ${(mailchimpstatus === "disabled") ? "dotDisabled" : "dotEnabled"}`}></span>
                <span>
                  <strong className="mx-4">{mailchimpstatus}</strong>
                </span>
              </h6>

              <div className="col-sm-12">
                <div className="mt-4 text-center">
                  <button className="border-0 btn-outline-primary" onClick={() => handleGoBack()}>{(mailchimpstatus === "active") ? "Go back to Disable" : "Go back to Enable"}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }

      <ToastContainer />
    </Fragment>
  );
};

export default Mailchimp;
