import { useNavigate } from "react-router-dom";

const PriceDetails = ({ totalItems, cartTotal, login }) => {
    const navigate = useNavigate();
    return (
        <div className="container-card xl-card-width">
            <div className="card-header pad-md">
                <div className="head-3 secondory-text">COUPONS</div>
                <div className="custom-input-one mar-y-2">
                    <input
                        id="apply-coupon"
                        type="text"
                        className="input-field"
                        autoComplete="off"
                        placeholder=" "
                    />
                    <span
                        className="iconify icons text-2"
                        data-icon="whh:coupon"
                    ></span>
                    <label htmlFor="apply-coupon" className="input-label text-2">
                        APPLY COUPON
                    </label>
                </div>
                <div className="totals text-2">
                    <div className="totals-item">
                        <label className="price-label bold">PRICE DETAILS</label>
                        <div className="totals-value">({totalItems} items)</div>
                    </div>
                    <div className="totals-item">
                        <label className="price-label bold">Subtotal</label>
                        <div className="totals-value">₹{cartTotal}</div>
                    </div>
                    <div className="totals-item">
                        <label className="price-label bold">Tax (5%)</label>
                        <div className="totals-value">₹10.00</div>
                    </div>
                    <div className="totals-item">
                        <label className="price-label bold">Shipping</label>
                        <div className="totals-value" id="cart-shipping">
                            ₹50
                        </div>
                    </div>
                    <div className="totals-item">
                        <label className="price-label bold">Grand Total</label>
                        <div className="totals-value bold" id="cart-total">
                            ₹{cartTotal + 10 + 50}
                        </div>
                    </div>
                    <div className="totals-item card-margin-auto-left mar-y-4">
                        <button className="btn btn-primary text-2" onClick={() => login ? navigate("/order") : navigate("/login")}>Placed Order</button>
                    </div>
                </div>
            </div>
            <div className="card-body text-3 mar-md"></div>
        </div>
    )
}

export default PriceDetails;