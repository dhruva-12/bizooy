import {
    axiosInstance,
} from "../api/api.service";
import { toast } from 'react-toastify';

export const signin = (email, password) => async (dispatch, getState) => {
    dispatch({ type: "authUser/setPendingStatus" });
    try {
        await axiosInstance.post("/auth/login", {
            email,
            password,
        }).then(response => {
            if (response) {
                dispatch({
                    type: 'authUser/setLoggedInUser', payload: {
                        email: email, 
                        name: response.data.info.displayName,
                        token: response.data.token
                    }
                })
                return response.data;
            }
        })
    } catch(error) {
        console.log("error is thrown: " + error.response.data.error)
        setTimeout(() => {
            toast.error(error.response.data.error, {
                position: "top-center",
                autoClose: 5000,
            });
        }, 200);
        dispatch({
            type: "authUser/setFailedStatus",
            payload: error
        });
    }
};

export const passwordForgot = (email) => async (dispatch, getState) => {
    try {
        await axiosInstance.post("/auth/forgotPassword", {
            email
        }).then(response => {
            if(response) {
                dispatch({
                    type: "authUser/passResetSent",
                })
                return response.data;    
            }
        })    
    } catch(error) {
        if (error.response) {
            setTimeout(() => {
                toast.error(error.response.data.error, {
                    position: "top-center",
                    autoClose: 5000,
                });
            }, 200);
        }
    }
}

export const register = (name, email, password, phone, website, street, city, state, country, zip) => async (dispatch, getState) => {
    dispatch({ type: "authUser/userRegPending" });
    try {
        await axiosInstance.post("/auth/register", {
            business : {
                name,
                email,
                password,
                phone,
                website,
                "address": {
                    street,
                    city,
                    state,
                    country,
                    zip_code: zip
                }
            }
        }).then(response => {
            if(response) {
                dispatch({
                    type: "authUser/userRegSuccess", payload: {
                        email: email, 
                        name: response.data.info.displayName,
                        token: response.data.token
                    }
                })
                console.log(response.data.info.displayName, response.data.token)
                return response.data;    
            }
        })    
    } catch (error) {
        if (error.response) {
            setTimeout(() => {
                toast.error(error.response.data.error, {
                    position: "top-center",
                    autoClose: 5000,
                });
            }, 200);
            dispatch({
                type: "authUser/userRegFailed",
                payload: error.response.data.error
            });
        }
    }
}