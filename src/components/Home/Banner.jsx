import banner from "./../../assets/banner/banner-2 (3).jpg";
import { Link } from "react-router-dom";
const Banner = () => {
    return (
        <section className="banner">
            <div className="custom-img-responsive">
                <img src={banner} alt="banner" />
            </div>
            <div className="banner-content">
                <div className="head-1 banner-main-heading highlightMainText">
                    APNA SHOP
                </div>
                <div className="head-1 sub-banner-heading heading-animate highlightMainText">
                    CLEARANCE SALE
                </div>
                <div className="head-1 sub-child-banner-heading highlightMainText">
                    UPTO 70% OFF <span className="head-2">on various products</span>
                </div>
                <div className="show-now-btn">
                    <button className="btn btn-warning head-3">
                        <Link to="/products">Shop Now</Link>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Banner;
