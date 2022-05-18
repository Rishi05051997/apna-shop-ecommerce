import { Footer } from "../../Layout";
import { useAuthContext, useData } from "../../../context";
import { useEffect } from "react";
import { WishlistItem } from "./WishlistItem";
import { Link } from "react-router-dom";
import emptyWishlist from "./../../../assets/empty-cart.svg"
import { RotatingSquare } from "react-loader-spinner";


export const Wishlist = () => {
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
            <Footer />
        </div>
    );
};