import React, { useState, Fragment } from "react";
import "../dashboard/dashboard.css";
import { addSocialProfiles, addCustom } from "../../actions/settings.action";
import { useFormFields } from "../../libs/hooksLib";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateUrl } from "../../utils/validation";

const SocialProfiles = () => {
  const [fields, handleFieldChange] = useFormFields({
    customurl: "",
    custom_website_name: "",
  });

  const [profile, setProfile] = useState({
    showElement: "",
  });

  let dispatch = useDispatch();

  const handleChange = (e) => {
    setProfile({ ...profile, showElement: e.target.value });
  };

  const status = (e) => {
    e.preventDefault();
    let isUrlVaild = validateUrl(fields.url);
    !isUrlVaild
      ? dispatch(addSocialProfiles(profile.showElement, fields.url))
      : toast.info("Entered URL is not valid", {
          position: "top-center",
          autoClose: 5000,
        });
  };

  const CustomAdd = (e) => {
    e.preventDefault();
    if (
      fields.customurl.length === 0 ||
      fields.customurl === null ||
      (fields.customurl === undefined && fields.custom_website_name === 0) ||
      fields.custom_website_name === null ||
      fields.custom_website_name === undefined
    ) {
      toast.info("Entered URL and Name  cannot be empty", {
        position: "top-center",
        autoClose: 5000,
      });
    } else {
      dispatch(addCustom(fields.customurl, fields.custom_website_name));
    }
  };

  return (
    <>
      <div>
        <div className="container m-4 p-4 ">
          <h5>
            Enter your URL's for the Social profiles that you want to grow
          </h5>

          <form>
            <select
              className="custom-select custom-select mb-3"
              id="profiles"
              onChange={handleChange}
            >
              <option selected>Select the Social Profile</option>
              <option value="google">Google</option>
              <option value="facebook">Facebook</option>
              <option value="yelp">Yelp</option>
              <option value="custom">Custom</option>
            </select>
            {profile.showElement !== "custom" && profile.showElement !== false ? (
              <Fragment>
                <label>
                  <strong className="text-capitalize">
                    {profile.showElement}
                    <label className="mx-1">Page</label>
                  </strong>
                </label>

                <input
                  className="form-control"
                  type="text"
                  id="url"
                  value={fields.url}
                  onChange={handleFieldChange}
                  required
                />
                <button
                  type="submit"
                  className="mx-4 my-4 btn btn-primary"
                  onClick={(e) => status(e, profile.showElement)}
                >
                  Update
                </button>
              </Fragment>
            ) : null}

            {profile.showElement === "custom" ? (
              <Fragment>
                <label>
                  <strong>Custom Page</strong>
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="customurl"
                  value={fields.customurl}
                  onChange={handleFieldChange}
                  required
                />
                <label>
                  <strong>Custom Name</strong>
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="custom_website_name"
                  value={fields.custom_website_name}
                  onChange={handleFieldChange}
                  required
                />

                <button
                  type="submit"
                  className="mx-4 my-4 btn btn-primary"
                  onClick={(e) => CustomAdd(e)}
                >
                  Update
                </button>
              </Fragment>
            ) : null}
          </form>
        </div>
      </div>
    </>
  );
};

export default SocialProfiles;
