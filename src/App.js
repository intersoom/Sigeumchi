import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './Page/MainPage'
import ChallengePage from './Page/ChallengePage'
import ChallengeDetailPage from './Page/ChallengeDetailPage'
import ChallengeCertifyPage from './Page/ChallengeCertifyPage'
import ChallengerPage from './Page/ChallengerPage'
import './css/reset.css'
import './css/main.css'
import ChallengeSumitDone from "./Page/ChallengeSubmitDoneUI";
import ChallengeCertifyWritePage from "./Page/ChallengeCertifyWritePage";
import Load from "./Page/Load";

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/challenge" element={<ChallengePage />} />
                <Route path="/detail/:id" element={<ChallengeDetailPage />} />
                <Route path="/certify" element={<ChallengeCertifyPage />} />
                <Route path="/challenger" element={<ChallengerPage />} />
                <Route path="/submit" element={<ChallengeSumitDone />} />
                <Route path="/certifyWrite" element={<ChallengeCertifyWritePage />} />
                <Route path="/load" element={<Load />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;