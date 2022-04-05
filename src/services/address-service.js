// import axios from "axios";

// const encodedToken = localStorage.getItem("token");

const address = [
    {
        _id: Math.floor((Math.random() * 100) + 1),
        name: "Vrushabh Dhatrak",
        mobileNo: "9021554963",
        houseNo: "22",
        street: "Xyz Road",
        locality: "Vadiya nagar",
        city: "Nashik",
        district: "Nashik",
        zipCode: "422101",
        state: "Maharshtra",
        country: "India",
        type: "Home",
        selectedAddress: true,
    },
    {
        _id: Math.floor((Math.random() * 100) + 1),
        name: "Vrushabh Dhatrak",
        mobileNo: "9021554963",
        houseNo: "22",
        street: "Xyz Road",
        locality: "Vadiya nagar",
        city: "Banglore",
        district: "Banglore",
        zipCode: "422101",
        state: "Karnataka",
        country: "India",
        type: "Work",
        selectedAddress: false,
    }

]

export const initUserAddress = (dispatch) => {

    try {
        // const {data : address} = axios()
        localStorage.setItem("address", JSON.stringify(address));
        const Address = localStorage.getItem("address")
        if (Address) {
            dispatch({ type: "SET_ADDRESS", payload: JSON.parse(Address) })
        }
    } catch (error) {
        console.error(error);
    }
}


export const removeAddress = (dispatch, _id, setShowLoader, setIsError) => {
    try {
        setShowLoader(true)
        // const {data : address} = axios()
        setIsError(true);
        dispatch({ type: "REMOVE_ADDRESS", payload: _id })
    } catch (error) {
        console.error(error)
        setIsError(true);
    } finally {
        setShowLoader(false);
        setIsError(false);
    }
}

export const updateAddress = (dispatch, action, address, setShowLoader, setIsError) => {
    try {
        setShowLoader(true)
        switch (action.toUpperCase()) {
            case "ADD":
                dispatch({ type: "ADD_ADDRESS", payload: address })
                break;
            case "UPDATE":
                dispatch({ type: "UPDATE_ADDRESS", payload: address })
                break;
            default:
                break;
        }
    } catch (error) {
        console.error(error);
        setIsError(true);
    } finally {
        setShowLoader(false);
        setIsError(false);
    }
}