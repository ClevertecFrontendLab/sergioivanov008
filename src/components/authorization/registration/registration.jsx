/* eslint-disable react/no-danger */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import MaskedInput from 'react-text-mask';

import './registration.css';

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

    // console.log('stepNumber: ', stepNumber)
    // console.log('curData: ', getValues())

    const labelLoginStyle = () => `label_input ${watch('login') && 'active'}`;
    const labelPasswordStyle = () => `label_input ${watch('password') && 'active'}`;
    const labelFirstNameStyle = () => `label_input ${watch('firstName') && 'active'}`;
    const labelLastNameStyle = () => `label_input ${watch('lastName') && 'active'}`;
    const labelPhoneStyle = () => `label_input ${watch('phone') && 'active'}`;
    const labelEmailStyle = () => `label_input ${watch('email') && 'active'}`;
    const eyeStyle = () => `password__eye ${isOpenEye && 'open'}`;
    const checkPasswordStyle = () => `check-password ${isCheckPassword && 'ok'}`;
    const passwordType = () => isOpenEye ? 'text' : 'password';
    const openEye = () => setIsOpenEye(!isOpenEye);

    const checkLogin = (v) => {
        const hasLatinLetter = (/[a-zA-Z]+/).test(v);
        const hasCyrLetter = (/[а-яА-Я]+/).test(v);
        const hasOnlyDigit = (/\d+/).test(v);

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
        const hasRightLength = (/[a-zA-Zа-яА-Я0-9]{8,}/).test(v);
        const hasUpperLetter = (/[A-ZА-Я]+/).test(v);
        const hasOnlyDigit = (/\d+/).test(v);

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
        const isEmailValid = (/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i).test(v);

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

    // const handleFinishStep = () => {
    //     if (isValid) {
    //         console.log('valid');
    //         handleSubmit(onSubmit);
    //     } else {
    //         console.log('not valid')
    //     }
    // }

    // const onBlurEmail = () => {
    //     console.log('onBlurEmail')
    // }

    const handlerPhoneChange = (event) => {
        setValue('phone', event.target.value);
        setPhoneInput(event.target.value);
        const isPhone = /(\+375)\s\((29|33|25|44)\)\s[1-9]\d\d-\d\d-\d\d/.test(event.target.value);

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
                <div className='form__logo'>Cleverland</div>
                <div className='form__header'>
                    <div className='form__header_title'>Регистрация</div>
                    <div className='form__header_steps'>{`${stepNumber} шаг из 3`}</div>
                </div>

                {stepNumber === 1 &&
                    <div className='form__data'>
                        <div className='form__data_login'>
                            <div className='login__wrapper'>
                                <input className='input__field' id='login'
                                    {...register('login', {validate:  v => checkLogin(v)})} />
                                <label htmlFor="login" className={labelLoginStyle()}>Придумайте логин для входа</label>
                            </div>
                            <div className={topElBorderStyle} />
                            <div className='input__field_hints'><div dangerouslySetInnerHTML={{ __html: topElHint}} /></div>
                        </div>
                        <div className='form__data_password'>
                            <div className='password__wrapper'>
                                <input className='input__field' id='password' type={passwordType()}
                                    {...register('password', {validate: v => checkPassword(v)})} />
                                <label htmlFor="password" className={labelPasswordStyle()}>Пароль</label>
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
                                <label htmlFor="firstName" className={labelFirstNameStyle()}>Имя</label>
                            </div>
                            <div className={topElBorderStyle} />
                            <div className='input__field_hints'><div dangerouslySetInnerHTML={{ __html: topElHint}} /></div>
                        </div>
                        <div className='form__data_password'>
                            <div className='password__wrapper'>
                                <input className='input__field' id='lastName'
                                    {...register('lastName', {validate: v => checkLastName(v)})} />
                                <label htmlFor="lastName" className={labelLastNameStyle()}>Фамилия</label>
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
                                    mask={['+','3','7','5',' ','(',/\d/,/\d/,')',' ',/\d/,/\d/,/\d/,'-',/\d/,/\d/,'-',/\d/,/\d/,]}
                                    guide={true} keepCharPositions={true} />
                                <label htmlFor="phone" className={labelPhoneStyle()}>Номер телефона</label>
                            </div>
                            <div className={topElBorderStyle} />
                            <div className='input__field_hints'><div dangerouslySetInnerHTML={{ __html: topElHint}} /></div>
                        </div>
                        <div className='form__data_password'>
                            <div className='password__wrapper'>
                                <input className='input__field' id='email'
                                    {...register('email', {validate: v => checkEmail(v)})} />
                                <label htmlFor="email" className={labelEmailStyle()}>E-mail</label>
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
                            <div className='submit__link_enter'>
                                <div className='enter__text'>войти</div>
                                <div className='enter__arrow'/>
                            </div>
                        </div>
                    </div>
                }

                {stepNumber === 3 &&
                    <div className='form__submit'>
                        <button type='submit' className='submit__btn' >зарегистрироваться</button>
                        <div className='submit__link'>
                            <div className='submit__link_invite'>Есть учётная запись?</div>
                            <div className='submit__link_enter'>
                                <div className='enter__text'>войти</div>
                                <div className='enter__arrow'/>
                            </div>
                        </div>
                    </div>
                }

            </form>
        </div>
    );
};
