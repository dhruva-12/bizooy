import {
    ACCESS_TOKEN_KEY,
    ACCESS_TOKEN_EXPIRES_IN
} from "../constant/auth";
import Cookies from "js-cookie";

const JwtService = {
    getToken: () => {
        return Cookies.get(ACCESS_TOKEN_KEY, {path: "/"});
    },
    saveToken: (token) => {
        const date = new Date();
        Cookies.set(ACCESS_TOKEN_KEY, token, {
            expires: new Date(date.getTime() + ACCESS_TOKEN_EXPIRES_IN, {path: "/"}),
        });
    },
    destroyToken: () => {
        // Cookies.remove(ACCESS_TOKEN_KEY);
        Cookies.remove(ACCESS_TOKEN_KEY, {path: "/"})  
    },
};

export default JwtService;