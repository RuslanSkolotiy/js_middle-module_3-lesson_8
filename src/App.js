import {
    Link,
    NavLink,
    Route,
    Routes,
    useLocation,
    useSearchParams,
} from "react-router-dom";
import Catalog from "./page/Catalog";
import Detail from "./page/Detail";
import Main from "./page/Main";
import Page404 from "./page/Page404";
import Signin from "./components/Signin";
import AuthProvider from "./components/context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";
import PrivateContent from "./components/PrivateContent";
import SignoutLink from "./components/SignoutLink";
import GuestContent from "./components/GuestContent";

function App() {
    const location = useLocation();
    return (
        <AuthProvider>
            <nav>
                <NavLink to="/">Главная</NavLink>
                <NavLink
                    to={{
                        pathname: "/characters",
                        search: location.search,
                    }}
                >
                    Герои
                </NavLink>
                <NavLink
                    to={{
                        pathname: "/location",
                        search: location.search,
                    }}
                >
                    Локации
                </NavLink>
                <NavLink
                    to={{
                        pathname: "/episode",
                        search: location.search,
                    }}
                >
                    Эпизоды
                </NavLink>
                <GuestContent>
                    <NavLink to="/login">Вход</NavLink>
                </GuestContent>
                <PrivateContent>
                    <SignoutLink>Выход</SignoutLink>
                </PrivateContent>
            </nav>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route
                    path="/:groupId"
                    element={
                        <PrivateRoute>
                            <Catalog />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/:groupId/:elementId"
                    element={
                        <PrivateRoute>
                            <Detail />
                        </PrivateRoute>
                    }
                />
                <Route path="/login" element={<Signin />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </AuthProvider>
    );
}

export default App;
