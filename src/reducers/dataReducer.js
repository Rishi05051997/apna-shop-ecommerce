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




        default:
            return state;
    }
};
