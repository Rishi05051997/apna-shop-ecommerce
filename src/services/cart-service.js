import { API_URL } from "./apiUrl";
import axios from "axios"



export const initUserCart = async (dispath) => {
    const { data: { cart } } = await axios({
        method: 'get',
        url: `${API_URL}/user/cart`,
    })
    if (cart) {
        dispath({ type: "SET_CART", payload: cart })
    }
}

export const deleteItemFromCart = async (dispatch, product, setShowLoader, setIsError, token) => {

    try {
        setShowLoader(true)
        const { data } = await axios({
            method: 'delete',
            url: `/api/user/cart/${product._id}`,
            headers: {
                authorization: token
            }
        })
        if (data) {
            dispatch({ type: "REMOVE_FROM_CART", payload: product })
        }
    } catch (error) {
        console.error(error)
        setIsError(true);
        dispatch({ type: "SHOW_TOAST", payload: "Something Went Wrong!!!" });
    } finally {
        setShowLoader(false);
        setIsError(false);
    }
}

export const updateCart = async (item, updateAction, dispatch, setShowLoader, setIsError, token) => {

    debugger;
    try {

        switch (updateAction.toUpperCase()) {
            case "ADD":
                addDataToCartHandler(item, token, dispatch, setShowLoader, setIsError)
                break;
            case "INCREMENT_IN_CART":
                incrementFromCartHandler(item, token, dispatch, setShowLoader, setIsError)
                break;
            case "DECREMENT_FROM_CART":
                debugger;
                if (item.quantity <= 1) {
                    deleteItemFromCart(dispatch, item, setShowLoader, setIsError, token)
                } else {
                    decrementFromCartHandler(item, token, dispatch, setShowLoader, setIsError, token)
                }
                break;
            case "MOVE_WISHLIST":
                addDataToWishlistHandler(item, token, dispatch, setShowLoader, setIsError, token);
                break;

            default:
                break;
        }
    } catch (error) {
        console.error(error)
    } finally {

    }
}


///// Utility -->> cart
const addDataToCartHandler = async (item, token, dispatch, setShowLoader, setIsError) => {
    const product = { product: item }
    try {
        setShowLoader(true)
        const { data: { cart } } =
            await axios({
                method: 'post',
                url: `/api/user/cart`,
                data: JSON.stringify(product),
                headers: {
                    authorization: token
                }
            })
        if (!cart) { } else {
            dispatch({
                type: "ADD_TO_CART",
                payload: item,
            })
        }
    } catch (error) {
        setIsError(true);
        debugger;
        dispatch({ type: "SHOW_TOAST", payload: "Something Went Wrong" });
        console.error(error)
        return error;
    } finally {
        setShowLoader(false);
        setIsError(false);
    }
}



const decrementFromCartHandler = async (product, encodedToken, dispatch, setShowLoader, setIsError, token) => {
    try {
        setShowLoader(true)
        const { data: { cart } } = await axios({
            method: 'post',
            url: ` /api/user/cart/${product._id}`,
            data: {
                action: {
                    type: "decrement"
                }
            },
            headers: {
                authorization: token
            }
        })
        if (cart) {

            dispatch({
                type: "DECREMENT_FROM_CART",
                payload: product,
            });
        }
    } catch (error) {
        console.error(error)
        setIsError(true)
        dispatch({ type: "SHOW_TOAST", payload: "Something Went Wrong" });
        return error;
    } finally {
        setShowLoader(false);
        setIsError(false);
    }
}

const incrementFromCartHandler = async (product, token, dispatch, setShowLoader, setIsError) => {
    try {
        setShowLoader(true)
        const { data: { cart } } = await axios({
            method: 'delete',
            url: ` /api/user/cart/${product._id}`,
            data: {
                action: {
                    type: "increment"
                }
            },
            headers: {
                authorization: token
            }
        })
        if (cart) {
            dispatch({
                type: "ADD_TO_CART",
                payload: product,
            })
        }
    } catch (error) {
        console.error(error)
        setIsError(true)
        dispatch({ type: "SHOW_TOAST", payload: "Something Went Wrong !!!" });
        return error;
    } finally {
        setShowLoader(false)
        setIsError(false)
    }
}

//// Utility -->> Wishlist
const addDataToWishlistHandler = async (product, encodedToken, dispatch, setShowLoader, setIsError, token) => {
    try {
        setShowLoader(true)
        const { data: { wishlist } } = await axios({
            method: 'post',
            url: `/api/user/wishlist`,
            data: product,
            headers: {
                authorization: token
            }
        })
        if (wishlist) {
            dispatch({
                type: "MOVE_TO_WISHLIST",
                payload: product
            });
        }
    } catch (error) {
        setIsError(true)
        dispatch({ type: "SHOW_TOAST", payload: "Something Went wrong !!!" });
        return error
    } finally {
        setShowLoader(false);
        setIsError(false)
    }
}


