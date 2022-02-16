import React from 'react';
import GoBackHeaderButton from './GoBackHeaderButton/GoBackHeaderButton';
import './_GlobalHeader.scss';

export interface GlobalHeaderInterface {
    title?: string;
    goBackLink?: string;
    goBackTitle?: string;
}

function GlobalHeader(props: GlobalHeaderInterface) {
    const { title, goBackLink, goBackTitle } = props;
    return (
        <div className="global-header">
            <div className="global-header__background">{title}</div>
            {goBackLink && <GoBackHeaderButton goBackLink={goBackLink} goBackTitle={goBackTitle} />}
        </div>
    );
}

GlobalHeader.defaultProps = {
    title: '',
    goBackLink: '',
    goBackTitle: 'Back',
};

export default GlobalHeader;
