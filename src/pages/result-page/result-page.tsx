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
import { authActions } from '@redux/slices/auth-slice';
import { IconWarning } from '@components/icon-warning';
import { apiForgotPassActions } from '@redux/slices/api-forgot-pass-slice';
import { IconWrong } from '@components/icon-wrong';

export const ResultPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const registrationData = useAppSelector(state => state.apiRegistration.registrationData);
    const forgotPassData = useAppSelector(state => state.apiForgotPass.forgotPassData);
    const changePassData = useAppSelector(state => state.auth.changePassData);

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
                        dispatch(authActions.setCanResultPage(false));
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
                        dispatch(authActions.setCanResultPage(false));
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
                        dispatch(authActions.setCanResultPage(false));
                        dispatch(push(ROUTE.REGISTRATION));
                        dispatch(apiRegistrationActions.startRegistration(registrationData));
                    }}
                >
                    Повторить
                </Button>
        },
        'error-login': {
            icon: <div className="result-icon"><IconWarning /></div>,
            title: <div className="result-text__title">Вход не выполнен</div>,
            main: <div className="result-text__main">Что-то пошло не так.
                Попробуйте еще раз</div>,
            btn: <Button
                    className='result-btn'
                    type="primary"
                    onClick={() => {
                        dispatch(authActions.setCanResultPage(false));
                        dispatch(push(ROUTE.AUTH));
                    }}
                >
                    Повторить
                </Button>
        },
        'error-check-email-no-exist': {
            icon: <div className="result-icon"><IconError /></div>,
            title: <div className="result-text__title">Такой e-mail не зарегистрирован</div>,
            main: <div className="result-text__main">Мы не нашли в базе вашего e-mail.
                Попробуйте войти с другим e-mail.</div>,
            btn: <Button
                    className='result-btn'
                    type="primary"
                    onClick={() => {
                        dispatch(authActions.setCanResultPage(false));
                        dispatch(push(ROUTE.AUTH));
                    }}
                >
                    Попробовать снова
                </Button>
        },
        'error-check-email': {
            icon: <div className="result-icon"><IconWrong /></div>,
            title: <div className="result-text__title">Что-то пошло не так</div>,
            main: <div className="result-text__main">Произошла ошибка,
                попробуйте отправить форму ещё раз.</div>,
            btn: <Button
                    className='result-btn'
                    type="primary"
                    onClick={() => {
                        dispatch(authActions.setCanResultPage(false));
                        dispatch(push(ROUTE.AUTH));
                        dispatch(apiForgotPassActions.startForgotPass(forgotPassData));
                    }}
                >
                    Назад
                </Button>
        },
        'error-change-password': {
            icon: <div className="result-icon"><IconError /></div>,
            title: <div className="result-text__title">Данные не сохранились</div>,
            main: <div className="result-text__main">Что-то пошло не так.
                Попробуйте ещё раз</div>,
            btn: <Button
                    className='result-btn'
                    type="primary"
                    onClick={() => {
                        dispatch(authActions.setCanResultPage(false));
                        dispatch(push(ROUTE.CHANGE_PASS));
                        dispatch(authActions.startChangePass(changePassData));
                    }}
                >
                    Повторить
                </Button>
        },
        'success-change-password': {
            icon: <div className="result-icon"><IconSuccess /></div>,
            title: <div className="result-text__title">Пароль успешно изменен</div>,
            main: <div className="result-text__main">Теперь можно войти в аккаунт, используя<br />
                свой логин и новый пароль</div>,
            btn: <Button
                    className='result-btn'
                    type="primary"
                    onClick={() => {
                        dispatch(authActions.setCanResultPage(false));
                        dispatch(push(ROUTE.AUTH));
                    }}
                >
                    Вход
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
