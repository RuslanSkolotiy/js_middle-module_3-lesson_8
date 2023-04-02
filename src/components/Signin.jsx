import { useState } from "react";
import TextComponent from "./TextComponent/TextComponent";
import IconAt from "../icons/Email";
import { useAuth } from "./context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Signin = function () {
    const { signin } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const [state, setState] = useState({
        email: "",
        password: "",
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        signin(state.email, state.password, () => {
            const from = location.state?.from || "/";
            navigate(from);
        });
    };

    return (
        <form onSubmit={handleSubmit} onChange={handleChange}>
            <TextComponent
                label="Почта"
                placeholder="Ваш email"
                name="email"
                type="email"
                icon={<IconAt size="0.8rem" />}
                withAsterisk
            />
            <TextComponent
                label="Пароль"
                placeholder="Ваш пароль"
                name="password"
                type="password"
                withAsterisk
            />
            <div className="login-submit-row">
                <button type="submit">Войти</button>
            </div>
        </form>
    );
};

export default Signin;
