const LoginReducer = (state, action) => {

    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true, //for the progress bar
                error: false
            };

        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false
            };
        case "LOGIN_FAIL":
            return {
                user: null,
                isFetching: false, 
                error: true
            }


        default: return state
    }
}


export default LoginReducer