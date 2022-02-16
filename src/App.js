import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './Page/MainPage'
import ChallengePage from './Page/ChallengePage'
import './css/reset.css'
import './css/main.css'

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/challenge/" element={<ChallengePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;