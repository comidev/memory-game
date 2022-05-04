import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Game from "pages/Game";
import Results from "pages/Results";
import UserProtected from "components/UserProtected";
import { UserProvider } from "context/UserProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <UserProvider>
            <Routes>
                <Route path="" element={<Navigate to="home" replace />} />
                <Route path="/" element={<App />}>
                    <Route index path="home" element={<Home />} />
                    <Route
                        index
                        path="game"
                        element={
                            <UserProtected>
                                <Game />
                            </UserProtected>
                        }
                    />
                    <Route
                        index
                        path="results"
                        element={
                            <UserProtected>
                                <Results />
                            </UserProtected>
                        }
                    />
                </Route>
                <Route path="*" element={<Navigate to="home" replace />} />
            </Routes>
        </UserProvider>
    </BrowserRouter>
);
