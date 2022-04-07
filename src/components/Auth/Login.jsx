import Footer from "../Layout/Footer";
import { RotatingSquare } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";

export const Login = () => {

    const { loginUser, userState: { email, password }, userDispatch, showLoader, ErrorMsg } = useAuthContext();
    const navigate = useNavigate();


    const onFormSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password)
        const foundUser = await loginUser(email, password)
        if (!foundUser) {
        } else {
            navigate("/products")
        }
    }
    return showLoader ? (
        <div className="loader-container">
            <div className="loader-container">
                <RotatingSquare ariaLabel="rotating-square" visible={true} color="#3b82f6" />
            </div>
        </div>
    ) : (
        <div className="login-container">
            <section className="form-section">
                <form onSubmit={(e) => onFormSubmit(e)} className="form container-card xxl-card-width pad-lg">
                    <div className="head-2 highlightMainText bold">Login</div>
                    <div className="custom-input-one mar-y-4">
                        <input
                            id="email"
                            type="email"
                            className="input-field"
                            autocomplete="off"
                            placeholder=" "
                            value={email}
                            onChange={(e) => userDispatch({ type: "SET-EMAIL", payload: e.target.value })}
                        />
                        <label for="email" className="input-label text-2">
                            Enter Your Email Id Here
                        </label>
                    </div>
                    <div className="custom-input-one mar-y-2">
                        <input
                            id="password"
                            type="password"
                            className="input-field"
                            autocomplete="off"
                            placeholder=" "
                            value={password}
                            onChange={(e) => userDispatch({ type: "SET-PASSWORD", payload: e.target.value })}
                        />
                        <span
                            className="iconify icons text-2"
                            data-icon="akar-icons:eye-slashed"
                        ></span>
                        <label for="password" className="input-label text-2">
                            Enter Your Password Here
                        </label>
                    </div>
                    <div className="mar-y-3">
                        <button type="submit" className="btn btn-primary form-btn text-2 bold">
                            Login
                        </button>
                    </div>
                    <div className="mar-y-3">
                        <span className="btn btn-link head-4" onClick={() => {
                            userDispatch({ type: "SET-EMAIL", payload: "v@gmail.com" });
                            userDispatch({ type: "SET-PASSWORD", payload: "Vrushabh@123" })
                        }}>Add Test Credentials</span>
                    </div>
                    <div className="mar-y-2 head-4">
                        {ErrorMsg && <p className="highlightMainText">{ErrorMsg}</p>}
                    </div>
                    <div className="text-2 mar-y-2">
                        Forgot Your Password ?
                        <span className="bold cursor_">
                            <Link to="/change-password">Reset Here</Link>
                        </span>
                    </div>
                    <div className="text-2 mar-y-2">
                        Not a User yet ?
                        <span className="bold cursor_">
                            <Link to="/signup">Create Your Account</Link>
                        </span>
                    </div>
                </form>
            </section>
            <div className="overlay blck_"></div>
            <Footer />
        </div>
    );
};

