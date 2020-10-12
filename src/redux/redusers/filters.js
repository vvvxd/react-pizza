const initialState = {
    sortBy: 'popular',
    cotegory: 0,
};

const filters = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SORT_BY ': {
            return {
                ...state,
                sortBy: action.payload,
            };
        }

        // eslint-disable-next-line no-duplicate-case
        case 'SET_SORT_BY ': {
            return {
                ...state,
                sortBy: action.payload,
            };
        }
        default:
            return state;
    }
};

export default filters;
