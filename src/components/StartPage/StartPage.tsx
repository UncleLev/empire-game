import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import routerConfig from '../../constants/routerConfig';
import PageWithHeader from '../PageWithHeader';

import './_StartPage.scss';

interface StartPageInterface {
    category: string;
    changeGameCategory: (value: string) => void;
}

function StartPage({ category, changeGameCategory }: StartPageInterface) {
    const navigate = useNavigate();
    const { t } = useTranslation(['general', 'startPage', 'validation']);

    const validationSchema = yup.object().shape({
        category: yup
            .string()
            .required(t('validation:required'))
            .min(2, t('validation:minLength', { val: 2 }))
            .max(256, t('validation:maxLength', { val: 256 })),
    });

    const {
        formState: { errors, isDirty, isValid },
        control,
        handleSubmit,
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            category,
        },
        mode: 'all',
    });

    const onSubmit = (data: any) => {
        changeGameCategory(data.category);
        navigate(routerConfig.addWords);
    };

    return (
        <PageWithHeader pageTitle="Empire Game" className="start-page">
            <div className="start-page__container">
                <div className="start-page__input-container start-page-input-container">
                    <form className="start-page-input-container__form" onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="start-page-input-container__title">{t('startPage:typeCategory')}</h3>
                        <Controller
                            control={control}
                            name="category"
                            render={({ field }) => (
                                <TextField
                                    fullWidth
                                    onChange={field.onChange}
                                    name={field.name}
                                    value={field.value}
                                    className="start-page-input-container__input"
                                    label={t('general:category')}
                                    margin="normal"
                                    error={!!errors?.category}
                                    helperText={errors?.category?.message || ' '}
                                />
                            )}
                        />
                        <Button
                            size="large"
                            fullWidth
                            type="submit"
                            disabled={!isDirty || !isValid}
                            variant="contained"
                            color="success"
                        >
                            {t('general:start')}
                        </Button>
                    </form>
                </div>
            </div>
        </PageWithHeader>
    );
}

export default StartPage;
