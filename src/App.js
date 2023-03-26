import { NavLink, Route, Routes, useSearchParams } from "react-router-dom";
import Catalog from "./page/Catalog";
import Detail from "./page/Detail";
import Main from "./page/Main";
import Page404 from "./page/Page404";

function App() {
    const [seachParams] = useSearchParams();
    return (
        <>
            <nav>
                <NavLink to="/">Главная</NavLink>
                <NavLink
                    to={{
                        pathname: "/characters",
                        search: seachParams.toString(),
                    }}
                >
                    Герои
                </NavLink>
                <NavLink
                    to={{
                        pathname: "/location",
                        search: seachParams.toString(),
                    }}
                >
                    Локации
                </NavLink>
                <NavLink
                    to={{
                        pathname: "/episode",
                        search: seachParams.toString(),
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
