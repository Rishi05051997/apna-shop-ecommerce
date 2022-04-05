import Footer from "../Layout/Footer";

const ChangePassword = () => {
    return (
        <div class="login-container">
            <section class="form-section">
                <form action="" class="form container-card xxl-card-width pad-lg">
                    <div class="head-2 highlightMainText bold">Change Password</div>
                    <div class="custom-input-one mar-y-2">
                        <input
                            id="password-1"
                            type="password"
                            class="input-field"
                            autocomplete="off"
                            placeholder=" "
                        />
                        <span
                            class="iconify icons text-2"
                            data-icon="akar-icons:eye-slashed"
                        ></span>
                        <label for="password-1" class="input-label text-2">
                            Enter Old Password Here
                        </label>
                    </div>
                    <div class="custom-input-one mar-y-2">
                        <input
                            id="password-2"
                            type="password"
                            class="input-field"
                            autocomplete="off"
                            placeholder=" "
                        />
                        <span
                            class="iconify icons text-2"
                            data-icon="akar-icons:eye-slashed"
                        ></span>
                        <label for="password-2" class="input-label text-2">
                            Enter New Password Here
                        </label>
                    </div>
                    <div class="custom-input-one mar-y-2">
                        <input
                            id="password-3"
                            type="password"
                            class="input-field"
                            autocomplete="off"
                            placeholder=" "
                        />
                        <span
                            class="iconify icons text-2"
                            data-icon="akar-icons:eye-slashed"
                        ></span>
                        <label for="password-3" class="input-label text-2">
                            Confirm New Password Here
                        </label>
                    </div>
                    <div class="mar-y-3">
                        <button class="btn btn-primary form-btn text-2 bold">
                            Change Password
                        </button>
                    </div>
                    <div class="text-2 mar-y-2">
                        If Already User ?
                        <span class="bold cursor_">
                            <a href="./login.html">Login Here </a>
                        </span>
                    </div>
                    <div class="text-2 mar-y-2">
                        Not a User yet ?
                        <span class="bold cursor_">
                            <a href="./signUp.html">Create Your Account</a>
                        </span>
                    </div>
                </form>
            </section>
            <div class="overlay blck_"></div>
            <Footer />
        </div>
    );
};

export default ChangePassword;
