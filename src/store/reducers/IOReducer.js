const IOReducer = (state, action) => {
    switch (action.type) {
        case 'SET_OUTPUT':
            return {
                ...state,
                output: action.payload
            };
        case 'REMOVE_OUTPUT':
            return {
                ...state,
                output: ''
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default IOReducer;