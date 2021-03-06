import { Icon } from "@iconify/react";
import header from "./../../../src/assets/apna-5.PNG";
import { Link } from "react-router-dom";
import { useData } from "../../context/data-context";
import { useState } from "react";
import { useAuthContext } from "../../context";

export const Nav = () => {
    const { login, logOutUser } = useAuthContext()
    const { firstName } = login;
    const [searchTxt, setSearchTxt] = useState("");
    const {
        state: { itemsInCart, itemsInWishlist }, dispatch } = useData();
    const searchHandler = (e) => {
        if (e.keyCode === 13) {
            dispatch({ type: "SEARCH_PRODUCT", payload: searchTxt });
            setSearchTxt("");
        }
    }
    const totalItems = itemsInCart.reduce((acc, curr) => acc + curr.quantity, 0);
    return (
        <div className="header-container">
            <header className="sticky">
                <img className="header-logo cursor_" src={header} alt="header_logo" />
                <Link to="/" className="logo head-1 cursor_">
                    Apna Shop{" "}
                </Link>
                <ul className="menu hide">
                    <li>
                        <Link
                            className="text-1"
                            to="./../Avatar/avatar.html"
                        >
                            Avatar
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-1"
                            to="./../Alert/Alert.html"
                        >
                            Alert
                        </Link>
                    </li>
                </ul>
                <ul className="menu left_auto">
                    <div className="custom-input-one mar-y-2">
                        <input
                            id="name"
                            type="text"
                            className="input-field"
                            autocomplete="off"
                            placeholder=" "
                            value={searchTxt}
                            onChange={(e) => setSearchTxt(e.target.value)}
                            onKeyDown={searchHandler}

                        />
                        <span onClick={() => {
                            dispatch({ type: "SEARCH_PRODUCT", payload: searchTxt });
                            setSearchTxt("");
                        }} className="iconify icons text-2">
                            <Icon icon="ant-design:search-outlined" />
                        </span>

                        <label htmlFor="name" className="input-label text-2">
                            Name
                        </label>
                    </div>
                    <li>
                        {
                            login &&
                            <Link to="/profile">
                                <div className="badge-div">
                                    <span className="iconify">
                                        <Icon icon="healthicons:ui-user-profile" />
                                    </span>
                                    <div className="head-4">{firstName}</div>
                                </div>
                            </Link>
                        }
                    </li>
                    <li>
                        <Link to="/wishlist">
                            <div className="badge-div">
                                <span className="iconify">
                                    <Icon icon="icon-park-outline:like" />
                                </span>
                                {
                                    itemsInWishlist.length > 0 &&
                                    <div className="notify-badge">
                                        <span>{itemsInWishlist.length}</span>
                                    </div>
                                }
                                <div className="head-4">Wishlist</div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            <div className="badge-div">
                                <span className="iconify">
                                    <Icon icon="bi:cart-check" />
                                </span>
                                {
                                    totalItems > 0 &&
                                    <div className="notify-badge">
                                        <span>{totalItems}</span>
                                    </div>
                                }
                                <div className="head-4">Cart</div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        {
                            login ? (
                                <div className="badge-div cursor_">
                                    <span className="iconify">
                                        <Icon icon="ri:logout-circle-line" onClick={logOutUser} />
                                    </span>
                                    <div className="head-4">Logout</div>
                                </div>
                            ) : (
                                <Link to="/login">
                                    <div className="badge-div">
                                        <span className="iconify">
                                            <Icon icon="ri:logout-circle-line" />
                                        </span>
                                        <div className="head-4">Login/Signin</div>
                                    </div>
                                </Link>
                            )
                        }
                    </li>
                </ul>
            </header>
        </div>
    );
};