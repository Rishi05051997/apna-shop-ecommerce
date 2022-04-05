import { createContext, useContext, useReducer, useState } from "react";
import axios from "axios";
import { API_URL } from "../services/apiUrl";
import { useNavigate } from "react-router-dom";
import { AuthReducer } from "../reducers/authReducer";

const AuthContext = createContext();

const useAuthContext = () => useContext(AuthContext);

const initialUserState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
};

const AuthenticationProvider = ({ children }) => {
    const navigate = useNavigate();
    const [login, setLogin] = useState(
        JSON.parse(localStorage.getItem("login")) || false
    );
    const [userState, userDispatch] = useReducer(
        AuthReducer,
        initialUserState
    );

    const [showLoader, setShowLoader] = useState(false);

    const [ErrorMsg, setErrorMsg] = useState("");
    const [showMsg, setShowMsg] = useState(true);

    const loginUser = async (email, password) => {
        const postData = { email, password }
        if (!isPasswordValid(password)) {
            setErrorMsg("Password must contain at least 8 characters, at least 1 number and both lower and uppercase letters.")
            setShowMsg(true);
        } else {
            try {
                const { data: { foundUser, encodedToken } } = await axios.post(`${API_URL}/auth/login`, JSON.stringify(postData))
                localStorage.setItem("token", encodedToken)
                setLogin(foundUser);
                localStorage.setItem("login", JSON.stringify(foundUser));
                userDispatch({ type: "CLEAR" });
                return foundUser;
            } catch (error) {
            }
        }
    };

    const logOutUser = () => {
        setLogin(false);
        localStorage.clear();
        navigate("/");
    };

    const registerUser = async (firstName, lastName, email, password) => {
        const postData = { firstName, lastName, email, password }
        if (firstName === "" || lastName === "") {
            setErrorMsg("First Name or Last Name is empty");
            setShowMsg(true);
        }
        else if (!isPasswordValid(password)) {
            setErrorMsg("Password must contain at least 8 characters, at least 1 number and both lower and uppercase letters.")
            setShowMsg(true);
        } else {
            try {
                const { data } = await axios.post(`${API_URL}/auth/signup`, JSON.stringify(postData))
                const { createdUser, encodedToken } = data;
                setLogin(createdUser);
                localStorage.setItem("login", JSON.stringify(createdUser));
                localStorage.setItem("token", encodedToken)
                userDispatch({ type: "CLEAR" });
                return data;
            } catch (err) {
                const errorResponse = JSON.stringify(err.response.data);
                return err.response.data;
            }
        }
    };

    const isPasswordValid = (password) => {
        if (
            password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/) ==
            null
        )
            return false;
        else return true;
    };

    return (
        <AuthContext.Provider
            value={{
                login,
                loginUser,
                logOutUser,
                userState,
                userDispatch,
                registerUser,
                showLoader,
                setShowLoader,
                ErrorMsg,
                showMsg
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { initialUserState, useAuthContext, AuthenticationProvider }
