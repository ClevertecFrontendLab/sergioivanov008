import React from 'react';

import './change-pass-page.css';

export const ChangePassPage: React.FC = () => {

    return (
        <div className='auth-page'>
            <div className="cover-element">
                <div className="confirm-wrapper">
                change-pass-page
                    {/* <div className="result-icon">{!isErrorConfirmCode ? <IconAttention /> : <IconError />}</div>
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
                    />
                    <div className="result-text__main">Не пришло письмо? Проверьте папку Спам.</div> */}
                </div>
            </div>
        </div>
    );
};
