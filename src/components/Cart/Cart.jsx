import Footer from "../Layout/Footer";
import { RotatingSquare } from "react-loader-spinner";
import { useEffect } from "react";
import { useData } from "../../context/data-context";
import { useAuthContext } from "../../context/auth-context";
import { Link } from "react-router-dom";
import emptyCart from "./../../assets/empty-cart.svg"
import Address from "./Address/Address-Card";
import PriceDetails from "./PriceDetails";
import CartItem from "./CartItem";



const Cart = () => {
    const { login } = useAuthContext();
    const { state: { itemsInCart, showLoader } } = useData();
    const cartTotal = itemsInCart.reduce(
        (acc, item) => acc + item.finalPrice * item.quantity,
        0
    );
    const totalItems = itemsInCart.reduce((acc, curr) => acc + curr.quantity, 0);
    useEffect(() => {
        document.title = "APNA SHOP | Cart";
    }, []);


    return showLoader ? (
        <div className="loader-container">
            <div className="loader-container">
                <RotatingSquare ariaLabel="rotating-square" visible={true} color="#3b82f6" />
            </div>
        </div>
    ) : (
        <div class="cart-container">
            <section class="my-cart-section">
                <div class="head-2 highlightMainText">
                    <span>My Cart</span>
                </div>
            </section>
            {
                totalItems > 0 ? (
                    <div className="cart-main-section">
                        <div className="grid">
                            <div className="col col-xl-1">
                                < Address />
                                {
                                    itemsInCart.map((product) => (
                                        < CartItem product={product} />
                                    ))
                                }
                            </div>
                            <div className="col col-xl-2">
                                < PriceDetails login={login} cartTotal={cartTotal} totalItems={totalItems} />
                            </div>
                        </div>
                    </div>
                ) : (

                    <div className="no-cart-section mar-y-2">
                        <div className="no-cart-img">
                            <img src={emptyCart} alt="cart-products" />
                        </div>
                        <div className="mar-y-2">
                            <h1 className="head-1 highlightMainText">No Products To Dispay</h1>
                        </div>
                        <div className="mar-y-2">
                            <button className="btn btn-primary text-5 pad-sm">
                                <Link to="/products">
                                    Shop Now
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

export default Cart;
