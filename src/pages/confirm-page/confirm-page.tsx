import React from 'react';

import './confirm-page.css';
import { IconAttention } from '@components/icon-attention';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import VerificationInput from 'react-verification-input';
import { apiConfirmPassActions } from '@redux/slices/api-confirm-pass-slice';
import { IconError } from '@components/icon-error';

export const ConfirmPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const curEmail = useAppSelector(state => state.apiForgotPass.forgotPassOkResponse?.email);
    const confirmInputValue = useAppSelector(state => state.apiConfirmPass.confirmInputValue);
    const isErrorConfirmCode = useAppSelector(state => state.apiConfirmPass.isErrorConfirmCode);

    const handleCompleteCode = (value: string) => {
        const data = {
            confirmPassData: {
                email: curEmail,
                code: value,
            }
        };

        dispatch(apiConfirmPassActions.startConfirmPass(data));
    }

    return (
        <div className='auth-page'>
            <div className="cover-element">
                <div className="confirm-wrapper">
                    <div className="result-icon">{!isErrorConfirmCode ? <IconAttention /> : <IconError />}</div>
                    <div className="confirm-text__wrapper">
                        <div className="result-text__title">
                        {!isErrorConfirmCode ? '' : 'Неверный код. '}
                        Введите код <br />для восстановления аккауанта</div>
                        <div className="result-text__main">Мы отправили вам на e-mail
                            <span className='email-accent'> {curEmail} </span><br />
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
                    <div className="result-text__main">Не пришло письмо? Проверьте папку Спам.</div>
                </div>
            </div>
        </div>
    );
};
