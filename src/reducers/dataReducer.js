export const dataReducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_ADDRESS":
            return { ...state, addresses: payload, HomeAddress: payload.filter(({ type }) => type === "Home"), WorkAddress: payload.filter(({ type }) => type === "Work") };

        case "CHANGE_SELECTED_ADDRESS":
            return {
                ...state,
                toastMsg: "New address added successfully",
                address: [...state.addresses.filter(({ _id }) => _id === payload._id).map(({ selectedAddress }) => !selectedAddress)],

            };
        case "ADD_ADDRESS":
            payload._id = state.addresses.length + 1;
            return {
                ...state,
                toastMsg: "New address added successfully",
                addresses: state.addresses.concat(payload),
            };
        case "UPDATE_ADDRESS":
            return {
                ...state,
                toastMsg: "Address updated successfully",
                addresses: state.addresses.map((address) =>
                    address._id === payload._id ? payload : address
                ),
                isEditable: true,
            };
        case "REMOVE_ADDRESS":
            return {
                ...state,
                toastMsg: "Address removed",
                addresses: state.addresses.filter((address) => address._id !== payload),

            };
        case "TOOGLE_MODAL":
            return {
                ...state,
                showModal: !state.showModal
            }

        default:
            return state;
    }
};
