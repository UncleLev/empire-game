/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Dialog, DialogProps } from '@mui/material';

const CustomDialog = (props: DialogProps) => {
    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '95%', maxHeight: 435 } }}
            maxWidth="xs"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        />
    );
};

export default CustomDialog;
