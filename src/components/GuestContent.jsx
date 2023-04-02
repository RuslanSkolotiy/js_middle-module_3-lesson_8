import { useAuth } from "./context/AuthProvider";

export default function GuestContent({ children }) {
    const { isAuth } = useAuth();
    if (isAuth) return null;
    return children;
}
