import { axiosInstance } from "../api/api.service";
import { toast } from "react-toastify";

export const addCustomer = (email, phone, name) => async (
  dispatch,
  getState
) => {
  try {
    await axiosInstance
      .post("/customer/add", {
        customer: {
          email,
          phone,
          name,
        },
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: "customer/customerRegSuccess",
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

export const fetchCustomers = () => async (dispatch, getState) => {
  try {
    await axiosInstance.get("/customers", {}).then((response) => {
      if (response) {
        dispatch({
          type: "customer/CustomerSuccess",
          payload: response.data,
        });
      }
    });
  } catch (e) {
    return console.error(e.message);
  }
};

export const addCustomerbulk = (file) => async (dispatch, getState) => {
  let formData = new FormData();
  formData.append("file", file);
  try {
    await axiosInstance
      .post("/customer/bulk", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        dispatch({
          type: "customer/customerBulkRegSuccess",
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
