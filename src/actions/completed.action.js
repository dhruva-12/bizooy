import { axiosInstance } from "../api/api.service";

export const fetchCompletedreview = () => async (dispatch, getState) => {
  try {
    await axiosInstance.get("/customers/status/completed", {}).then((response) => {
      if (response) {
        dispatch({
          type: "completed/CompletedSuccess",
          payload: response.data,
        });
      }
    });
  } catch (e) {
    return console.error(e.message);
  }
};
