export const dataReducer = (state, { type, payload }) => {
    switch (type) {
        case "SORT":
            return { ...state, sortBy: payload };
        case "TOGGLE_STOCK":
            return { ...state, inStock: !state.inStock };
        case "TOGGLE_DELIVERY":
            return { ...state, fastDelivery: !state.fastDelivery };
        case "TOGGLE_COTTON":
            return { ...state, cotton: !state.cotton };
        case "TOGGLE_NON_COTTON":
            return { ...state, tericot: !state.tericot };
        case "TOGGLE_RATING":
            return { ...state, rating: payload }
        case "PRICE_RANGE":
            return { ...state, priceRange: payload };
        case "CLEAR_ALL_FILTERS":
            return {
                ...state,
                sortBy: null,
                inStock: false,
                fastDelivery: false,
                priceRange: 30000,
                searchValue: "",
                brandFilter: [],
                categoryFilter: [],
                rating: "",
                cotton: false,
                tericot: false
            };
        default:
            return state;
    }
};
