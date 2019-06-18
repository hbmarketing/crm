const initialState = {
    fetching: false,
    fetched: false,
    companyName: null,
    companyFullName: null,
    isLogin: false,
    error: null
}

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case "FETCH_LOGIN_PENDING":
            return {
                ...state,
                fetching: true
            };
        case "FETCH_LOGIN_FULFILLED":
            return {
                ...state,
                fetching: false,
                fetched: true,
                isLogin: true,
                companyName: action.payload,
                companyFullName: action.payload
            };
        case "FETCH_LOGIN_REJECTED":
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
    }
}