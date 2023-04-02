import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";

export default function PrivateRoute({ children }) {
    const { isAuth } = useAuth();
    const location = useLocation();
    const from = location.pathname;
    if (!isAuth) return <Navigate to="/login" replace state={{ from }} />;
    return children;
}
