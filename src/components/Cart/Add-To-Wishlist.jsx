import { useNavigate } from "react-router";
import { useAuthContext, useData } from "./../../context/index";
import { itemExists } from "./../../Utils/arrays-utility";
import { updateWishlist } from "./../../services/index";

export const AddToWishlist = ({ product }) => {
    const { state: { itemsInWishlist }, dispatch } = useData();
    const { login, setShowLoader } = useAuthContext();
    const navigate = useNavigate();
    const isWishlisted = itemExists(itemsInWishlist, product._id);
    const encodedToken = localStorage.getItem("token");

    return (
        <>
            <button className={isWishlisted ? "btn btn-outline-warning" : "btn btn-success"} onClick={() =>
                login
                    ? updateWishlist(product, isWishlisted, dispatch, setShowLoader, encodedToken)
                    : navigate("/login")
            } >
                {/* <i
                    className={
                        isWishlisted
                            ? "fas fa-heart fa-lg wish-active"
                            : "far fa-heart fa-lg wish-inactive"
                    }
                    
                ></i> */}
                Wishlist
            </button>

        </>
    );
};
