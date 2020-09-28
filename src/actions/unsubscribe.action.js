import { axiosInstance } from "../api/api.service";

export const fetchUnsubscribe = () => async (dispatch, getState) => {
  try {
    await axiosInstance
      .get("/customers/status/unsubscribed", {})
      .then((response) => {
        if (response) {
          dispatch({
            type: "unsubscribe/UnsubscribeSuccess",
            payload: response.data,
          });
        }
      });
  } catch (e) {
    return console.error(e.message);
  }
};
