import PrivateContent from "./PrivateContent";
import SignoutLink from "./SignoutLink";
import GuestContent from "./GuestContent";
import { NavLink } from "react-router-dom";
export default function () {
    return (
        <nav>
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/characters">Герои</NavLink>
            <NavLink to="/location">Локации</NavLink>
            <NavLink to="/episode">Эпизоды</NavLink>
            <GuestContent>
                <NavLink to="/login">Вход</NavLink>
            </GuestContent>
            <PrivateContent>
                <SignoutLink>Выход</SignoutLink>
            </PrivateContent>
        </nav>
    );
}
