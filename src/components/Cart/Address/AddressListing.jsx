import { useState } from "react";
import { useAuthContext, useData } from "../../../context"
import { removeAddress } from "../../../services";
import AddNewAddress from "./add-new-address";

export const AddressListing = () => {
    const { state: { addresses }, dispatch, setIsError } = useData();
    const [isEditable, setIsEditable] = useState(false);
    const [isAdd, setIsAdd] = useState(false);
    const { setShowLoader } = useAuthContext();
    return (
        <>
            {
                addresses.length > 0 && (
                    addresses.map(({ _id, name, mobileNo, houseNo, city, district, zipCode, state, country, type, selectedAddress, street, locality, }) => (
                        <div key={_id}>
                            <div className="head-3 bold highlightMainText mar-y-2">{type}</div>
                            <div className="displayFlexRow address-mgmt">
                                <div className="text-2 displayFlexColumn">
                                    <div className="bold">{name}</div>
                                    <div className="text-2 secondory-text">{mobileNo}</div>
                                    <div className="text-2 secondory-text">{houseNo} {city}</div>
                                    <div className="text-2 secondory-text">Unkown {district}</div>
                                    <div className="text-2 secondory-text">{state}-{zipCode}</div>
                                    <div className="text-2 secondory-text">{country}</div>
                                    <div>
                                        <button class="btn btn-primary" onClick={() => setIsEditable((val) => !val)}>Edit</button>
                                        <button class="btn btn-danger" onClick={() => removeAddress(dispatch, _id, setShowLoader, setIsError)}>Remove</button>
                                        <button class="btn btn-danger" onClick={() => { }}>Order Now</button>
                                    </div>
                                </div>
                            </div>
                            {
                                isEditable && (
                                    < AddNewAddress isEditable={isEditable} setIsEditable={setIsEditable} editAddress={{
                                        _id,
                                        name,
                                        street,
                                        locality,
                                        city,
                                        state,
                                        country,
                                        zipCode,
                                        mobileNo,
                                    }} />
                                )
                            }
                        </div>
                    )))

            }
            <div class="mar-y-2">
                <button class="show-modal btn btn-primary" onClick={() => setIsAdd((val) => !val)}>
                    + ADD NEW ADDRESS
                </button>
            </div>
            {
                isAdd && (
                    < AddNewAddress isAdd={isAdd} setIsAdd={setIsAdd} />
                )
            }

        </>
    )
}