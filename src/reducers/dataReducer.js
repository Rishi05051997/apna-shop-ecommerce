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

        default:
            return state;
    }
};
