import React, { useEffect, useState } from 'react';

import './change-pass-page.css';
import { Button, Form, Input } from 'antd';
import { FORM_TEXT } from '@constants/constants';
import { checkPasswordIsValid } from '@utils/utils';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { authActions } from '@redux/slices/auth-slice';

export const ChangePassPage: React.FC = () => {
    const dispatch = useAppDispatch();

    const password = useAppSelector(state => state.auth.password);
    const isPasswordValid = useAppSelector(state => state.auth.isPasswordValid);
    const confirmPassword = useAppSelector(state => state.auth.confirmPassword);
    const isConfirmPasswordValid = useAppSelector(state => state.auth.isConfirmPasswordValid);

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
        const value = e.target.value;
        dispatch(authActions.setConfirmPassword(value));
        checkConfirmPassword(value);
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        dispatch(authActions.setPassword(value));
        checkPassword(value);
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
