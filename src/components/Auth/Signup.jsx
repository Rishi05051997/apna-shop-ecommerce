import Footer from "../Layout/Footer";
import { useAuthContext, useData } from "../../context/index";
import { useNavigate } from "react-router-dom";
import { RotatingSquare } from "react-loader-spinner";

const Signup = () => {

    const { userState: { firstName, lastName, email, password }, registerUser, userDispatch, ErrorMsg, showMsg, setShowLoader, showLoader } = useAuthContext();
    const { dispatch } = useData();
    const navigate = useNavigate();

    const onFormSubmit = async (e) => {
        e.preventDefault();

        try {
            setShowLoader(true);
            const { createdUser } = await registerUser(firstName, lastName, email, password)
            if (createdUser) {
                ///// show success message
                const { firstName } = createdUser;
                dispatch({ type: "SHOW_TOAST", payload: `${firstName} created successfully in DB` })
                navigate("/")
            }
        } catch (error) {
            console.log(error)
        } finally {
            setShowLoader(false)
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
            <div className="header-container"></div>
            {
                showMsg &&
                (
                    <>
                        <section className="form-section">
                            <form onSubmit={(e) => onFormSubmit(e)} action="" className="form container-card xxl-card-width pad-lg">
                                <div className="head-2 highlightMainText bold">Sign Up</div>
                                <div className="custom-input-one mar-y-4">
                                    <input
                                        id="fName"
                                        type="text"
                                        className="input-field"
                                        autocomplete="off"
                                        placeholder=" "
                                        onChange={(e) => userDispatch({ type: "SET-FIRSTNAME", payload: e.target.value })}
                                    />
                                    <label for="fName" className="input-label text-2">
                                        First Name
                                    </label>
                                </div>
                                <div className="custom-input-one mar-y-2">
                                    <input
                                        id="lName"
                                        type="text"
                                        className="input-field"
                                        autocomplete="off"
                                        placeholder=" "
                                        onChange={(e) => userDispatch({ type: "SET-LASTNAME", payload: e.target.value })}
                                    />
                                    <label for="lName" className="input-label text-2">
                                        Last Name
                                    </label>
                                </div>
                                <div className="custom-input-one mar-y-2">
                                    <input
                                        id="email"
                                        type="email"
                                        className="input-field"
                                        autocomplete="off"
                                        placeholder=" "
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
                                <div className="mar-y-2">
                                    <button className="btn btn-primary form-btn text-2 bold">
                                        Sign Up
                                    </button>
                                </div>
                                <div className="mar-y-2 head-4">
                                    {ErrorMsg && <p className="highlightMainText">{ErrorMsg}</p>}
                                </div>
                                <div className="text-2 mar-y-2">
                                    Forgot Your Password ?
                                    <span className="bold cursor_">
                                        <a href="./changePassword.html">Reset Here</a>
                                    </span>
                                </div>
                                <div className="text-2 mar-y-2">
                                    If Already User ?
                                    <span className="bold cursor_">
                                        <a href="./login.html">Login here</a>
                                    </span>
                                </div>
                            </form>
                        </section>
                    </>
                )
            }

            <Footer />
        </div>
    );
};

export default Signup;
