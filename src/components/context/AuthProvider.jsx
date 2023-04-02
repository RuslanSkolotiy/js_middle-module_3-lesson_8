import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const useAuth = () => {
    return useContext(AuthContext);
};

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(localStorage.getItem("user", null));

    const isAuth = user !== null;

    const signin = (login, password, callback) => {
        console.log("signin");
        setUser(login);
        localStorage.setItem("user", login);
        callback();
    };

    const signout = (callback) => {
        setUser(null);
        localStorage.removeItem("user");
        callback();
    };

    return (
        <AuthContext.Provider value={{ isAuth, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
}
