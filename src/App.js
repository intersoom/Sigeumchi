import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './Page/MainPage'
import ChallengePage from './Page/ChallengePage'
import ChallengeDetailPage from './Page/ChallengeDetailPage'
import ChallengeCertifyPage from './Page/ChallengeCertifyPage'
import ChallengerPage from './Page/ChallengerPage'
import './css/reset.css'
import './css/main.css'

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/challenge" element={<ChallengePage />} />
                <Route path="/detail" element={<ChallengeDetailPage />} />
                <Route path="/certify" element={<ChallengeCertifyPage />} />
                <Route path="/challenger" element={<ChallengerPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;