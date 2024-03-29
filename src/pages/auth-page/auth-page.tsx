import React, { useEffect, useState } from 'react';

import 'antd/dist/antd.css';
import './auth-page.css';
import { Button, Checkbox, Form, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, GooglePlusOutlined } from '@ant-design/icons';
import { API, FORM_TEXT, IS_REMEMBERED, ROUTE } from '@constants/constants';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { authActions } from '@redux/slices/auth-slice';
import { AuthPageProps } from '../../types/types';
import { apiRegistrationActions } from '@redux/slices/api-registration-slice';
import { push } from 'redux-first-history';
import { apiForgotPassActions } from '@redux/slices/api-forgot-pass-slice';
import { checkEmailIsValid, checkPasswordIsValid } from '@utils/utils';
import { loadersActions } from '@redux/slices/loaders-slice';
import {
    confirmPasswordSelector,
    emailSelector,
    isConfirmPasswordValidSelector,
    isEmailValidSelector,
    isPasswordValidSelector,
    passwordSelector,
    rememberMeSelector } from '@redux/sagas/selectors';

export const AuthPage: React.FC<AuthPageProps> = ({ isThisAuthPage }) => {
    const dispatch = useAppDispatch()
    const email = useAppSelector(emailSelector);
    const isEmailValid = useAppSelector(isEmailValidSelector);
    const password = useAppSelector(passwordSelector);
    const isPasswordValid = useAppSelector(isPasswordValidSelector);
    const confirmPassword = useAppSelector(confirmPasswordSelector);
    const isConfirmPasswordValid = useAppSelector(isConfirmPasswordValidSelector);
    const rememberMe = useAppSelector(rememberMeSelector);

    const [isAuthorization, setIsAuthorization ] = useState(isThisAuthPage);
    const [isCanSubmit, setIsCanSubmit ] = useState(false);

    const [curValidateStatus, setCurValidateStatus] = useState({
        isEmailValid: true,
        isPasswordValid: true,
        isConfirmPasswordValid: true,
        isNeedConfirmText: false
    });

    const [isDiabledForgotPassBtn, setIsDiabledForgotPassBtn] = useState(false);

    useEffect(() => {
        if (email.length && isEmailValid) {
            setIsDiabledForgotPassBtn(false);
        }
    }, [email, isEmailValid]);

    const handleForgotPass = () => {
        if (isEmailValid) {
            dispatch(authActions.setEmailForgot(email));
            dispatch(apiForgotPassActions.startForgotPass({forgotPassData: {email: email}}));
        } else {
            setIsDiabledForgotPassBtn(true);
        }
    }

    const handleGoogleAuth = () => {
        window.location.href = `${API.host}${API.url_google_auth}`;
        dispatch(loadersActions.toggleIsLoaderVisible(true));
    }

    const onFinish = () => {
        const data = { registrationData: {email, password} };
        if (isThisAuthPage) {
            if (isEmailValid && isPasswordValid) {
                dispatch(authActions.startLogin(data));
            }
        } else {
            if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
                dispatch(apiRegistrationActions.startRegistration(data));
                dispatch(authActions.resetRegData());
            }
        }
    }

    useEffect(() => {
        if (isThisAuthPage) {
            setIsCanSubmit(isEmailValid && isPasswordValid);
        } else {
            setIsCanSubmit(isEmailValid && isPasswordValid && isConfirmPasswordValid);
        }
    }, [isThisAuthPage, isConfirmPasswordValid, isEmailValid, isPasswordValid]);

    useEffect(() => {
        if (isThisAuthPage) {
            if (isEmailValid && password.length > 0) {
                setIsCanSubmit(true);
            }
        }
    }, [isThisAuthPage, isEmailValid, password]);

    const checkConfirmPassword = (v: string) => {
        dispatch(authActions.setIsConfirmPasswordValid(v === password));
        setCurValidateStatus({...curValidateStatus, isConfirmPasswordValid: v === password});
    }

    const checkPassword = (v: string) => {
        const isPasswordValid = checkPasswordIsValid(v);
        dispatch(authActions.setIsPasswordValid(isPasswordValid));
        setCurValidateStatus({...curValidateStatus, isPasswordValid: isPasswordValid});
    }

    const checkEmail = (v: string) => {
        const isEmailValid = checkEmailIsValid(v);
        dispatch(authActions.setIsEmailValid(isEmailValid));
        setCurValidateStatus({...curValidateStatus, isEmailValid: isEmailValid});
    }

    const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(authActions.setConfirmPassword(e.target.value));
        checkConfirmPassword(e.target.value);
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(authActions.setPassword(e.target.value));
        checkPassword(e.target.value);
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(authActions.setEmail(e.target.value));
        checkEmail(e.target.value);
    }

    const handleCheckbox = () => {
        dispatch(authActions.setRememberMe(!rememberMe));
        localStorage.setItem(IS_REMEMBERED, JSON.stringify(!rememberMe));
    }

    const btnAuthClick = () => {
        dispatch(push(ROUTE.AUTH));
        setIsAuthorization(true);
    }

    const btnRegClick = () => {
        dispatch(push(ROUTE.REGISTRATION));
        setIsAuthorization(false);
    }

    const btnAuthClass = `form-nav-btn ${isAuthorization ? 'active' : ''}`;
    const btnRegClass = `form-nav-btn ${isAuthorization ? '' : 'active'}`;

    return (
        <div className='auth-page'>
            <div className="cover-element">
                <div className="form-main">
                    <div className="form-logo"></div>
                    <div className="form-nav-btns" style={{marginBottom: `${isAuthorization ? '24px' : '32px'}`}}>
                        <div
                            className={btnAuthClass}
                            onClick={btnAuthClick}
                        >
                            {FORM_TEXT.AUTH}
                        </div>
                        <div
                            className={btnRegClass}
                            onClick={btnRegClick}
                        >
                            {FORM_TEXT.REGISTRATION}
                        </div>
                    </div>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <div className="class109">
                            <Form.Item
                                name="email"
                                validateStatus={curValidateStatus.isEmailValid ? "success" : "error"}
                            >
                                <Input
                                    className='class110'
                                    addonBefore="e-mail"
                                    value={email}
                                    onChange={handleEmail}
                                    data-test-id={isAuthorization ? 'login-email' : 'registration-email'}
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                validateStatus={curValidateStatus.isPasswordValid ? "success" : "error"}
                                help={!isThisAuthPage &&
                                    <div className={`class113 ${curValidateStatus.isPasswordValid ? '' : 'red'}`}>
                                        {FORM_TEXT.RULE_PASS}
                                    </div>}
                            >
                                <Input.Password
                                    className='class110'
                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    placeholder={FORM_TEXT.PLACE_PASS}
                                    value={password}
                                    onChange={handlePassword}
                                    data-test-id={isAuthorization ? 'login-password' : 'registration-password'}
                                />
                            </Form.Item>
                            {!isAuthorization &&
                                <Form.Item
                                    name="confirmPassword"
                                    style={{marginTop: '14px'}}
                                    validateStatus={curValidateStatus.isConfirmPasswordValid ? "success" : "error"}
                                    help={!isThisAuthPage
                                            && curValidateStatus.isNeedConfirmText
                                            && !curValidateStatus.isConfirmPasswordValid
                                                ? ( <div className={`class113 red`}>
                                                        {FORM_TEXT.RULE_CONFIRM}
                                                    </div>)
                                                : ''}
                                >
                                    <Input.Password
                                        className='class110'
                                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                        placeholder={FORM_TEXT.PLACE_PASS}
                                        value={confirmPassword}
                                        onChange={handleConfirmPassword}
                                        data-test-id='registration-confirm-password'
                                    />
                                </Form.Item>
                            }
                        </div>
                        {isAuthorization &&
                            <div className='class111'>
                                <Form.Item
                                    name="remember"
                                    noStyle
                                >
                                    <Checkbox
                                        checked={rememberMe}
                                        onChange={handleCheckbox}
                                        data-test-id='login-remember'
                                    >
                                        {FORM_TEXT.REMEMBER}
                                    </Checkbox>
                                </Form.Item>
                                <Button
                                    className="login-form-forgot"
                                    type="text"
                                    htmlType="button"
                                    disabled={isDiabledForgotPassBtn}
                                    onClick={handleForgotPass}
                                    data-test-id='login-forgot-button'
                                >
                                    {FORM_TEXT.FORGOT}
                                </Button>
                            </div>
                        }
                        <div className="class112" style={{marginTop: `${isAuthorization ? '' : '38px'}`}}>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                                disabled={!isCanSubmit}
                                data-test-id={isAuthorization ? 'login-submit-button' : 'registration-submit-button'}
                            >
                                {FORM_TEXT.ENTER}
                            </Button>
                            <Button
                                className="login-form-button"
                                icon={<GooglePlusOutlined />}
                                style={{fontSize: '16px'}}
                                onClick={handleGoogleAuth}
                            >
                                {FORM_TEXT.ENTER_GOOGLE}
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};
