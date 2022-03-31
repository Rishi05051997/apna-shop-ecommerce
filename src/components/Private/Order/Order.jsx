import { Link } from "react-router-dom"
import Footer from "../../Layout/Footer"

export const Order = () => {

    return (
        <>
            <div className="order-container">
                <section className="order-section">
                    <div className="head-1">Thank You for Chossing <span className="highlightMainText">APNA SHOP</span> </div>
                    <div className="text-3 mar-y-2">Your Order will deliver shortlly!!!!</div>
                    <button className="btn btn-product btn-primary mar-y-2">
                        <Link to="/products">
                            Shop Now
                        </Link>
                    </button>
                </section>
                < Footer />
            </div>
        </>
    )
}