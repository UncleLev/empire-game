import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import routerConfig from '../../constants/routerConfig';
import PageWithHeader from '../PageWithHeader';

import './MenuPage.scss';

function MenuPage() {
    return (
        <PageWithHeader pageTitle="Menu" className="menu-page">
            <div className="menu-page__wrapper">
                <div className="menu-page__container">
                    <Button fullWidth size="large" variant="outlined" className="menu-page__btn">
                        <Link to={routerConfig.addWords}>Add Words</Link>
                    </Button>
                    <Button fullWidth size="large" variant="outlined" className="menu-page__btn">
                        <Link to={routerConfig.wordList}>Words List</Link>
                    </Button>
                    <Button fullWidth size="large" variant="outlined" className="menu-page__btn">
                        <Link to={routerConfig.startPage}>Change Category</Link>
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
