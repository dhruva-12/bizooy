const initState = {
    userEmail: '',
    isLoading: false,
    isAuthenticated: '',
    status: '',
    passReset: false,
    registered: false,
    customers
}

function authReducer(state = initState, { type, payload }) {
    switch (type) {
        case 'USER_LOGIN_SUCCESS':
            console.log("Signed In User : " + payload);
            return {
                ...state,
                userEmail: payload,
                isLoading: false,
                isAuthenticated: true,
                status: "pass"
            };
        case 'USER_LOGIN_PENDING':
            return {
                ...state,
                isLoading: true,
                isAuthenticated: '',
                status: "pending"
            };
        case 'USER_LOGIN_FAILED':
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                status: "failed"
            };
        case 'PASS_RESET_SENT':
            return {
                ...state,
                passReset: true
            };
        case 'USER_REGISTER_PENDING':
            return {
                ...state,
                registered: false
            };
        case 'USER_REGISTER_SUCCESS':
            return {
                ...state,
                registered: true
            };
        case 'USER_REGISTER_FAILED':
            return {
                ...state,
                registered: false
            };
        default:
            return state;
    }
}

export default authReducer;