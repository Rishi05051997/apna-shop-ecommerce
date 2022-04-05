import Footer from "../Layout/Footer";
import { useAuthContext, useData } from "../../context";
import { useEffect } from "react";
import { WishlistItem } from "./WishlistItem";
import { Link } from "react-router-dom";
import emptyWishlist from "./../../assets/empty-cart.svg"
import { RotatingSquare } from "react-loader-spinner";


const Wishlist = () => {
    const { showLoader } = useAuthContext();
    const { state: { itemsInWishlist } } = useData();
    const totalItems = itemsInWishlist.length;
    useEffect(() => {
        document.title = "APNA SHOP | Wishlist";
    }, []);

    return showLoader ? (
        <div className="loader-container">
            <div className="loader-container">
                <RotatingSquare ariaLabel="rotating-square" visible={true} color="#3b82f6" />
            </div>
        </div>
    ) : (
        <div className="wishlist-container">
            <div className="header-container"></div>
            <section className="wishlist-results">
                <div className="text-3">
                    <span className="bold">Wishlist Results</span> - {totalItems}
                </div>
            </section>
            {
                totalItems > 0 ? (
                    <div className="wishlist-cards-container">
                        {
                            itemsInWishlist.map((product) => < WishlistItem product={product} />)
                        }
                    </div>
                ) : (
                    <div className="no-cart-section mar-y-2">
                        <div className="no-cart-img">
                            <img src={emptyWishlist} alt="Wishlist-products" />
                        </div>
                        <div>
                            <h1 className="head-3 highlightMainText">No Products To Dispay</h1>
                        </div>
                        <div>
                            <button className="btn btn-primary text-5 pad-sm">
                                <Link to="/cart">
                                    Go to Cart
                                </Link>
                            </button>
                        </div>

                    </div>
                )
            }

            {/* <!--- Success Toastr --> */}
            <div className="toastr success-alert-toast blck_">
                <div className="alert success-alert mar-y-2">
                    <span className="iconify head-1" data-icon="ep:success-filled"></span>
                    <h4 className="head-4 mar-sm">Product Added Successfully !!!</h4>
                    <span
                        className="iconify text-3"
                        data-icon="akar-icons:circle-x"
                    ></span>
                </div>
            </div>
            {/* <!--- Error Toastr --> */}
            <div className="toastr error-alert-toast blck_">
                {/* <!-- error alert  --> */}
                <div className="alert error-alert mar-y-2">
                    <span
                        className="iconify head-1"
                        data-icon="jam:triangle-danger"
                    ></span>
                    <h4 className="head-4 mar-sm">
                        Sorry this product is out of stock!!!!
                    </h4>
                    <span
                        className="iconify text-3"
                        data-icon="akar-icons:circle-x"
                    ></span>
                </div>
            </div>
            {/* <!--- Warning Toastr --> */}
            <div className="toastr warning-alert-toast blck_">
                {/* <!-- warning alert  --> */}
                <div className="alert warning-alert mar-y-2">
                    <span className="iconify head-1" data-icon="gg:danger"></span>
                    <h4 className="head-4 mar-sm">
                        Sorry this product no more available!!!
                    </h4>
                    <span
                        className="iconify text-3"
                        data-icon="akar-icons:circle-x"
                    ></span>
                </div>
            </div>
            {/* <!--- Info Toastr --> */}
            <div className="toastr info-alert-toast blck_">
                {/* <!-- Info alert  --> */}
                <div className="alert info-alert mar-y-2">
                    <span className="iconify head-1" data-icon="gg:danger"></span>
                    <h4 className="head-4 mar-sm">Product Added to wishlist !!!</h4>
                    <span
                        className="iconify text-3"
                        data-icon="akar-icons:circle-x"
                    ></span>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Wishlist;
