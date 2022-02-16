import React from 'react';
import { TextField } from '@mui/material';
import PageWithHeader from '../PageWithHeader';

function StartPage() {
    return (
        <PageWithHeader pageTitle="Empire Game" className="start-page">
            <div className="start-page__container">
                <h3>Type category</h3>
                <TextField id="outlined-required" label="Required" defaultValue="Hello World" />
            </div>
        </PageWithHeader>
    );
}

export default StartPage;
