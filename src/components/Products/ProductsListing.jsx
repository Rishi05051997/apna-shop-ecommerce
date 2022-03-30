import { useEffect } from "react";
import { RotatingSquare } from "react-loader-spinner";
import Footer from "../Layout/Footer";
import { ProductsFilterAside } from "./Product-Filter-Aside/Product-Filter-Aside";
import Product from "./Product";
import { useData } from "../../context/data-context";
import emptyCart from "./../../assets/empty-cart.svg"




const ProductsListing = ({ loader }) => {
    const {
        state: { products }
    } = useData();


    useEffect(() => {
        document.title = "APNA SHOP | Products";
    }, []);
    return loader ? (
        <div className="loader-container">
            <div className="loader-container">
                <RotatingSquare ariaLabel="rotating-square" visible={true} color="#3b82f6" />
            </div>
        </div>
    ) : (
        <div className="filter-container">
            <div className="header-container"></div>
            <section className="filter-results">
                <div className="text-3">
                    <span className="bold">Filtered Results</span> - {products.length}
                </div>


                <hr className="mar-y-2" />
            </section>
            {/* < ProductsFilterAside /> */}
            <div className="cards-section mar-y-3">
                {
                    products.length > 0 ? (
                        products.map((item) => (
                            <div key={item._id}>
                                <Product products={item} />
                            </div>
                        ))
                    ) : (
                        <>
                            <img src={emptyCart} alt="" />
                            <h1 className="head-3 highlightMainText">No Products To Dispay</h1>
                        </>

                    )
                }
            </div>
            <Footer />
        </div>
    );
};

export default ProductsListing;
