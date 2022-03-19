import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Autocomplete, TextField } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { wordListItemType } from '../../store/game/game.reducer';

import './DefeatModal.scss';

interface DefeatModalInterface {
    open: boolean;
    empiresList: wordListItemType[];
    selectedWord: wordListItemType | null;
    onClose(): void;
    defeatEmpire(payload: { empire: wordListItemType; defeat: wordListItemType }): void;
}

function DefeatModal({ open, onClose, defeatEmpire, empiresList, selectedWord }: DefeatModalInterface) {
    const [empire, setEmpire] = useState<wordListItemType | null>();

    const handleSubmit = () => {
        if (!empire || !selectedWord) {
            console.error('Can`t find empire or selectedWord');
            return;
        }
        defeatEmpire({ empire, defeat: selectedWord });
        onClose();
    };

    const options = useMemo(
        () => empiresList.filter(({ id }) => (selectedWord ? id !== selectedWord.id : false)),
        [selectedWord],
    );

    return (
        <Dialog className="defeat-modal" open={open}>
            <DialogTitle>Defeat of empire</DialogTitle>
            <DialogContent className="defeat-modal__content">
                <Autocomplete
                    sx={{ width: 300 }}
                    options={options}
                    getOptionLabel={(option: wordListItemType) => option.value}
                    onChange={(e, value) => setEmpire(value)}
                    renderInput={(params) => (
                        <TextField
                            // eslint-disable-next-line react/jsx-props-no-spreading
                            {...params}
                            label="Choose a empire"
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                        />
                    )}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button disabled={!empire} onClick={handleSubmit}>
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    );
}

DefeatModal.defaultProps = {
    // empiresList: [],
};

export default DefeatModal;
