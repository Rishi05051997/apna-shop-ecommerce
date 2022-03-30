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
        if (!isPasswordValid(password)) {
            setErrorMsg("Password must contain at least 8 characters, at least 1 number and both lower and uppercase letters.")
            setShowMsg(true);
        } else {
            try {
                const { data: { foundUser, encodedToken } } = await axios({
                    method: 'post',
                    url: `${API_URL}/auth/login`,
                    data: {
                        email,
                        password
                    }
                })
                localStorage.setItem("token", encodedToken)
                // console.log(user)
                // const decoded = jwt_decode(token);
                // const loginData = { token: `Bearer ${token}`, user: decoded.name };
                setLogin(foundUser);
                localStorage.setItem("login", JSON.stringify(foundUser));
                userDispatch({ type: "CLEAR" });
                return foundUser;
            } catch (error) {
                // console.error(error);
            }
        }
    };

    const logOutUser = () => {
        setLogin(false);
        localStorage.clear();
        navigate("/");
    };

    const registerUser = async (firstName, lastName, email, password) => {
        if (firstName === "" || lastName === "") {
            setErrorMsg("First Name or Last Name is empty");
            setShowMsg(true);
        }
        else if (!isPasswordValid(password)) {
            setErrorMsg("Password must contain at least 8 characters, at least 1 number and both lower and uppercase letters.")
            setShowMsg(true);
        } else {
            try {
                const { data } = await axios({
                    method: "post",
                    url: `${API_URL}/auth/signup`,
                    data: { firstName, lastName, email, password }
                })
                debugger;
                const { createdUser, encodedToken } = data;
                setLogin(createdUser);
                localStorage.setItem("login", JSON.stringify(createdUser));
                localStorage.setItem("token", encodedToken)
                userDispatch({ type: "CLEAR" });
                return data;
            } catch (err) {
                const errorResponse = JSON.stringify(err.response.data);
                console.error(errorResponse);
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
