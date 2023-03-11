/* eslint-disable react/no-danger */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { FORM, REGEXP } from '../../../constants/constants';

import '../authorization-forms.css';

export const ForgotPass = () => {
    const { register, handleSubmit, formState: {errors}, reset, watch, getValues}
        = useForm({mode: 'onChange', criteriaMode: 'all'});

    const [bottomElBorderStyle, setBottomElBorderStyle] = useState('input__border');
    const [bottomElHint, setBottomElHint] = useState('На это email  будет отправлено письмо с инструкциями по восстановлению пароля');

    const labelStyle = (value) => `label_input ${watch(value) && 'active'}`;

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    const checkEmail = (v) => {
        const isEmailValid = REGEXP.isEmailValid.test(v);

        if (v) {
            if (isEmailValid) {
                setBottomElHint('');
                setBottomElBorderStyle('input__border');
            } else {
                setBottomElHint('<span class="red-hint">Введите корректный E-mail</span>');
                setBottomElBorderStyle('input__border active');
            }
        }

        return isEmailValid;
    }

    const checkValues = () => {
        const forgotEmailValues = getValues('email');

        if (!forgotEmailValues || errors.email) {
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
                            <input className='input__field' id='email'
                                {...register('email', {validate:  v => checkEmail(v)})} />
                            <label htmlFor="email" className={labelStyle('email')}>Email</label>
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
