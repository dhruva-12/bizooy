import JwtService from "./jwt.service";

export const isLogin = () => {
    return JwtService.getToken()
}
