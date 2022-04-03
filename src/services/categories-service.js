import axios from "axios";
export const fetchCategories = async (dispatch) => {
    try {
        const { data: { categories } } = await axios.get("/api/categories")
        if (categories) {
            dispatch({ type: "SET_CATEGORIES", payload: categories })
        }
    } catch (error) {
        console.log(error)
    }
}