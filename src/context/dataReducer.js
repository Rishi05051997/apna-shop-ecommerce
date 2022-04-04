export const dataReducer = (state, { type, payload }) => {
    switch (type) {
        case "SHOW_TOAST":
            return { ...state, toastMsg: payload };

        default:
            return state;
    }
};
