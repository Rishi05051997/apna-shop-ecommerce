import { createContext, useContext, useReducer, useState } from "react";
import { dataReducer } from "../reducers/dataReducer";

const dataContext = createContext(null);



const initialState = {
    products: [],
    oneProduct: [],
    itemsInCart: [],
    itemsInWishlist: [],
    categories: [],
    addresses: [],
    HomeAddress: [],
    WorkAddress: [],
    toastMsg: "",
    searchValue: "",
    sortBy: null,
    inStock: false,
    fastDelivery: false,
    priceRange: 30000,
    brandFilter: [],
    categoryFilter: [],
    cotton: false,
    tericot: false,
    rating: 0,
    showModal: false,
};

const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(dataReducer, initialState);
    const [isError, setIsError] = useState(false);
    return (
        <dataContext.Provider value={{ state, dispatch, isError, setIsError }}>
            {
                children
            }
        </dataContext.Provider>
    )
}

const useData = () => useContext(dataContext);

export { useData, DataProvider }