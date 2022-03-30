export const dataReducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_CATEGORIES":
            return { ...state, categories: payload };

        default:
            return state;
    }
};
