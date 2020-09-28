import { axiosInstance } from "../api/api.service";

export const fetchDashboard = () => async (dispatch, getState) => {
  try {
    await axiosInstance.get("/dashboard", {}).then((response) => {
      if (response) {
        dispatch({
          type: "dashboard/dashboardSuccess",
          payload: response.data,
        });
      }
    });
  } catch (e) {
    return console.error(e.message);
  }
};
