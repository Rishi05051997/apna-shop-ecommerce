import { Icon } from "@iconify/react";
import header from "./../../../src/assets/apna-5.PNG";
import { Link } from "react-router-dom";

const Nav = () => {
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
                            autoComplete="off"
                            placeholder=" "


                        />
                        <span className="iconify icons text-2">
                            <Icon icon="ant-design:search-outlined" />
                        </span>

                        <label htmlFor="name" className="input-label text-2">
                            Name
                        </label>
                    </div>
                    <li>
                        <Link to="/profile">
                            <div className="badge-div">
                                <span className="iconify">
                                    <Icon icon="healthicons:ui-user-profile" />
                                </span>
                                <div className="head-4">Vrushabh</div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/wishlist">
                            <div className="badge-div">
                                <span className="iconify">
                                    <Icon icon="icon-park-outline:like" />
                                </span>
                                <div className="notify-badge">
                                    <span>0</span>
                                </div>
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
                                <div className="notify-badge">
                                    <span>0</span>
                                </div>
                                <div className="head-4">Cart</div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            <div className="badge-div">
                                <span className="iconify">
                                    <Icon icon="ri:logout-circle-line" />
                                </span>
                                <div className="head-4">Login/Signin</div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </header>
        </div>
    );
};

export default Nav;
