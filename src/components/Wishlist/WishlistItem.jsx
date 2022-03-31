
import { AddToCart } from "../Cart/Add-To-Cart";
import { Icon } from "@iconify/react";
import { removeFromWishlist } from "./../../services/index";
import { useAuthContext, useData } from "../../context";


export const WishlistItem = ({ product }) => {
    const { setShowLoader } = useAuthContext();
    const { _id, productImg, productName, description, finalPrice, mainPrice, off, rating, delivery } = product;

    const { dispatch } = useData();


    return (
        <div key={_id} className="container-card sm-card-width">
            <div className="card-header">
                <div className="mar-xs">
                    <div className="head-3 highlightMainText">{productName}</div>
                    <p className="text-2">{description}</p>
                </div>
                <div className="close-icon text-2 highlightMainText cursor_">
                    <span className="iconify">
                        <Icon icon="ant-design:close-circle-outlined" onClick={() => removeFromWishlist(dispatch, product, setShowLoader)} />
                    </span>
                </div>

                <div className="image-div">
                    <img className="card-img" alt="card-img" src={productImg} />
                </div>
            </div>
            <div className="card-body text-2 mar-md">
                <div className="text-2 mar-y-1 bold">
                    <span>₹{finalPrice}</span>
                    <span style={{ textDecoration: "line-through" }}>
                        ₹{mainPrice}
                    </span>
                    <span className="highlightMainText"> {off}</span>
                </div>
                <div className="mar-y-1">
                    <span className="bold">{rating}</span>
                    <span className="iconify" data-icon="emojione:star"></span> |
                    <span className="bold">15</span>
                </div>
                <div className="mar-y-1">
                    <span className="bold highlightMainText">{delivery}</span>
                </div>
            </div>
            <footer>
                <div className="card-footer text-2 mar-sm">
                    < AddToCart btnNormalCss={"btn btn-primary"} btnSuccessCss={"btn btn-success"} product={product} />
                    <span
                        onClick="toastrInfo(this)"
                        className="iconify cursor_"
                        data-icon="icon-park-outline:like"
                    ></span>
                    <span className="iconify cursor_" data-icon="ci:share"></span>
                    <span
                        className="iconify cursor_"
                        data-icon="akar-icons:more-vertical-fill"
                    ></span>
                </div>
            </footer>
        </div>
    )
}