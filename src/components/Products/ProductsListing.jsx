import { useEffect } from "react";
import { RotatingSquare } from "react-loader-spinner";
import Footer from "../Layout/Footer";
import { ProductsFilterAside } from "./Product-Filter-Aside/Product-Filter-Aside";
import Product from "./Product";
import { useData } from "../../context/data-context";
import { getSortedProducts, getFilteredProducts } from "../../Utils/Products-filteration";
import emptyCart from "./../../assets/empty-cart.svg"




const ProductsListing = ({ loader }) => {
    const { state: { products, sortBy, inStock, fastDelivery, priceRange, cotton, tericot, rating, searchValue, brandFilter, categoryFilter }} = useData();

    const sortedProducts = getSortedProducts(products, sortBy);
    const filteredProducts = getFilteredProducts(sortedProducts, inStock, fastDelivery, priceRange, cotton, tericot, rating, searchValue, brandFilter, categoryFilter);
  

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
                    <span className="bold">Filtered Results</span> - {filteredProducts.length}
                </div>


                <hr className="mar-y-2" />
            </section>
            < ProductsFilterAside />
            <div className="cards-section mar-y-3">
                {

                    filteredProducts.length > 0 ? (
                        filteredProducts.map((item) => (
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
