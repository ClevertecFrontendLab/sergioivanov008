import React, { useState } from 'react';

import './auth-page.css';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, GooglePlusOutlined } from '@ant-design/icons';
import { FORM_TEXT, ROUTE } from '@constants/constants';

type AuthPageProps = {
    isAuth: boolean,
}

export const AuthPage: React.FC<AuthPageProps> = ({ isAuth }) => {
    const navigate = useNavigate();
    const [isAuthorization, setIsAuthorization ] = useState(isAuth);
    const btnAuthClass = `form-nav-btn ${isAuthorization ? 'active' : ''}`;
    const btnRegClass = `form-nav-btn ${isAuthorization ? '' : 'active'}`;

    const btnAuthClick = () => {
        navigate(ROUTE.AUTH);
        setIsAuthorization(true);
    }
    const btnRegClick = () => {
        navigate(ROUTE.REGISTRATION);
        setIsAuthorization(false);
    }

    const onFinish = () => {
        console.log('onFinish()')
    }

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
                                rules={[{ required: true, message: 'Please input your Username!' }]}
                            >
                                <Input
                                    className='class110'
                                    addonBefore="e-mail"
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: FORM_TEXT.RULE_PASS }]}
                            >
                                <Input.Password
                                    className='class110'
                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    placeholder={FORM_TEXT.PLACE_PASS}
                                />
                            </Form.Item>
                            {!isAuthorization &&
                                <Form.Item
                                    name="confirm"
                                    rules={[{ required: true, message: FORM_TEXT.RULE_PASS }]}
                                    style={{marginTop: '14px'}}
                                >
                                    <Input.Password
                                        className='class110'
                                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                        placeholder={FORM_TEXT.PLACE_PASS}
                                    />
                                </Form.Item>
                            }
                        </div>
                        {isAuthorization &&
                            <div className='class111'>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>{FORM_TEXT.REMEMBER}</Checkbox>
                                </Form.Item>
                                <a className="login-form-forgot" href="">
                                    {FORM_TEXT.FORGOT}
                                </a>
                            </div>
                        }
                        <div className="class112" style={{marginTop: `${isAuthorization ? '' : '38px'}`}}>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                            >
                                {FORM_TEXT.ENTER}
                            </Button>
                            <Button
                                className="login-form-button"
                                icon={<GooglePlusOutlined />}
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
