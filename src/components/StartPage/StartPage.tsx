import React from 'react';
import { Button, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import PageWithHeader from '../PageWithHeader';

import './_StartPage.scss';
import routerConfig from '../../constants/routerConfig';

const validationSchema = yup.object().shape({
    category: yup
        .string()
        .required('This field is required')
        .min(2, 'Min length is 2 symbols')
        .max(75, 'Max length is 75 symbols'),
});

interface StartPageInterface {
    category: string;
    changeGameCategory: (value: string) => void;
}

function StartPage({ category, changeGameCategory }: StartPageInterface) {
    const navigate = useNavigate();
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="start-page__input-container start-page-input-container">
                        <h3 className="start-page-input-container__title">Type category</h3>
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
                                    label="Category"
                                    margin="normal"
                                    error={!!errors?.category}
                                    helperText={errors?.category?.message || ' '}
                                />
                            )}
                        />
                        <Button type="submit" disabled={!isDirty || !isValid} variant="contained" color="success">
                            Start
                        </Button>
                    </div>
                </form>
            </div>
        </PageWithHeader>
    );
}

export default StartPage;
