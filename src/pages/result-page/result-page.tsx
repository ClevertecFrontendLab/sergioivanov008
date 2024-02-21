import React from 'react';

import './result-page.css';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { IconSuccess } from './../../components/icon-success/icon-success';
import { ROUTE } from '@constants/constants';
import { Button } from 'antd';
import { push } from 'redux-first-history';
import { FormItems } from '../../types/types';
import { IconError } from '@components/icon-error';
import { apiRegistrationActions } from '@redux/slices/api-registration-slice';
import { loadersActions } from '@redux/slices/loaders-slice';
import { authActions } from '@redux/slices/auth-slice';

export const ResultPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const registrationData = useAppSelector(state => state.apiRegistration.registrationData);

    const params = useParams();
    const curItem = params?.result as string;

    const formItems: FormItems = {
        'success': {
            icon: <div className="result-icon"><IconSuccess /></div>,
            title: <div className="result-text__title">Регистрация успешна</div>,
            main: <div className="result-text__main">Регистрация прошла успешно. Зайдите
                в приложение, используя свои e-mail и пароль.</div>,
            btn: <Button
                    className='result-btn'
                    type="primary"
                    onClick={() => {
                        dispatch(authActions.setCanResultPage(true));
                        dispatch(push(ROUTE.AUTH));
                    }}
                >
                    Войти
                </Button>
        },
        'error-user-exist': {
            icon: <div className="result-icon"><IconError /></div>,
            title: <div className="result-text__title">Данные не сохранились</div>,
            main: <div className="result-text__main">Такой e-mail уже записан в системе.
                Попробуйте зарегистрироваться по другому e-mail.</div>,
            btn: <Button
                    className='result-btn'
                    type="primary"
                    onClick={() => {
                        dispatch(authActions.setCanResultPage(true));
                        dispatch(push(ROUTE.REGISTRATION));
                    }}
                >
                    Назад к регистрации
                </Button>
        },
        'error': {
            icon: <div className="result-icon"><IconError /></div>,
            title: <div className="result-text__title">Данные не сохранились</div>,
            main: <div className="result-text__main">Что-то пошло не так и ваша регистрация
                не завершилась. Попробуйте ещё раз.</div>,
            btn: <Button
                    className='result-btn'
                    type="primary"
                    onClick={() => {
                        dispatch(authActions.setCanResultPage(true));
                        dispatch(push(ROUTE.REGISTRATION));
                        dispatch(apiRegistrationActions.startRegistration(registrationData));
                        dispatch(loadersActions.toggleIsLoaderVisible(true));
                    }}
                >
                    Повторить
                </Button>
        },
    }

    return (
        <div className='auth-page'>
            <div className="cover-element">
                <div className="form-result">
                    {formItems[curItem].icon}
                    <div className="result-text__wrapper">
                        {formItems[curItem].title}
                        {formItems[curItem].main}
                    </div>
                    {formItems[curItem].btn}
                </div>
            </div>
        </div>
    );
};
