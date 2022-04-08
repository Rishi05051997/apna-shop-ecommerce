import axios from "axios";
import { API_URL } from "./apiUrl";

export const fetchAllProducts = async (dispatch, setShowLoader) => {
    try {
        setShowLoader(true);
        const {
            data: { products },
        } = await axios.get(`${API_URL}/products`);
        if (products) {
            dispatch({ type: "SET_PRODUCTS", payload: products });
        }
    } catch (err) {
        dispatch({ type: "SHOW_TOAST", payload: "Couldn't fetch product list" });
        console.error(err);
    } finally {
        setShowLoader(false);
    }
};

export const getProductBasedOnId = async (dispatch, id) => {
    try {
        const { data: { product } } = await axios({
            method: "GET",
            url: `/api/products/${id}`,
        })
        debugger;
        if (product) {
            //// show success message
            dispatch({ type: "GET-PRODUCT-BASED-ON-ID", payload: product })

        }
    } catch (error) {
    }
}

