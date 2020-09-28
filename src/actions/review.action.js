import { axiosInstance } from "../api/api.service";
import { toast } from "react-toastify";

export const fetchRequestreview = () => async (dispatch, getState) => {
  try {
    await axiosInstance
      .get("/customers/status/request%20review", {})
      .then((response) => {
        if (response) {
          dispatch({
            type: "review/RequestSuccess",
            payload: response.data,
          });
        }
      });
  } catch (e) {
    return console.error(e.message);
  }
};

export const deleteRequest = (key) => async (dispatch, getState) => {
  try {
    await axiosInstance
      .delete(`/customer/${key}/delete`, {
        key,
      })
      .then((response) => {
        if (response) {
          dispatch({
            type: "review/deleteRequestSuccess",
          });

          return response.data;
        }
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

export const fetchOpenedreview = () => async (dispatch, getState) => {
  try {
    await axiosInstance.get("/customers/status/open", {}).then((response) => {
      if (response) {
        dispatch({
          type: "review/OpenedSuccess",
          payload: response.data,
        });
      }
    });
  } catch (e) {
    return console.error(e.message);
  }
};




export const fetchUnopenedreview = () => async (dispatch, getState) => {
  try {
    await axiosInstance.get("/customers/status/unopened", {}).then((response) => {
      if (response) {
        dispatch({
          type: "review/UnopenedSuccess",
          payload: response.data,
        });
      }
    });
  } catch (e) {
    return console.error(e.message);
  }
};
