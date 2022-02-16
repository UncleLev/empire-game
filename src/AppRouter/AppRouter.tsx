import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routerConfig from '../constants/routerConfig';
import StartPage from '../components/StartPage';

function AppRouter() {
    return (
        <Routes>
            <Route path={routerConfig.startPage} element={StartPage} />
        </Routes>
    );
}

export default AppRouter;
