export const dataReducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_PRODUCTS":
            return { ...state, products: payload };

        case "GET-PRODUCT-BASED-ON-ID":
            return { ...state, oneProduct: payload }

        case "ADD_TO_CART":
            if (state.itemsInCart.some((cartItem) => cartItem._id === payload._id)) {
                return {
                    ...state,
                    toastMsg: `Cart updated successfully!`,
                    itemsInWishlist: state.itemsInWishlist.filter(
                        (wishItem) => wishItem._id !== payload._id
                    ),
                    itemsInCart: state.itemsInCart.map((cartItem) =>
                        cartItem._id === payload._id
                            ? { ...cartItem, quantity: cartItem.quantity + 1 }
                            : cartItem
                    ),
                };
            } else {
                return {
                    ...state,
                    toastMsg: `"${payload.productName}" added to cart`,
                    itemsInWishlist: state.itemsInWishlist.filter(
                        (wishItem) => wishItem._id !== payload._id
                    ),
                    itemsInCart: state.itemsInCart.concat({
                        ...payload,
                        quantity: 1,
                    }),
                };
            }

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
        
        case "SET_CATEGORIES":
            return { ...state, categories: payload };
        
        default:
            return state;
    }
};
