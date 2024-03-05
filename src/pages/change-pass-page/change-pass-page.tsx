import React, { useEffect, useState } from 'react';

import './change-pass-page.css';
import { Button, Form, Input } from 'antd';
import { FORM_TEXT } from '@constants/constants';
import { checkPasswordIsValid } from '@utils/utils';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { authActions } from '@redux/slices/auth-slice';
import {
    confirmPasswordSelector,
    isConfirmPasswordValidSelector,
    isPasswordValidSelector,
    passwordSelector } from '@redux/sagas/selectors';

export const ChangePassPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const password = useAppSelector(passwordSelector);
    const isPasswordValid = useAppSelector(isPasswordValidSelector);
    const confirmPassword = useAppSelector(confirmPasswordSelector);
    const isConfirmPasswordValid = useAppSelector(isConfirmPasswordValidSelector);

    const [isCanSubmit, setIsCanSubmit ] = useState(false);

    const [curValidateStatus, setCurValidateStatus] = useState({
        isPasswordValid: true,
        isConfirmPasswordValid: true,
    });

    const onFinish = () => {
        dispatch(authActions.startChangePass({changePassData: {password: password, confirmPassword: confirmPassword}}));
    }

    useEffect(() => {
        setIsCanSubmit(isPasswordValid && isConfirmPasswordValid);
    }, [isConfirmPasswordValid, isPasswordValid]);

    const checkConfirmPassword = (v: string) => {
        dispatch(authActions.setIsConfirmPasswordValid(v === password));
        setCurValidateStatus({...curValidateStatus, isConfirmPasswordValid: v === password});
    }

    const checkPassword = (v: string) => {
        const isPasswordValid = checkPasswordIsValid(v);
        dispatch(authActions.setIsPasswordValid(isPasswordValid));
        setCurValidateStatus({...curValidateStatus, isPasswordValid: isPasswordValid});
    }

    const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(authActions.setConfirmPassword(e.target.value));
        checkConfirmPassword(e.target.value);
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(authActions.setPassword(e.target.value));
        checkPassword(e.target.value);
    }

    return (
        <div className='auth-page'>
            <div className="cover-element">
                <div className="change-pass-wrapper">
                    <div className="result-text__title">Восстановление аккауанта</div>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <div className="class114">
                            <Form.Item
                                name="password"
                                validateStatus={curValidateStatus.isPasswordValid ? "success" : "error"}
                                help={
                                    <div className={`class113 ${curValidateStatus.isPasswordValid ? '' : 'red'}`}>
                                        {FORM_TEXT.RULE_PASS}
                                    </div>
                                }
                            >
                                <Input.Password
                                    className='class110'
                                    placeholder={FORM_TEXT.PLACE_NEW_PASS}
                                    value={password}
                                    onChange={handlePassword}
                                    data-test-id='change-password'
                                />
                            </Form.Item>
                            <Form.Item
                                name="confirmPassword"
                                style={{marginTop: '14px'}}
                                validateStatus={curValidateStatus.isConfirmPasswordValid ? "success" : "error"}
                                help={!curValidateStatus.isConfirmPasswordValid
                                            ? ( <div className={`class113 red`}>
                                                    {FORM_TEXT.RULE_CONFIRM}
                                                </div>)
                                            : ''}
                            >
                                <Input.Password
                                    className='class110'
                                    placeholder={FORM_TEXT.PLACE_REPEAT_PASS}
                                    value={confirmPassword}
                                    onChange={handleConfirmPassword}
                                    data-test-id='change-confirm-password'
                                />
                            </Form.Item>
                        </div>
                        <div className="class112">
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                                disabled={!isCanSubmit}
                                data-test-id='change-submit-button'
                            >
                                Сохранить
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};
