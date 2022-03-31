import { Icon } from "@iconify/react";
import { useAuthContext, useData } from "../../context";
import { AddToWishlist } from "./Add-To-Wishlist";
import { deleteItemFromCart, updateCart } from "./../../services/index";

const CartItem = ({ product }) => {
    const { _id, productImg, productName, description, vendorName, finalPrice, mainPrice, off, reviews, delivery, quantity } = product;
    const { login, setShowLoader } = useAuthContext();
    const { dispatch, setIsError } = useData();
    return (<div className="container-card xxl-card-width mar-y-2">
        <div key={_id} className="card-header card-header-row">
            <div className="image-div mar-md">
                <img className="card-img" src={productImg} alt="card-img" />
            </div>
            <div className="mar-md">
                <div className="head-3 highlightMainText">{productName}</div>
                <p className="text-2 mar-y-2 bold">{description}</p>
                <div className="text-2">{vendorName}</div>
                <div className="text-2 mar-y-2 bold">
                    <span>₹{finalPrice}</span>
                    <span style={{ textDecoration: "line-through" }}>
                        ₹{mainPrice}
                    </span>
                    <span className="highlightMainText"> {off}</span>
                </div>
                <div className="mar-y-2">
                    <span className="bold">{reviews}</span>
                    <span className="iconify">
                        <Icon icon="emojione:star" />
                    </span>{" "}
                    |<span className="bold">2 Reviews</span>
                </div>
                <div className="mar-y-2">
                    <span className="bold highlightMainText">{delivery}</span>
                </div>
                <div className="text-4 mar-y-2 flex-row">
                    <button
                        type="button"

                        className="btn btn-light text-3"
                        onClick={() =>
                            login
                                ? updateCart(product, "DECREMENT_FROM_CART", dispatch, setShowLoader, setIsError)
                                : dispatch({ type: "DECREMENT_FROM_CART", payload: product })
                        }
                    >
                        {quantity > 1 ? "-" : <span class="iconify cursor_">
                            <Icon icon="fluent:delete-28-regular" />
                        </span>}
                    </button>

                    <div className="text-3">
                        {quantity}
                    </div>
                    <button
                        type="button"

                        className="btn btn-light text-3"
                        onClick={() =>
                            login
                                ? updateCart(product, "INCREMENT_IN_CART", dispatch, setShowLoader, setIsError)
                                : dispatch({
                                    type: "ADD_TO_CART",
                                    payload: product,
                                })
                        }
                    >
                        +
                    </button>

                </div>
                <div class="text-4 mar-y-2 flex-row">
                    < AddToWishlist product={product} />
                    <button class="btn btn-outline-danger" onClick={() => login ? deleteItemFromCart(dispatch, product, setShowLoader, setIsError) : dispatch({ type: "REMOVE_FROM_CART", payload: product })}>Remove</button>
                </div>

            </div>
        </div>
    </div>)
}

export default CartItem;