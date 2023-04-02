import { Link } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";

export default function SignoutLink({ children }) {
    const { signout } = useAuth();
    const handleClick = () => {
        signout(() => {
            console.log("signout callback");
        });
    };
    return <Link onClick={handleClick}>{children}</Link>;
}
