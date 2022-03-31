export const dataReducer = (state, { type, payload }) => {
    switch (type) {
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

        default:
            return state;
    }
};
