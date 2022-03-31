import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import routerConfig from '../../constants/routerConfig';
import PageWithHeader from '../PageWithHeader';

import './MenuPage.scss';

function MenuPage() {
    const navigate = useNavigate();

    return (
        <PageWithHeader pageTitle="Menu" className="menu-page">
            <div className="menu-page__wrapper">
                <div className="menu-page__container">
                    <Button
                        fullWidth
                        size="large"
                        variant="outlined"
                        className="menu-page__btn"
                        onClick={() => navigate(routerConfig.addWords)}
                    >
                        Add Words
                    </Button>
                    <Button
                        fullWidth
                        size="large"
                        variant="outlined"
                        className="menu-page__btn"
                        onClick={() => navigate(routerConfig.wordList)}
                    >
                        Words List
                    </Button>
                    <Button
                        fullWidth
                        size="large"
                        variant="outlined"
                        className="menu-page__btn"
                        onClick={() => navigate(routerConfig.startPage)}
                    >
                        Change Category
                    </Button>
                    {/* <div className="menu-page__launder"> TODO: add language support 
                        <Button>ENG</Button>
                        <Button>UA</Button>
                    </div> */}
                </div>
            </div>
        </PageWithHeader>
    );
}

export default MenuPage;
