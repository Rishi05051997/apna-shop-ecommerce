import axios from "axios";
import { API_URL } from "./apiUrl";


export const initializeUserWishlist = async (dispatch, token) => {
    try {
        const { data: { wishlistItems } } = await axios({
            method: 'get',
            url: `${API_URL}/user/wishlist`,
            headers: {
                authorization: token
            }

        })
        if (wishlistItems) {
            dispatch({ type: "SET_WISHLIST", payload: wishlistItems });
        }
    } catch (err) {
        dispatch({ type: "SHOW_TOAST", payload: "Couldn't fetch wishlist items" });
        console.error(err);
    }
};

export const updateWishlist = async (
    item,
    isWishlisted,
    dispatch,
    setShowLoader,
    token
) => {
    try {
        setShowLoader(true);
        dispatch({ type: "SHOW_TOAST", payload: "Updating wishlist..." });
        const product = { product: item }
        const { data: { wishlist } } = await axios({
            method: 'post',
            url: `${API_URL}/user/wishlist`,
            data: JSON.stringify(product),
            headers: {
                authorization: token
            }
        })
        if (wishlist) {
            if (isWishlisted) {
                removeFromWishlist(dispatch, item)
            } else {
                dispatch({
                    type: "ADD_TO_WISHLIST",
                    payload: item,
                });
            }
        }
    } catch (error) {
        dispatch({ type: "SHOW_TOAST", payload: "Failed to update wishlist." });
        console.error(error);
    } finally {
        setShowLoader(false);
    }
};

export const removeFromWishlist = async (dispatch, product, setShowLoader, token) => {
    try {
        setShowLoader(true)
        const { data: { wishlist } } = await axios({
            method: 'DELETE',
            url: `/api/user/wishlist/${product._id}`,
            headers: {
                authorization: token
            }
        })
        if (wishlist) {
            //// data deleted success
            dispatch({
                type: "REMOVE_FROM_WISHLIST",
                payload: product,
            });
        }
    } catch (error) {

    } finally {
        setShowLoader(false);
    }
}
