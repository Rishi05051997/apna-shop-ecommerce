import { useAuthContext, useData } from "../../context/index";
import { useNavigate } from "react-router-dom";
import { updateWishlist, updateCart } from "./../../services/index";
import { itemExists } from "../../Utils/arrays-utility";

const itemExistsInCart = (cartItems, productId) =>
    cartItems.some(
        (cartItem) => cartItem._id === productId && cartItem.quantity > 0
    );


export const AddToCart = ({ product, btnNormalCss, btnSuccessCss }) => {

    const {
        state: { itemsInCart, itemsInWishlist },
        dispatch, setIsError
    } = useData();
    const encodedToken = localStorage.getItem("token");
    const { login, setShowLoader } = useAuthContext();
    const isItemInCart = itemExistsInCart(itemsInCart, product._id);
    const navigate = useNavigate();
    const isWishlisted = itemExists(itemsInWishlist, product._id);
    const updateLists = () => {
        debugger
        updateWishlist(product, isWishlisted, dispatch, setShowLoader, setIsError, encodedToken);
        updateCart(product, "ADD", dispatch, setShowLoader, setIsError, encodedToken);
    };

    const AddToCartHandler = () => {
        debugger;
        isItemInCart
            ? navigate("/cart")
            : login
                ? isWishlisted
                    ? updateLists()
                    : updateCart(product, "ADD", dispatch, setShowLoader, setIsError, encodedToken)
                : dispatch({
                    type: "ADD_TO_CART",
                    payload: product,
                });
    }
    return (
        <>
            <button
                type="button"
                disabled={!product.inStock}
                className={isItemInCart ? btnNormalCss : btnSuccessCss}
                onClick={() => AddToCartHandler()}
            >
                {isItemInCart ? "Go to Cart" : "Add to Cart"}
            </button>
        </>
    );
};
