import { Link } from "react-router-dom";
const Offers = () => {
    return (
        <section className="offers">
            <div className="text-3 mar-md">
                Bestsellers at 70% off Offer till
                <Link to="./products" className="highlightMainText cursor_ bold">
                    Show Now
                </Link>
            </div>
        </section>
    );
};

export default Offers;
