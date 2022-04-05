export const dataReducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_WISHLIST":
            return { ...state, itemsInWishlist: payload };

        case "ADD_TO_WISHLIST":
            return {
                ...state,
                toastMsg: `"${payload.productName}" added to wishlist`,
                itemsInCart: state.itemsInCart.filter(
                    (cartItem) => cartItem._id !== payload._id
                ),
                itemsInWishlist: state.itemsInWishlist.concat({
                    ...payload,
                }),
            };
        case "REMOVE_FROM_WISHLIST":
            return {
                ...state,
                toastMsg: `"${payload.productName}" removed from wishlist`,
                itemsInWishlist: state.itemsInWishlist.filter(
                    (item) => item._id !== payload._id
                ),
            };

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
        
        case "SET_CART":
            return { ...state, itemsInCart: payload };

        case "REMOVE_FROM_CART":
            return {
                ...state,
                toastMsg: `"${payload.productName}" removed from cart`,
                itemsInCart: state.itemsInCart.filter(
                    (cartItem) => cartItem._id !== payload._id
                ),
            };

        case "MOVE_TO_WISHLIST":
            return {
                ...state,
                toastMsg: `"${payload.productName}" moved to wishlist`,
                itemsInWishlist: state.itemsInWishlist.concat(payload),
                itemsInCart: state.itemsInCart.filter(
                    (cartItem) => cartItem._id !== payload._id
                ),
            };

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
