import { Link, useNavigate } from "react-router-dom";
import { useData } from "../../../context";


const AddressCard = () => {
    const { state: { addresses } } = useData();
    const selectedAdd = addresses.filter((address) => address.selectedAddress === true);
    return (
        <div className="container-card xxl-card-width">
            <div className="card-header pad-md">
                <div className="address-header">
                    <div className="head-3 highlightMainText">Address</div>
                    <button className="btn btn-outline-warning" >
                        <Link to="/profile">
                            Address Management
                        </Link>
                    </button>
                </div>
                {
                    selectedAdd.length > 0 &&
                    selectedAdd.map(({ _id, name, mobileNo, houseNo, city, district, zipCode, state, country, type }) =>
                    (
                        <div key={_id}>
                            <div className="text-2">
                                Type: <span className="bold">{type}</span>
                            </div>
                            <div className="text-2">
                                Name: <span className="bold">{name}</span>
                            </div>
                            <div className="text-2">
                                Contact No: <span className="bold">{mobileNo}</span>
                            </div>
                            <div className="text-2">
                                Deliver to:
                                <span className="bold">House No-{houseNo},{city}, {district} {state}-{zipCode}, {country}</span>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default AddressCard;