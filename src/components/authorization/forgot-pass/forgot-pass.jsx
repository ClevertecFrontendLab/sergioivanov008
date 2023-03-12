/* eslint-disable react/no-danger */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { FORM, REGEXP } from '../../../constants/constants';
import { setIsForgotPassError, setIsFormRecoveryPass, startIsLoadingForgotPass } from '../../../redux/slices/api-forgot-path-slice';
import { ForgotPassOk } from '../forgot-pass-ok';
import { RecoveryPass } from '../recovery-pass';

import '../authorization-forms.css';

export const ForgotPass = () => {
    const isFormForgotPass = useSelector(state => state.apiForgotPass.isFormForgotPass);
    const isFormForgotOk = useSelector(state => state.apiForgotPass.isFormForgotOk);
    const isFormRecoveryPass = useSelector(state => state.apiForgotPass.isFormRecoveryPass);
    const isForgotPassError = useSelector(state => state.apiForgotPass.isForgotPassError);

    const { register, handleSubmit, formState: {errors}, watch, getValues}
        = useForm({mode: 'onChange', criteriaMode: 'all'});

    const dispatch = useDispatch();

    const location = useLocation();

    if (location.search) {
        dispatch(setIsFormRecoveryPass());
    }

    const [bottomElBorderStyle, setBottomElBorderStyle] = useState('input__border');
    const [bottomElHint, setBottomElHint] = useState('');

    const labelStyle = (value) => `label_input ${watch(value) && 'active'}`;

    useEffect(() => {
        if (isForgotPassError) {
            setBottomElBorderStyle('input__border active');
            setBottomElHint('<span class="red-hint" data-test-id="hint">error</span>');
        }
    }, [isForgotPassError]);

    const onSubmit = (data) => {
        dispatch(startIsLoadingForgotPass(data));
    }

    const checkEmail = (v) => {
        const isEmailValid = REGEXP.isEmailValid.test(v);

        dispatch(setIsForgotPassError(false));

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
        <div className='form__wrapper' data-test-id='auth'>
            {isFormForgotPass &&
                <form className='form__authorization form-forgot' onSubmit={handleSubmit(onSubmit)} data-test-id='send-email-form'>
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
                            <div className='input__field_hints' data-test-id={isForgotPassError ? '' : 'hint'}><div dangerouslySetInnerHTML={{ __html: bottomElHint}} /></div>
                            <div className='input__field_hints static-hint'>{FORM.textStaticHint}</div>
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
            }
            {isFormRecoveryPass && <RecoveryPass />}
            {isFormForgotOk && <ForgotPassOk />}
        </div>
    );
};
