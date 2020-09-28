import {
    axiosInstance,
    authedAxiosInstance
} from "./api.service";

const AuthService = {
    login: async (
        email,
        password
    ) => {
        const response = await axiosInstance.post("/auth/login", {
            email,
            password,
        });
        authedAxiosInstance.defaults.headers[
            "Authorization"
        ] = `Bearer ${response.data.token}`;
        return response.data;
    },
    logout: async () => {
        const response = await authedAxiosInstance.get("/auth/logout");
        return response.data;
    },
    passwordForgot: async () => {
        const response = await axiosInstance.post("password/forgot");
        return response.data;
    },
    passwordReset: async () => {
        const response = await axiosInstance.post("password/reset");
        return response.data;
    },
};

export default AuthService;