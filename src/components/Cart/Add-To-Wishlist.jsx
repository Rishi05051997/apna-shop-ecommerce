import { useNavigate } from "react-router";
import { useAuthContext, useData } from "./../../context/index";
import { itemExists } from "./../../Utils/arrays-utility";
import { updateWishlist } from "./../../services/index";
import { Icon } from "@iconify/react"

export const AddToWishlist = ({ product }) => {
    const { state: { itemsInWishlist }, dispatch } = useData();
    const { login, setShowLoader } = useAuthContext();
    const navigate = useNavigate();
    const isWishlisted = itemExists(itemsInWishlist, product._id);

    return (
        <>
            <button className={isWishlisted ? "btn btn-outline-warning" : "btn btn-success"} onClick={() =>
                login
                    ? updateWishlist(product, isWishlisted, dispatch, setShowLoader)
                    : navigate("/login")
            } >
                <Icon
                    className="iconify"
                    icon={
                        isWishlisted
                            ? "ant-design:heart-filled"
                            : "ant-design:heart-outlined"
                    }

                />
                Wishlist
            </button>

        </>
    );
};
