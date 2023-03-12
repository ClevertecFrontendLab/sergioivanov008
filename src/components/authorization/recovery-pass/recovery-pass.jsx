/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { FORM, REGEXP } from '../../../constants/constants';
import { setRecoveryPassData, startIsLoadingRecoveryPass } from '../../../redux/slices/api-recovery-pass-slice';
import { RecoveryOk } from '../recovery-ok';
import { RecoveryPassError } from '../recovery-pass-error';

import '../authorization-forms.css';

export const RecoveryPass = () => {
    const isFormRecoveryPass = useSelector(state => state.apiRecoveryPass.isFormRecoveryPass);
    const isFormRecoveryPassOk = useSelector(state => state.apiRecoveryPass.isFormRecoveryPassOk);
    const isFormRecoveryPassError = useSelector(state => state.apiRecoveryPass.isFormRecoveryPassError);

    const dispatch = useDispatch();

    const {search} = useLocation();

    const { register, handleSubmit, formState: {errors, isValid, isDirty}, reset, watch, getValues}
        = useForm({mode: 'onChange', criteriaMode: 'all'});

    const [topElBorderStyle, setTopElBorderStyle] =
        useState(`input__border ${!getValues('password') || errors.password && 'active'}`);
    const [topElHint, setTopElHint] = useState('<span data-test-id="hint">Пароль не менее 8 символов, с заглавной буквой и цифрой</span>');
    const [isOpenTopEye, setIsOpenTopEye] = useState(false);
    const [isCheckPassword, setIsCheckPassword] = useState(false);

    const [bottomElBorderStyle, setBottomElBorderStyle] =
        useState(`input__border ${!getValues('password') || errors.password && 'active'}`);
    const [bottomElHint, setBottomElHint] = useState('');
    const [isOpenBottomEye, setIsOpenBottomEye] = useState(false);

    const labelStyle = (value) => `label_input ${watch(value) && 'active'}`;
    const eyeTopStyle = () => `password__eye ${isOpenTopEye && 'open'}`;
    const passwordType = () => isOpenTopEye ? 'text' : 'password';
    const openTopEye = () => setIsOpenTopEye(!isOpenTopEye);

    const eyeBottomStyle = () => `password__eye ${isOpenBottomEye && 'open'}`;
    const passwordConfirmType = () => isOpenBottomEye ? 'text' : 'password';
    const openBottomEye = () => setIsOpenBottomEye(!isOpenBottomEye);

    const submitBtnStyle = () => `submit__btn ${!isValid && 'not-valid'}`;

    const dataIdForTopEye = () => isOpenTopEye ? 'eye-opened' : 'eye-closed';
    const dataIdForBottomEye = () => isOpenBottomEye ? 'eye-opened' : 'eye-closed';

    const checkPassword = () => {
        const v = getValues('password');
        const hasRightLength = REGEXP.hasRightLength.test(v);
        const hasUpperLetter = REGEXP.hasUpperLetter.test(v);
        const hasOnlyDigit = REGEXP.hasOnlyDigit.test(v);

        if (v) {
            setTopElHint(`<span data-test-id="hint">Пароль
            <span class=${!hasRightLength && 'red-hint'} data-test-id="hint">не менее 8 символов</span>,
            <span class=${!hasUpperLetter && 'red-hint'}>с заглавной буквой</span> и
            <span class=${!hasOnlyDigit && 'red-hint'}>цифрой</span></span>`);
        } else {
            setTopElHint('<span data-test-id="hint">Пароль не менее 8 символов, с заглавной буквой и цифрой</span>');
            setTopElBorderStyle('input__border')
        }

        if (hasRightLength && hasUpperLetter && hasOnlyDigit) {
            setTopElHint('<span data-test-id="hint">Пароль не менее 8 символов, с заглавной буквой и цифрой</span>');
            setTopElBorderStyle('input__border');
        }

        setIsCheckPassword(hasRightLength && hasUpperLetter && hasOnlyDigit);

        return hasRightLength && hasUpperLetter && hasOnlyDigit;
    }

    const checkConfirmPassword = () => {
        const v = getValues('passwordConfirmation');

        if (v === getValues('password')) {
            setBottomElHint('');
            setBottomElBorderStyle('input__border');
        } else {
            setBottomElHint('<span class="red-hint" data-test-id="hint">Пароли не совпадают</span>');
            setBottomElBorderStyle('input__border active');
        }
    }

    const onSubmit = (data) => {
        const code = search.slice(6);
        const newData = {...data, code}

        dispatch(setRecoveryPassData(newData));
        dispatch(startIsLoadingRecoveryPass(newData));
        reset();
        setIsOpenTopEye(false);
        setIsOpenBottomEye(false);
    }

    const onBlurPassword = () => {
        if (!getValues('password')) {
            setTopElHint('<span class="red-hint" data-test-id="hint">Поле не может быть пустым</span>');
            setTopElBorderStyle('input__border active');
        }
    }

    const onBlurConfirmPassword = () => {
        if (!getValues('passwordConfirmation')) {
            setBottomElHint('<span class="red-hint" data-test-id="hint">Поле не может быть пустым</span>');
            setBottomElBorderStyle('input__border active');
        }
    }

    const checkTwoPasswords = (v) => v === getValues('password');

    return (
        <React.Fragment>
            {isFormRecoveryPass &&
                <form className='form__authorization' onSubmit={handleSubmit(onSubmit)} data-test-id='reset-password-form'>
                    <div className='form__logo'>{FORM.textLogo}</div>
                    <div className='form__header'>
                        <div className='form__header_title'>{FORM.titleRecoveryPass}</div>
                    </div>

                    <div className='form__data'>

                        <div className='form__data_login'>
                            <div className='password__wrapper'>
                                <input className='input__field' id='password' type={passwordType()}
                                    {...register('password', {
                                        onChange: () => checkPassword(),
                                        onBlur: () => onBlurPassword()})} />
                                <label htmlFor="password" className={labelStyle('password')}>
                                    {FORM.textNewPass}
                                </label>
                                {isCheckPassword && <div className='check-password ok' data-test-id='checkmark'/>}
                                {getValues('password') &&
                                    <div className={eyeTopStyle()} onClick={openTopEye} role='presentation'
                                        data-test-id={dataIdForTopEye()} />}
                            </div>
                            <div className={topElBorderStyle} />
                            <div className='input__field_hints'><div dangerouslySetInnerHTML={{ __html: topElHint}} /></div>
                        </div>

                        <div className='form__data_login'>
                            <div className='password__wrapper'>
                                <input className='input__field' id='passwordConfirmation' type={passwordConfirmType()}
                                    {...register('passwordConfirmation', {
                                        validate: v => checkTwoPasswords(v),
                                        onChange: () => checkConfirmPassword(),
                                        onBlur: () => onBlurConfirmPassword()})} />
                                <label htmlFor="passwordConfirmation" className={labelStyle('passwordConfirmation')}>
                                    {FORM.textConfirmPass}
                                </label>
                                {getValues('passwordConfirmation') &&
                                    <div className={eyeBottomStyle()} onClick={openBottomEye} role='presentation'
                                        data-test-id={dataIdForBottomEye()} />}
                            </div>
                            <div className={bottomElBorderStyle} />
                            <div className='input__field_hints'><div dangerouslySetInnerHTML={{ __html: bottomElHint}} /></div>
                        </div>

                    </div>

                    <div className='form__submit recovery-pass'>
                        <button type='submit' className={submitBtnStyle()} disabled={!isDirty || !isValid}>
                            {FORM.textBtnRecoveryPass}
                        </button>
                        <div className='submit__link'>
                            <div className='submit__link_invite recovery-pass'>{FORM.textHintRecoveryPass}</div>
                        </div>
                    </div>
                </form>
            }
            {isFormRecoveryPassOk && <RecoveryOk />}
            {isFormRecoveryPassError && <RecoveryPassError />}
        </React.Fragment>
    );
};
