import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

import './_GoBackHeaderButton.scss';

interface GoBackHeaderButtonInterface {
    goBackLink: string;
    goBackTitle?: string;
}

function GoBackHeaderButton({ goBackLink, goBackTitle }: GoBackHeaderButtonInterface) {
    return (
        <Link className="go-back-header-button" to={goBackLink}>
            <ArrowBackRoundedIcon />
            <span className="go-back-header-button__text">{goBackTitle}</span>
        </Link>
    );
}

GoBackHeaderButton.defaultProps = {
    goBackTitle: '',
};

export default GoBackHeaderButton;
