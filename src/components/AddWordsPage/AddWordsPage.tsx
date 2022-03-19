import React, { useState } from 'react';
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useLocation } from 'react-router-dom';
import PageWithHeader from '../PageWithHeader';
import routerConfig from '../../constants/routerConfig';
import { wordListItemType } from '../../store/game/game.reducer';

import './_AddWordsPage.scss';

const defaultValues = {
    word: '',
    fake: false,
};

const validationSchema = yup.object().shape({
    word: yup.string().min(2, 'Min length is 2 symbols').max(120, 'Max length is 120 symbols').required(),
    fake: yup.boolean(),
});

interface AddWordsPageInterface {
    wordsList: wordListItemType[];
    // eslint-disable-next-line no-unused-vars
    addWord: (value: any) => void;
    category: string;
}

function AddWordsPage({ wordsList, category, addWord }: AddWordsPageInterface) {
    const location = useLocation();
    const {
        formState: { isValid, isDirty, errors },
        reset,
        control,
        handleSubmit,
    } = useForm({
        defaultValues,
        resolver: yupResolver(validationSchema),
        mode: 'all',
    });

    const [isWordAdded, setIsWordAdded] = useState(false);

    const onSubmit = (data: any) => {
        addWord({
            value: data.word,
            fake: data.fake,
        });
        reset(defaultValues);
        setIsWordAdded(true);
    };

    const handleAddMore = () => {
        setIsWordAdded(false);
    };

    // const backLink = location?.state?.form;

    return (
        <PageWithHeader pageTitle="Add words" className="add-words-page" goBackLink={routerConfig.startPage}>
            <div className="add-words-page__container">
                {!isWordAdded ? (
                    <div className="add-words-page__form add-words-page-form">
                        <h3 className="add-words-page-form__category">Категорія: {category}</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Controller
                                name="word"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        autoFocus
                                        label="Введіть слово"
                                        fullWidth
                                        value={field.value}
                                        name={field.name}
                                        onChange={field.onChange}
                                        error={!!errors.word}
                                        helperText={errors?.word?.message || ' '}
                                    />
                                )}
                            />

                            <Controller
                                name="fake"
                                control={control}
                                render={({ field }) => (
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                title="fake"
                                                value={field.value}
                                                name={field.name}
                                                onChange={field.onChange}
                                            />
                                        }
                                        label="fake"
                                    />
                                )}
                            />

                            <Button
                                size="large"
                                fullWidth
                                variant="contained"
                                type="submit"
                                disabled={!isDirty || !isValid}
                            >
                                Дадати
                            </Button>
                        </form>
                    </div>
                ) : (
                    <div className="add-words-page__word-added-container add-words-page-word-added-container">
                        <h2 className="add-words-page-word-added-container__title"> Слово Додано</h2>
                        <p className="add-words-page-word-added-container__total">Total: {wordsList.length}</p>
                        <Button size="large" variant="outlined" fullWidth onClick={handleAddMore}>
                            Додати ще
                        </Button>
                        <Link className="add-words-page-word-added-container__link" to={routerConfig.menu}>
                            <Button size="large" variant="contained" fullWidth>
                                Меню
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </PageWithHeader>
    );
}

export default AddWordsPage;
