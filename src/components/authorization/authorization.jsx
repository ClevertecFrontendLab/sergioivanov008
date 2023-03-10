/* eslint-disable react/no-danger */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { FORM } from '../../constants/constants';
import { setAuthData, startIsLoadingAuth } from '../../redux/slices/api-auth-slice';

import './authorization-forms.css';

export const Authorization = () => {
    const { register, handleSubmit, formState: {errors}, reset, watch, getValues}
        = useForm({mode: 'onChange', criteriaMode: 'all'});

    const dispatch = useDispatch();

    const [topElBorderStyle, setTopElBorderStyle] = useState('input__border');
    const [bottomElBorderStyle, setBottomElBorderStyle] = useState('input__border');
    const [topElHint, setTopElHint] = useState('');
    const [bottomElHint, setBottomElHint] = useState('');
    const [isOpenEye, setIsOpenEye] = useState(false);

    const labelStyle = (value) => `label_input ${watch(value) && 'active'}`;
    const eyeStyle = () => `password__eye ${isOpenEye && 'open'}`;
    const passwordType = () => isOpenEye ? 'text' : 'password';
    const openEye = () => setIsOpenEye(!isOpenEye);

    const onSubmit = (data) => {
        dispatch(setAuthData(data));
        dispatch(startIsLoadingAuth(data));
        reset();
    }

    const checkIdentifier = (v) => {
        if (v) {
            setTopElBorderStyle('input__border');
            setTopElHint('');

            return true;
        }
        setTopElHint('<span class="red-hint">Поле не может быть пустым</span>');
        setTopElBorderStyle('input__border active');

        return false;
    }

    const checkPassword = (v) => {
        if (v) {
            setBottomElBorderStyle('input__border');
            setBottomElHint('');

            return true;
        }
        setBottomElHint('<span class="red-hint">Поле не может быть пустым</span>');
        setBottomElBorderStyle('input__border active');

        return false;
    }

    const checkValues = () => {
        const authIdentifierValues = getValues('identifier');
        const authPasswordValues = getValues('password');

        if (!authIdentifierValues || errors.identifier) {
            setTopElHint('<span class="red-hint">Поле не может быть пустым</span>');
            setTopElBorderStyle('input__border active');
        }
        if (!authPasswordValues || errors.password) {
            setBottomElHint('<span class="red-hint">Поле не может быть пустым</span>');
            setBottomElBorderStyle('input__border active');
        }
    }

    return (
        <div className='form__wrapper'>
            <form className='form__authorization' onSubmit={handleSubmit(onSubmit)} >
                <div className='form__logo'>{FORM.textLogo}</div>
                <div className='form__header'>
                    <div className='form__header_title'>{FORM.titleAuth}</div>
                </div>

                <div className='form__data'>
                    <div className='form__data_login'>
                        <div className='login__wrapper'>
                            <input className='input__field' id='identifier'
                                {...register('identifier', {validate:  v => checkIdentifier(v)})} />
                            <label htmlFor="identifier" className={labelStyle('identifier')}>{FORM.textLogin}</label>
                        </div>
                        <div className={topElBorderStyle} />
                        <div className='input__field_hints'><div dangerouslySetInnerHTML={{ __html: topElHint}} /></div>
                    </div>
                    <div className='form__data_password'>
                        <div className='password__wrapper'>
                            <input className='input__field' id='password' type={passwordType()}
                                {...register('password', {validate:  v => checkPassword(v)})} />
                            <label htmlFor="password" className={labelStyle('password')}>{FORM.textPassword}</label>
                            <div className={eyeStyle()} onClick={openEye} role='presentation' />
                        </div>
                        <div className={bottomElBorderStyle} />
                        <div className='input__field_hints'><div dangerouslySetInnerHTML={{ __html: bottomElHint}} /></div>
                        <Link to='/forgot-pass' className='forgot__link'>Забыли логин или пароль?</Link>
                    </div>
                </div>

                <div className='form__submit'>
                    <button type='submit' className='submit__btn' onClick={checkValues} >{FORM.textEnter}</button>
                    <div className='submit__link'>
                        <div className='submit__link_invite'>Нет учётной записи?</div>
                        <Link to='/registration' className='submit__link_enter'>
                            <div className='enter__text'>{FORM.titleRegistration}</div>
                            <div className='enter__arrow'/>
                        </Link>
                    </div>
                </div>

            </form>
        </div>
    );
};
