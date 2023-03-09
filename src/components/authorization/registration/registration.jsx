/* eslint-disable react/no-danger */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import MaskedInput from 'react-text-mask';

import { FORM, REGEXP } from '../../../constants/constants';

import '../authorization-forms.css';

export const Registration = () => {
    const { register, handleSubmit, formState: {errors, isValid}, reset, watch, getValues, setValue}
        = useForm({mode: 'onChange', criteriaMode: 'all'});

    const [stepNumber, setStepNumber] = useState(1);
    const [topElBorderStyle, setTopElBorderStyle] =
        useState(`input__border ${!getValues('login') || errors.login && 'active'}`);
    const [bottomElBorderStyle, setBottomElBorderStyle] =
        useState(`input__border ${!getValues('password') || errors.password && 'active'}`);
    const [topElHint, setTopElHint] = useState('Используйте для логина латинский алфавит и цифры');
    const [bottomElHint, setBottomElHint] = useState('Пароль не менее 8 символов, с заглавной буквой и цифрой');
    const [isOpenEye, setIsOpenEye] = useState(false);
    const [isCheckPassword, setIsCheckPassword] = useState(false);
    const [phoneInput, setPhoneInput] = useState('');

    const labelStyle = (value) => `label_input ${watch(value) && 'active'}`;
    const eyeStyle = () => `password__eye ${isOpenEye && 'open'}`;
    const checkPasswordStyle = () => `check-password ${isCheckPassword && 'ok'}`;
    const passwordType = () => isOpenEye ? 'text' : 'password';
    const openEye = () => setIsOpenEye(!isOpenEye);

    const checkLogin = (v) => {
        const hasLatinLetter = REGEXP.hasLatinLetter.test(v);
        const hasCyrLetter = REGEXP.hasCyrLetter.test(v);
        const hasOnlyDigit = REGEXP.hasOnlyDigit.test(v);

        if (v) {
            if (hasCyrLetter) {
                setTopElHint('Используйте для логина <span class="red-hint">латинский алфавит и цифры</span>');
            } else if (hasLatinLetter && !hasCyrLetter && !hasOnlyDigit) {
                setTopElHint('Используйте для логина латинский алфавит и <span class="red-hint">цифры</span>');
            } else if (!hasLatinLetter && !hasCyrLetter && hasOnlyDigit) {
                setTopElHint('Используйте для логина <span class="red-hint">латинский алфавит</span> и цифры');
            } else if (hasLatinLetter && !hasCyrLetter && hasOnlyDigit) {
                setTopElBorderStyle('input__border');
                setTopElHint('Используйте для логина латинский алфавит и цифры');
            }
        }

        return hasLatinLetter && !hasCyrLetter && hasOnlyDigit;
    }

    const checkPassword = (v) => {
        const hasRightLength = REGEXP.hasRightLength.test(v);
        const hasUpperLetter = REGEXP.hasUpperLetter.test(v);
        const hasOnlyDigit = REGEXP.hasOnlyDigit.test(v);

        if (v) {
            setBottomElHint(`Пароль
            <span class=${!hasRightLength && 'red-hint'}>не менее 8 символов</span>,
            <span class=${!hasUpperLetter && 'red-hint'}>с заглавной буквой</span> и
            <span class=${!hasOnlyDigit && 'red-hint'}>цифрой</span>`);
        }

        if (hasRightLength && hasUpperLetter && hasOnlyDigit) {
            setBottomElBorderStyle('input__border');
        }

        setIsCheckPassword(hasRightLength && hasUpperLetter && hasOnlyDigit);

        return hasRightLength && hasUpperLetter && hasOnlyDigit;
    }

    const checkFirstName = (v) => {
        if (v) {
            setTopElBorderStyle('input__border');
            setTopElHint('');

            return true;
        }

        return false;
    }

    const checkLastName = (v) => {
        if (v) {
            setBottomElBorderStyle('input__border');
            setBottomElHint('');

            return true;
        }

        return false;
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

    const handlerToStepTwo = () => {
        if (isValid) {
            setStepNumber(stepNumber +1);
            setTopElHint('');
            setBottomElHint('');
        } else {
            const loginValues = getValues('login');
            const passwordValues = getValues('password');

            if (!loginValues || errors.login) {
                setTopElHint('<span class="red-hint">Используйте для логина латинский алфавит и цифры</span>');
                setTopElBorderStyle('input__border active');
            }
            if (!passwordValues || errors.password) {
                setBottomElHint('<span class="red-hint">Пароль не менее 8 символов, с заглавной буквой и цифрой</span>');
                setBottomElBorderStyle('input__border active');
            }
        }
    }

    const handlerToStepThree = () => {
        if (isValid) {
            setStepNumber(stepNumber +1);
            setTopElHint('В формате +375 (xx) xxx-xx-xx');
            setBottomElHint('');
        } else {
            const firstNameValues = getValues('firstName');
            const lastNameValues = getValues('lastName');

            if (!firstNameValues || errors.firstName) {
                setTopElHint('<span class="red-hint">Поле не может быть пустым</span>');
                setTopElBorderStyle('input__border active');
            }
            if (!lastNameValues || errors.lastName) {
                setBottomElHint('<span class="red-hint">Поле не может быть пустым</span>');
                setBottomElBorderStyle('input__border active');
            }
        }
    }

    const onSubmit = (data) => {
        console.log(data);
        reset();
        setPhoneInput('');
    }

    const handlerPhoneChange = (event) => {
        setValue('phone', event.target.value);
        setPhoneInput(event.target.value);
        const isPhone = REGEXP.isPhone.test(event.target.value);

        if (isPhone) {
            setTopElHint('В формате +375 (xx) xxx-xx-xx');
            setTopElBorderStyle('input__border');
        } else {
            setTopElHint('<span class="red-hint">В формате +375 (xx) xxx-xx-xx</span>');
            setTopElBorderStyle('input__border active');
        }
    }

    return (
        <div className='form__wrapper'>
            <form className='form__authorization' onSubmit={handleSubmit(onSubmit)} >
                <div className='form__logo'>{FORM.textLogo}</div>
                <div className='form__header'>
                    <div className='form__header_title'>{FORM.titleRegistration}</div>
                    <div className='form__header_steps'>{`${stepNumber} шаг из 3`}</div>
                </div>

                {stepNumber === 1 &&
                    <div className='form__data'>
                        <div className='form__data_login'>
                            <div className='login__wrapper'>
                                <input className='input__field' id='login'
                                    {...register('login', {validate:  v => checkLogin(v)})} />
                                <label htmlFor="login" className={labelStyle('login')}>Придумайте логин для входа</label>
                            </div>
                            <div className={topElBorderStyle} />
                            <div className='input__field_hints'><div dangerouslySetInnerHTML={{ __html: topElHint}} /></div>
                        </div>
                        <div className='form__data_password'>
                            <div className='password__wrapper'>
                                <input className='input__field' id='password' type={passwordType()}
                                    {...register('password', {validate: v => checkPassword(v)})} />
                                <label htmlFor="password" className={labelStyle('password')}>Пароль</label>
                                <div className={checkPasswordStyle()} />
                                <div className={eyeStyle()} onClick={openEye} role='presentation' />
                            </div>
                            <div className={bottomElBorderStyle} />
                            <div className='input__field_hints'><div dangerouslySetInnerHTML={{ __html: bottomElHint}} /></div>
                        </div>
                    </div>
                }

                {stepNumber === 2 &&
                    <div className='form__data'>
                        <div className='form__data_login'>
                            <div className='login__wrapper'>
                                <input className='input__field' id='firstName'
                                    {...register('firstName', {validate: v => checkFirstName(v)})} />
                                <label htmlFor="firstName" className={labelStyle('firstName')}>Имя</label>
                            </div>
                            <div className={topElBorderStyle} />
                            <div className='input__field_hints'><div dangerouslySetInnerHTML={{ __html: topElHint}} /></div>
                        </div>
                        <div className='form__data_password'>
                            <div className='password__wrapper'>
                                <input className='input__field' id='lastName'
                                    {...register('lastName', {validate: v => checkLastName(v)})} />
                                <label htmlFor="lastName" className={labelStyle('lastName')}>Фамилия</label>
                            </div>
                            <div className={bottomElBorderStyle} />
                            <div className='input__field_hints'><div dangerouslySetInnerHTML={{ __html: bottomElHint}} /></div>
                        </div>
                    </div>
                }

                {stepNumber === 3 &&
                    <div className='form__data'>
                        <div className='form__data_login'>
                            <div className='login__wrapper'>
                                <MaskedInput className='input__field' id='phone' onChange={handlerPhoneChange}
                                    value={phoneInput}
                                    mask={REGEXP.mask}
                                    guide={true} keepCharPositions={true} />
                                <label htmlFor="phone" className={labelStyle('phone')}>Номер телефона</label>
                            </div>
                            <div className={topElBorderStyle} />
                            <div className='input__field_hints'><div dangerouslySetInnerHTML={{ __html: topElHint}} /></div>
                        </div>
                        <div className='form__data_password'>
                            <div className='password__wrapper'>
                                <input className='input__field' id='email'
                                    {...register('email', {validate: v => checkEmail(v)})} />
                                <label htmlFor="email" className={labelStyle('email')}>E-mail</label>
                            </div>
                            <div className={bottomElBorderStyle} />
                            <div className='input__field_hints'><div dangerouslySetInnerHTML={{ __html: bottomElHint}} /></div>
                        </div>
                    </div>
                }

                {(stepNumber === 1 || stepNumber === 2) &&
                    <div className='form__submit'>
                        <div className='submit__btn' role='presentation'
                            onClick={stepNumber === 1 ? handlerToStepTwo: handlerToStepThree}>
                                {stepNumber === 1 ? 'следующий шаг' : 'последний шаг'}</div>
                        <div className='submit__link'>
                            <div className='submit__link_invite'>Есть учётная запись?</div>
                            <Link to='/auth' className='submit__link_enter'>
                                <div className='enter__text'>войти</div>
                                <div className='enter__arrow'/>
                            </Link>
                        </div>
                    </div>
                }

                {stepNumber === 3 &&
                    <div className='form__submit'>
                        <button type='submit' className='submit__btn' >зарегистрироваться</button>
                        <div className='submit__link'>
                            <div className='submit__link_invite'>Есть учётная запись?</div>
                            <Link to='/auth' className='submit__link_enter'>
                                <div className='enter__text'>войти</div>
                                <div className='enter__arrow'/>
                            </Link>
                        </div>
                    </div>
                }

            </form>
        </div>
    );
};
