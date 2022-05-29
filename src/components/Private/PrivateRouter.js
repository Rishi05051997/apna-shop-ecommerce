import { Navigate, useLocation } from "react-router";
import { useAuthContext } from "../../context"

export const PrivateRouter = ({ children }) => {
    const { login } = useAuthContext();
    let location = useLocation();
    return login ? children : < Navigate to="/login" state={{ from: location }} replace />
}