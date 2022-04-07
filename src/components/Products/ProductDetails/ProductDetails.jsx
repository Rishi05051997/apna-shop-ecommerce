import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useData } from "../../../context";
import { AddToCart } from "../../Cart/Add-To-Cart";
import Footer from "../../Layout/Footer";
import { getProductBasedOnId } from "./../../../services/index"

const ProductDetails = () => {
    const { id } = useParams();
    const { state: { oneProduct }, dispatch } = useData();

    useEffect(() => {
        (async () => {
            await getProductBasedOnId(dispatch, id);
        })();
    }, [dispatch, id])
    useEffect(() => {
        document.title = "APNA SHOP | Product Details";
    }, []);
    const { _id, productImg, inStock, vendorName, finalPrice, mainPrice, off, rating } = oneProduct;
    return (
        <div className="product-details-container">
            <section key={_id} className="product-details-card">
                <section className="product-img-section">
                    <div className="product-img">
                        <img src={productImg} alt="card-img" />
                    </div>
                    <div className="product-btn-section mar-y-2">
                        {inStock ? (
                            < AddToCart btnNormalCss={"btn btn-product btn-warning text-5 pad-sm"} btnSuccessCss={"btn btn-product btn-success text-5 pad-sm"} product={oneProduct} />
                        ) : (
                            <button className="btn btn-product btn-dark text-5 pad-sm" disabled>
                                Out of Stock
                            </button>
                        )}
                        <button className="btn btn-product btn-danger text-5 pad-sm">
                            <Link to="/order">
                                Buy Now
                            </Link>
                        </button>
                    </div>
                </section>
                <section className="product-details-section">
                    <p className="bold text-2">
                        HomeClothing and AccessoriesBlazers `{">"}` Waistcoats and
                        SuitsBlazers`{">"}` Men's Readymade..s `{">"}` FAVOROSKI
                    </p>
                    <div className="text-3 bold secondory-text mar-y-2">{vendorName}</div>
                    <div className="head-3 highlightMainText">
                        Solid Single Breasted Party Men Full Blazer (Purple)
                    </div>
                    <div className="success-text text-2 bold mar-y-3">Special price</div>
                    <div className="product-price-section flex-prop mar-y-2">
                        <div className="head-2 bold">₹{finalPrice}</div>
                        <div className="text-3 line-through">₹{mainPrice}</div>
                        <div className="success-text text-2 bold">{off}</div>
                        <div className="warning-text text-2 bold">Hurry, Only 3 left!</div>
                    </div>
                    <div className="product-rating-section flex-prop mar-y-2">
                        <div className="head-2 bold">
                            {rating} <Icon className="iconify" icon="emojione:star"></Icon>
                        </div>
                        <div className="text-3 bold secondory-text mar-y-2">
                            706 ratings and 107 reviews
                        </div>
                    </div>
                    <div className="product-coupons-section mar-y-2">
                        <div className="head-3 bold">Coupons for you</div>
                        <div className="coupons flex-prop mar-y-1">
                            <div className="coupon-icon text-3 success-text bold">
                                <span className="iconify" data-icon="ri:coupon-2-fill"></span>
                            </div>
                            <div className="coupon-text text-2">
                                <span className="bold">Bank Offer</span> 5% Unlimited Cashback
                                on Flipkart Axis Bank Credit Card
                            </div>
                            <div className="head-4 highlightMainText bold">T & C</div>
                        </div>
                    </div>
                    <div className="location">
                        <div className="location-icon head-3 mar-y-2">
                            <span
                                className="iconify"
                                data-icon="fa6-solid:map-location-dot"
                            ></span>
                            Deliver to
                        </div>
                        <div className="custom-input-one mar-y-2">
                            <input
                                id="location-name"
                                type="text"
                                className="input-field"
                                autocomplete="off"
                                placeholder=" "
                            />
                            <label for="location-name" className="input-label text-2">
                                Please Enter Your Location
                            </label>
                        </div>
                        <div className="delivery-section mar-y-1 text-3">
                            <span className="bold">Delivery by26 Feb, Saturday</span> |
                            <span className="success-text bold">Free</span>
                            <span className="line-through">₹40</span>
                        </div>
                    </div>
                </section>
            </section>
            <Footer />
        </div>
    );
};

export default ProductDetails;
