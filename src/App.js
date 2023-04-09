import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import Main from "./page/Main";
import Page404 from "./page/Page404";
import Signin from "./components/Signin";
import AuthProvider from "./components/context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";
import NavigationMenu from "./components/NavigationMenu";
import { Suspense, lazy } from "react";
import ErrorBoundary from "./components/ErrorBoundary";

const CharactersList = lazy(() => import("./page/CharactersList"));
const CharactersDetail = lazy(() => import("./page/CharactersDetail"));
const LocationList = lazy(() => import("./page/LocationList"));
const LocationDetail = lazy(() => import("./page/LocationDetail"));
const EpisodeList = lazy(() => import("./page/EpisodeList"));
const EpisodeDetail = lazy(() => import("./page/EpisodeDetail"));

function App() {
    return (
        <AuthProvider>
            <NavigationMenu />

            <Suspense>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route
                        path="/characters"
                        element={
                            <PrivateRoute>
                                <ErrorBoundary key="1">
                                    <CharactersList />
                                </ErrorBoundary>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/characters/:elementId"
                        element={
                            <PrivateRoute>
                                <ErrorBoundary>
                                    <CharactersDetail />
                                </ErrorBoundary>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/location"
                        element={
                            <PrivateRoute>
                                <ErrorBoundary key="2">
                                    <LocationList />
                                </ErrorBoundary>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/location/:elementId"
                        element={
                            <PrivateRoute>
                                <ErrorBoundary>
                                    <LocationDetail />
                                </ErrorBoundary>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/episode"
                        element={
                            <PrivateRoute>
                                <ErrorBoundary key="3">
                                    <EpisodeList />
                                </ErrorBoundary>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/episode/:elementId"
                        element={
                            <PrivateRoute>
                                <ErrorBoundary>
                                    <EpisodeDetail />
                                </ErrorBoundary>
                            </PrivateRoute>
                        }
                    />
                    <Route path="/login" element={<Signin />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </Suspense>
        </AuthProvider>
    );
}

export default App;
