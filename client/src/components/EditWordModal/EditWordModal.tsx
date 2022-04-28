import { yupResolver } from '@hookform/resolvers/yup';
import { Autocomplete, Button, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
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

const EditWordModal = ({ selectedWord, open, empiresList, onClose, editWord, deleteWord }: EditWordModalInterface) => {
    const { t } = useTranslation(['validation', 'general', 'editModal']);

    const [empire, setEmpire] = useState<wordListItemType | null>();

    const validationSchema = yup.object().shape({
        value: yup
            .string()
            .required(t('validation:required'))
            .min(2, t('validation:minLength', { val: 2 }))
            .max(256, t('validation:maxLength', { val: 256 })),
    });

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
            <DialogTitle>
                {t('editModal:editEmpire')} {`"${selectedWord.value}"`}
            </DialogTitle>
            <DialogContent className="edit-word-modal__content">
                <Controller
                    name="value"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            label={t('editModal:wordValue')}
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
                                label={t('editModal:inEmpire')}
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'off',
                                }}
                            />
                        )}
                    />
                )}

                {showDelete && (
                    <Button variant="contained" onClick={handleDelete}>
                        {t('general:delete')}
                    </Button>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>{t('general:cancel')}</Button>
                <Button disabled={!isValid && isDirty} onClick={handleSubmit}>
                    {t('general:okay')}
                </Button>
            </DialogActions>
        </CustomDialog>
    );
};

export default EditWordModal;
