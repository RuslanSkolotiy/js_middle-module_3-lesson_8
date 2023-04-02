import { useAuth } from "./context/AuthProvider";

export default function PrivateContent({ children }) {
    const { isAuth } = useAuth();
    if (!isAuth) return null;
    return children;
}
