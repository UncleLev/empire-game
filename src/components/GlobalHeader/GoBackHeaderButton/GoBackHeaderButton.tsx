import React from 'react';

interface GoBackHeaderButtonInterface {
    goBackLink: string;
    goBackTitle?: string;
}

function GoBackHeaderButton({ goBackLink, goBackTitle }: GoBackHeaderButtonInterface) {
    return (
        <div>
            {goBackLink}
            {goBackTitle}{' '}
        </div>
    );
}

GoBackHeaderButton.defaultProps = {
    goBackTitle: '',
};

export default GoBackHeaderButton;
