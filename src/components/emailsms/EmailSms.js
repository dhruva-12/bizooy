import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useFormFields } from "../../libs/hooksLib";
import { useDispatch } from "react-redux";
import { addSmsEmail } from "../../actions/settings.action";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router";
import EmailEditor from "./EmailEditor";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sms = () => {
  const [fields, handleFieldChange] = useFormFields({
    template: "",
  });

  let dispatch = useDispatch();

  let history = useHistory();

  const smsstate = (e) => {
    e.preventDefault();
    if (fields.template.length < 100) {
      dispatch(addSmsEmail("sms", fields.template));
    } else {
      toast.info("Sms cannot be greater than 100 characters", {
        position: "top-center",
        autoClose: 5000,
      });
    }
  };

  return (
    <div>
      <h6 className="mx-4 my-4 py-4">
        <strong>
          Use the following forms to customize the way that your message is
          delivered to your customers
        </strong>
      </h6>

      <div class="form-group mx-4">
        <label for="exampleFormControlTextarea1">
          <strong>SMS Body</strong>
        </label>
        <textarea
          class="form-control"
          rows="3"
          id="template"
          value={fields.template}
          onChange={handleFieldChange}
          required
        ></textarea>
        <small>Limited to 100 characters</small>
        <div>
          <small>Leave it blank to use the original template</small>
        </div>
        <div>
          <small>
            The link for feedback will always come at the end of the message
          </small>
        </div>
      </div>
      
      <button
        type="button"
        className="btn btn-primary mx-4"
        type="submit"
        onClick={(e) => smsstate(e, "sms")}
      >
        Save
      </button>
      <div className=" p-4">
        <EmailEditor />
      </div>
    </div>
  );
};

export default Sms;
