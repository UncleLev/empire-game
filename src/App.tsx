import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routerConfig from 'src/constants/routerConfig';
import AddWordsPage from './components/AddWordsPage';
import MenuPage from './components/MenuPage';
import StartPage from './components/StartPage';
import WordListPage from './components/WordListPage';
import publicRoute from './service/hook/publicRoute';

import './index.css';

function App() {
    return (
        <Routes>
            <Route path={routerConfig.startPage} element={publicRoute(<StartPage />)} />
            <Route path={routerConfig.addWords} element={publicRoute(<AddWordsPage />)} />
            <Route path={routerConfig.menu} element={publicRoute(<MenuPage />)} />
            <Route path={routerConfig.wordList} element={publicRoute(<WordListPage />)} />
        </Routes>
    );
}

export default App;
