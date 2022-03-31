import { yupResolver } from '@hookform/resolvers/yup';
import { Autocomplete, Button, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { editWordInterface } from 'src/store/actions';
import { wordListItemType } from 'src/store/game/game.reducer';
import * as yup from 'yup';
import { CustomDialog } from '../CustomDialog';

import './EditWordModal.scss';

interface EditWordModalInterface {
    selectedWord: wordListItemType;
    empiresList: wordListItemType[];
    open: boolean;
    onClose(): void;
    editWord(payload: editWordInterface): void;
    deleteWord(wordId: string): void;
}

const validationSchema = yup.object().shape({
    value: yup
        .string()
        .required('This field is required')
        .min(2, 'Min length is 2 symbols')
        .max(120, 'Max length is 75 symbols'),
});

const EditWordModal = ({ selectedWord, open, empiresList, onClose, editWord, deleteWord }: EditWordModalInterface) => {
    const [empire, setEmpire] = useState<wordListItemType | null>();
    const {
        formState: { isValid, isDirty, errors },
        control,
        getValues,
    } = useForm({
        defaultValues: { value: selectedWord.value },
        resolver: yupResolver(validationSchema),
        mode: 'all',
    });

    const options = useMemo(
        () => empiresList.filter(({ id }) => (selectedWord ? id !== selectedWord.id : false)),
        [selectedWord],
    );

    const wordEmpire = useMemo(() => empiresList.find(({ id }) => id === selectedWord.empireId), []);

    const showSelect = !selectedWord.fake && selectedWord.empireId;

    const showDelete = !selectedWord.empireId || !!selectedWord.subjects.length;

    const handleSubmit = () => {
        const data = getValues();
        editWord({
            value: data.value,
            wordId: selectedWord.id,
            empireId: empire?.id,
        });
        onClose();
    };

    const handleDelete = () => {
        deleteWord(selectedWord.id);
        onClose();
    };

    return (
        <CustomDialog open={open} className="edit-word-modal">
            <DialogTitle>Defeat of empire</DialogTitle>
            <DialogContent className="edit-word-modal__content">
                <Controller
                    name="value"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            label="Word value"
                            fullWidth
                            value={field.value}
                            name={field.name}
                            onChange={field.onChange}
                            error={!!errors.value}
                            helperText={errors?.value?.message || ' '}
                        />
                    )}
                />

                {showSelect && (
                    <Autocomplete
                        sx={{ width: 300 }}
                        options={options}
                        getOptionLabel={(option: wordListItemType) => option.value}
                        onChange={(e, value) => setEmpire(value)}
                        defaultValue={wordEmpire}
                        renderInput={(params) => (
                            <TextField
                                // eslint-disable-next-line react/jsx-props-no-spreading
                                {...params}
                                label="In empire"
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                }}
                            />
                        )}
                    />
                )}

                {showDelete && (
                    <Button variant="contained" onClick={handleDelete}>
                        DELETE
                    </Button>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button disabled={!isValid && isDirty} onClick={handleSubmit}>
                    Ok
                </Button>
            </DialogActions>
        </CustomDialog>
    );
};

export default EditWordModal;
