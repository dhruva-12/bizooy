import { axiosInstance } from "../api/api.service";
import { toast } from "react-toastify";

export const addMailchimp = (api_key) => async (dispatch, getState) => {
  try {
    await axiosInstance
      .post("/settings/mailchimp/enable", {
        api_key,
      })
      .then((response) => {
        dispatch({
          type: "mailchimp/mailEnable",
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



export const addMailchimpdisable = (api_key) => async (dispatch, getState) => {
  try {
    await axiosInstance
      .post("/settings/mailchimp/disable", {
        api_key,
      })
      .then((response) => {
        dispatch({
          type: "mailchimp/mailDisable",
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
