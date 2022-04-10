import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './_GoBackHeaderButton.scss';

interface GoBackHeaderButtonInterface {
    goBackLink: string;
    goBackTitle?: string;
}

function GoBackHeaderButton({ goBackLink, goBackTitle }: GoBackHeaderButtonInterface) {
    return (
        <Link className="go-back-header-button" to={goBackLink}>
            <ArrowBackIosIcon />
            <span className="go-back-header-button__text">{goBackTitle}</span>
        </Link>
    );
}

GoBackHeaderButton.defaultProps = {
    goBackTitle: '',
};

export default GoBackHeaderButton;
