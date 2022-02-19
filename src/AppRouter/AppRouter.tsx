import React from 'react';
import { Route } from 'react-router-dom';
import routerConfig from '../constants/routerConfig';
import StartPage from '../components/StartPage';

function AppRouter() {
    return <Route path={routerConfig.startPage} element={StartPage} />;
}

export default AppRouter;
