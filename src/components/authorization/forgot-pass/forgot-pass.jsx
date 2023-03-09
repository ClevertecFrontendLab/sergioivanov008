/* eslint-disable react/no-danger */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FORM } from '../../../constants/constants';

import '../authorization-forms.css';

export const ForgotPass = () => {
    const { register, handleSubmit, formState: {errors}, reset, watch, getValues}
        = useForm({mode: 'onChange', criteriaMode: 'all'});

    const [topElBorderStyle, setTopElBorderStyle] = useState('input__border');
    const [bottomElBorderStyle, setBottomElBorderStyle] = useState('input__border');
    const [topElHint, setTopElHint] = useState('');
    const [bottomElHint, setBottomElHint] = useState('На это email  будет отправлено письмо с инструкциями по восстановлению пароля');

    const labelStyle = (value) => `label_input ${watch(value) && 'active'}`;

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    const checkForgotEmail = (v) => {
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
        const authLoginValues = getValues('authLogin');
        const authPasswordValues = getValues('authPassword');

        if (!authLoginValues || errors.authLogin) {
            setTopElHint('<span class="red-hint">Поле не может быть пустым</span>');
            setTopElBorderStyle('input__border active');
        }
        if (!authPasswordValues || errors.authPassword) {
            setBottomElHint('<span class="red-hint">Поле не может быть пустым</span>');
            setBottomElBorderStyle('input__border active');
        }
    }

    return (
        <div className='form__wrapper'>
            <form className='form__authorization form-forgot' onSubmit={handleSubmit(onSubmit)} >
                <div className='form__logo'>{FORM.textLogo}</div>
                <Link to='/auth' className='link__auth'>
                    <div className='enter__arrow back'/>
                    <div className='link__auth_title'>{FORM.titleAuth}</div>
                </Link>
                <div className='form__header'>
                    <div className='form__header_title'>{FORM.titleForgotPass}</div>
                </div>

                <div className='form__data'>
                    <div className='form__data_password'>
                        <div className='password__wrapper'>
                            <input className='input__field' id='forgotEmail'
                                {...register('forgotEmail', {validate:  v => checkForgotEmail(v)})} />
                            <label htmlFor="forgotEmail" className={labelStyle('forgotEmail')}>Email</label>
                        </div>
                        <div className={bottomElBorderStyle} />
                        <div className='input__field_hints'><div dangerouslySetInnerHTML={{ __html: bottomElHint}} /></div>
                    </div>
                </div>

                <div className='form__submit'>
                    <button type='submit' className='submit__btn' onClick={checkValues} >восстановить</button>
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
