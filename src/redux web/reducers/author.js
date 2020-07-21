const initialState ={
    isLoading : false,
    isError : false,
    errorMsg : "",
    data : []
}

const author = (state = initialState, action) => {
    switch (action.type) {
        case "GET_AUTHOR_PENDING":
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case "GET_AUTHOR_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: "Data rejected"
            };
        case "GET_AUTHOR_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data.results
            };
        default:
            return state;
    }
}

export default author