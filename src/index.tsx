import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import routerConfig from './constants/routerConfig';
import StartPage from './components/StartPage';
import theme from './styles/theme';
import store from './store/store';
import AddWordsPage from './components/AddWordsPage';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path={routerConfig.startPage} element={<StartPage />} />
                        <Route path={routerConfig.addWords} element={<AddWordsPage />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
