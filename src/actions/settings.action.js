import { axiosInstance } from "../api/api.service";
import { toast } from "react-toastify";

export const addInformation = (street, city, state, country) => async (
  dispatch,
  getState
) => {
  try {
    await axiosInstance
      .post("/settings/address", {
        address: {
          street,
          city,
          state,
          country,
        },
      })
      .then((response) => {
        toast.info("Information added Successfully", {
          position: "top-center",
          autoClose: 5000,
      });
        dispatch({
          type: "settings/InformationAdd",
          payload: response.data,
        });
      });
  } catch (error) {
    if (error.response) {
      setTimeout(() => {
        toast.error(error.response.data.error, {
          position: "top-center",
          autoClose: 5000,
        });
      }, 200);
    }
  }
};


export const addSmsEmail = (element, template) => async (
  dispatch,
  getState
) => {
  try {
    await axiosInstance
      .post("/settings/custom/" + element, {
        template,
      })
      .then((response) => {
        toast.info("Updated Successfully", {
          position: "top-center",
          autoClose: 5000,
      });
        dispatch({
          type: "settings/SmsEmailAdd",
          payload: response.data,
        });
      });
  } catch (error) {
    if (error.response) {
      setTimeout(() => {
        toast.error(error.response.data.error, {
          position: "top-center",
          autoClose: 5000,
        });
      }, 200);
    }
  }
};
export const addCustom = (customurl, custom_website_name) => async (
  dispatch,
  getState
) => {
  try {
    await axiosInstance
      .post("/settings/social-profiles/custom", {
        url: customurl,
        custom_website_name,
      })
      .then((response) => {
        toast.info("Updated Successfully", {
          position: "top-center",
          autoClose: 5000,
      });
        dispatch({
          type: "settings/CustomAdd",
          payload: response.data,
        });
      });
  } catch (error) {
    if (error.response) {
      setTimeout(() => {
        toast.error(error.response.data.error, {
          position: "top-center",
          autoClose: 5000,
        });
      }, 200);
    }
  }
};

export const addSocialProfiles = (element, url) => async (
  dispatch,
  getState
) => {
  try {
    await axiosInstance
      .post("/settings/social-profiles/" + element, {
        url,
      })
      .then((response) => {
          toast.info("Updated Successfully", {
            position: "top-center",
            autoClose: 5000,
        });
        dispatch({
          type: "settings/SocialProfiles",
          payload: response.data,
        });
      });
  } catch (error) {
    if (error.response) {
      setTimeout(() => {
        toast.error(error.response.data.error, {
          position: "top-center",
          autoClose: 5000,
        });
      }, 200);
    }
  }
};
