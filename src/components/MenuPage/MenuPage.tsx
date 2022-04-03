import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import routerConfig from '../../constants/routerConfig';
import PageWithHeader from '../PageWithHeader';
import { availableLanguages } from '../../i18n';
import './MenuPage.scss';

function MenuPage() {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation('menu');

    const handleChangeLanguage = (language: string) => () => {
        i18n.changeLanguage(language);
    };

    return (
        <PageWithHeader pageTitle="Menu" className="menu-page">
            <div className="menu-page__wrapper">
                <div className="menu-page__container">
                    <div className="menu-page__languages">
                        {availableLanguages.map((lng) => (
                            <Button
                                color="success"
                                variant={lng === i18n.language ? 'contained' : 'outlined'}
                                onClick={handleChangeLanguage(lng)}
                            >
                                {lng}
                            </Button>
                        ))}
                    </div>
                    <div className="menu-page__nav">
                        <Button
                            fullWidth
                            size="large"
                            variant="outlined"
                            className="menu-page__btn"
                            onClick={() => navigate(routerConfig.addWords)}
                        >
                            {t('menu:addWords')}
                        </Button>
                        <Button
                            fullWidth
                            size="large"
                            variant="outlined"
                            className="menu-page__btn"
                            onClick={() => navigate(routerConfig.wordList)}
                        >
                            {t('menu:wordList')}
                        </Button>
                        <Button
                            fullWidth
                            size="large"
                            variant="outlined"
                            className="menu-page__btn"
                            onClick={() => navigate(routerConfig.startPage)}
                        >
                            {t('menu:changeCategory')}
                        </Button>
                    </div>
                </div>
            </div>
        </PageWithHeader>
    );
}

export default MenuPage;
