import React from 'react';

import './confirm-page.css';
import { IconAttention } from '@components/icon-attention';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import VerificationInput from 'react-verification-input';
import { apiConfirmPassActions } from '@redux/slices/api-confirm-pass-slice';
import { IconError } from '@components/icon-error';
import { NUMBER_DATA } from '@constants/constants';
import {
    confirmInputValueSelector,
    emailForgotSelector,
    isErrorConfirmCodeSelector } from '@redux/sagas/selectors';

export const ConfirmPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const emailForgot = useAppSelector(emailForgotSelector);
    const confirmInputValue = useAppSelector(confirmInputValueSelector);
    const isErrorConfirmCode = useAppSelector(isErrorConfirmCodeSelector);

    const handleCompleteCode = (value: string) => {
        const data = {
            confirmPassData: {
                email: emailForgot,
                code: value,
            }
        };

        dispatch(apiConfirmPassActions.startConfirmPass(data));
    }

    const breakWidthStyle = document.documentElement.clientWidth >= NUMBER_DATA.BREAK_WIDTH ? '' : <br />;

    return (
        <div className='auth-page'>
            <div className="cover-element">
                <div className="confirm-wrapper">
                    <div className="result-icon">{!isErrorConfirmCode ? <IconAttention /> : <IconError />}</div>
                    <div className="confirm-text__wrapper custom14">
                        <div className="result-text__title custom17">
                        {!isErrorConfirmCode ? 'Введите код ' : 'Неверный код. Введите код '}
                        {breakWidthStyle}для восстановления аккауанта</div>
                        <div className="result-text__main custom16">Мы отправили вам на e-mail
                            <span className='email-accent'> {emailForgot} </span><br />
                            шестизначный код. Введите его в поле ниже.</div>
                    </div>
                    <VerificationInput
                        placeholder=''
                        value={confirmInputValue}
                        autoFocus
                        onChange={
                            (value) => dispatch(apiConfirmPassActions.setConfirmInputValue(value))
                        }
                        classNames={{
                            container: 'verification-input',
                            character: `verification-character ${!isErrorConfirmCode? '' : 'error'}`,
                        }}
                        onComplete={(value) => {
                            dispatch(apiConfirmPassActions.setConfirmInputValue(value));
                            handleCompleteCode(value)}
                        }
                        inputProps={{
                            "data-test-id": "verification-input"
                        }}
                    />
                    <div className="result-text__main custom15">Не пришло письмо? Проверьте папку Спам.</div>
                </div>
            </div>
        </div>
    );
};
