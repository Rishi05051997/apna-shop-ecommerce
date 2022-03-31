import { RotatingSquare } from "react-loader-spinner";
import { useAuthContext, useData } from "../../context";
import AddNewAddress from "../Cart/Address/add-new-address";
import { AddressListing } from "../Cart/Address/AddressListing";
import Footer from "../Layout/Footer";

const Profile = () => {
    const { login: { firstName, lastName, email }, logOutUser, showLoader } = useAuthContext();
    const { state: { showModal } } = useData();



    return showLoader ? (
        <div className="loader-container">
            <div className="loader-container">
                <RotatingSquare ariaLabel="rotating-square" visible={true} color="#3b82f6" />
            </div>
        </div>
    ) : (
        <div class="profile_container">
            <div class="header-container"></div>
            <section class="profile-user-section">
                <div class="text-3"><span class="bold">Account</span></div>
            </section>
            <div class="profile-main-section">
                <aside class="profile-aside">
                    <ul class="text-3">
                        <li class="mar-y-2 cursor_">
                            Profile
                        </li>
                        <li class="mar-y-2 cursor_">
                            Address
                        </li>
                        <li class="mar-y-2 cursor_">
                            Settings
                        </li>
                    </ul>
                </aside>
                <section class="profile_section">
                    <div class="head-3 highlightMainText mar-md">Profile Details</div>
                    <div class="text-2 profile-sub-content">
                        <div>Full Name: <span class="bold">{firstName} {lastName}</span></div>
                        <div>Email Id: <span class="bold">{email}</span></div>
                    </div>
                    <div class="head-3 highlightMainText mar-md">Address</div>
                    <div class="text-2 mar-md profile-sub-content">
                        < AddressListing />

                    </div>
                    <div class="head-3 highlightMainText mar-md">Settings</div>
                    <div class="text-2 profile-sub-content">
                        <button class="btn btn-danger" onClick={logOutUser}>
                            Logout
                        </button>
                    </div>
                </section>
            </div>
            {
                showModal && (
                    < AddNewAddress />
                )
            }
            < Footer />
        </div>
    )
}

export default Profile;