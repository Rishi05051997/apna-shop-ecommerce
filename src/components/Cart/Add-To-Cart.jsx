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
    const { login, setShowLoader } = useAuthContext();
    const isItemInCart = itemExistsInCart(itemsInCart, product._id);
    const navigate = useNavigate();
    const isWishlisted = itemExists(itemsInWishlist, product._id);
    const updateLists = () => {
        updateWishlist(product, isWishlisted, dispatch, setShowLoader, setIsError);
        updateCart(product, "ADD", dispatch, setShowLoader, setIsError);
    };
    return (
        <>
            <button
                type="button"
                disabled={!product.inStock}
                className={isItemInCart ? btnNormalCss : btnSuccessCss}
                onClick={() => {
                    isItemInCart
                        ? navigate("/cart")
                        : login
                            ? isWishlisted
                                ? updateLists()
                                : updateCart(product, "ADD", dispatch, setShowLoader, setIsError)
                            : dispatch({
                                type: "ADD_TO_CART",
                                payload: product,
                            });
                }}
            >
                {isItemInCart ? "Go to Cart" : "Add to Cart"}
            </button>
        </>
    );
};
