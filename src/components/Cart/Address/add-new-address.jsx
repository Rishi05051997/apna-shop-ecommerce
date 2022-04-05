import { useState } from "react";
import { useAuthContext, useData } from "../../../context";
import { updateAddress } from "../../../services";

const defaultData = {
    name: "",
    houseNo: "",
    street: "",
    locality: "",
    city: "",
    district: "",
    state: "",
    country: "India",
    zipCode: "",
    mobileNo: "",
};

const AddNewAddress = ({ isEditable, setIsEditable, IsAdd, setIsAdd, editAddress = defaultData }) => {
    const { dispatch, setIsError } = useData();
    const [address, setAddress] = useState(editAddress);
    const [errorMsg, setErrorMsg] = useState({})
    const { setShowLoader } = useAuthContext();

    const validationHandler = () => {
        let errorStatus = true;
        if (!/^[6-9][0-9]{9}$/.test(address.mobileNo)) {
            setErrorMsg((msg) => ({ ...msg, mobileNo: "Please Enter a Valid Mobile No" }));
            errorStatus = false;
        }
        if (!/^[1-9][0-9]{5}$/.test(address.zipCode)) {
            setErrorMsg((msg) => ({ ...msg, zipCode: "Please Enter a Valid Zip Code" }));
            errorStatus = false;
        }

        return errorStatus
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        if (validationHandler()) {
            setErrorMsg({})
            isEditable ? updateAddress(dispatch, "UPDATE", address, setShowLoader, setIsError) : updateAddress(dispatch, "ADD", address, setShowLoader, setIsError)
            isEditable ? setIsEditable((val) => !val) : setIsAdd((val) => !val)

        }

    }
    return (
        <>
            <div class="modal">
                <div class="modal-container lg-modal-width mar-y-2">
                    <div class="modal-header pad-xs">
                        <div class="head-2 highlightMainText">{
                            isEditable ? " Edit Address " : "Add New Address"
                        }</div>
                        <span
                            class="iconify modal-close text-3 highlightMainText cursor_"
                            data-icon="ant-design:close-circle-outlined"
                        ></span>
                    </div>
                    <form onSubmit={onFormSubmit}>
                        <div class="modal-body text-2 pad-xs">
                            <div class="custom-input-one mar-y-2">
                                <input
                                    id="nameOfPerson"
                                    type="text"
                                    class="input-field"
                                    autocomplete="off"
                                    placeholder=" "
                                    value={address.name}
                                    onChange={(e) => setAddress((address) => (
                                        {
                                            ...address,
                                            name: e.target.value
                                        }
                                    ))}
                                />
                                <label for="nameOfPerson" class="input-label text-2"
                                >Enter Name</label
                                >
                            </div>

                            <div class="custom-input-one mar-y-2">
                                <input
                                    id="houseNo"
                                    type="number"
                                    class="input-field"
                                    autocomplete="off"
                                    placeholder=" "
                                    value={address.houseNo}
                                    onChange={(e) => setAddress((address) => (
                                        {
                                            ...address,
                                            houseNo: e.target.value
                                        }
                                    ))}
                                />
                                <label for="houseNo" class="input-label text-2"
                                >Enter House No.,Street, Colony</label
                                >
                            </div>
                            <div class="custom-input-one mar-y-2">
                                <input
                                    id="locality"
                                    type="text"
                                    class="input-field"
                                    autocomplete="off"
                                    placeholder=" "
                                    value={address.locality}
                                    onChange={(e) => setAddress((address) => (
                                        {
                                            ...address,
                                            locality: e.target.value
                                        }
                                    ))}
                                />
                                <label for="locality" class="input-label text-2"
                                >Enter Locality</label
                                >
                            </div>
                            <div class="custom-input-one mar-y-2">
                                <input
                                    id="street"
                                    type="text"
                                    class="input-field"
                                    autocomplete="off"
                                    placeholder=" "
                                    value={address.street}
                                    onChange={(e) => setAddress((address) => (
                                        {
                                            ...address,
                                            street: e.target.value
                                        }
                                    ))}
                                />
                                <label for="street" class="input-label text-2"
                                >Enter Street</label
                                >
                            </div>
                            <div class="custom-input-one mar-y-2">
                                <input
                                    id="city"
                                    type="text"
                                    class="input-field"
                                    autocomplete="off"
                                    placeholder=" "
                                    value={address.city}
                                    onChange={(e) => setAddress((address) => (
                                        {
                                            ...address,
                                            city: e.target.value
                                        }
                                    ))}
                                />
                                <p className="head-4 highlightMainText">{errorMsg.city}</p>
                                <label for="city" class="input-label text-2">Enter City</label>
                            </div>
                            <div class="custom-input-one mar-y-2">
                                <input
                                    id="zip"
                                    type="number"
                                    class="input-field"
                                    autocomplete="off"
                                    placeholder=" "
                                    value={address.zipCode}
                                    onChange={(e) => setAddress((address) => (
                                        {
                                            ...address,
                                            zipCode: e.target.value
                                        }
                                    ))}
                                />
                                <label for="zip" class="input-label text-2">Enter Zip Code</label>
                            </div>
                            <p className="head-4 highlightMainText">{errorMsg.zipCode}</p>
                            <div class="custom-input-one mar-y-2">
                                <input
                                    id="mobileNo"
                                    type="number"
                                    class="input-field"
                                    autocomplete="off"
                                    placeholder=" "
                                    value={address.mobileNo}
                                    onChange={(e) => setAddress((address) => (
                                        {
                                            ...address,
                                            mobileNo: e.target.value
                                        }
                                    ))}
                                />
                                <label for="mobileNo" class="input-label text-2"
                                >Enter Mobile No</label
                                >
                            </div>
                            <p className="head-4 highlightMainText">{errorMsg.mobileNo}</p>
                            <div class="custom-input-one mar-y-2">
                                <input
                                    id="state"
                                    type="text"
                                    class="input-field"
                                    autocomplete="off"
                                    placeholder=" "
                                    value={address.state}
                                    onChange={(e) => setAddress((address) => (
                                        {
                                            ...address,
                                            state: e.target.value
                                        }
                                    ))}
                                />
                                <label for="state" class="input-label text-2">Enter State</label>
                            </div>

                            <div class="custom-input-one mar-y-2">
                                <input
                                    id="country"
                                    type="text"
                                    class="input-field"
                                    autocomplete="off"
                                    placeholder=" "
                                    value={address.country}
                                    onChange={(e) => setAddress((address) => (
                                        {
                                            ...address,
                                            country: e.target.value
                                        }
                                    ))}
                                />
                                <label for="country" class="input-label text-2"
                                >Enter Country</label>
                            </div>
                        </div>

                        <div class="modal-footer pad-sm">
                            <button type="submit" class="btn btn-primary text-2">{
                                isEditable ? "Update" : "Add New"
                            }</button>
                            <button class="btn btn-danger text-2 modal-close" onClick={() => isEditable ? setIsEditable((val) => !val) : setIsAdd((val) => !val)}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="overlay"></div>
        </>
    )
}
export default AddNewAddress;