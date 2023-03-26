import {
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

function App() {
    const location = useLocation();
    return (
        <>
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
            </nav>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/:groupId" element={<Catalog />} />
                <Route path="/:groupId/:elementId" element={<Detail />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </>
    );
}

export default App;
