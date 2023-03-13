/* eslint-disable react/no-danger */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MaskedInput from 'react-text-mask';

import { FORM, REGEXP } from '../../../constants/constants';
import { setRegistrationData, startIsLoadingRegistration } from '../../../redux/slices/api-registration-slice';
import { RegistrationError } from '../registration-error';
import { RegistrationError400 } from '../registration-error-400';
import { RegistrationOk } from '../registration-ok';

import '../authorization-forms.css';

export const Registration = () => {
    const isFormRegistration = useSelector(state => state.apiRegistration.isFormRegistration);
    const isRegistrationOk = useSelector(state => state.apiRegistration.isRegistrationOk);
    const isRegistrationError400 = useSelector(state => state.apiRegistration.isRegistrationError400);
    const isRegistrationError = useSelector(state => state.apiRegistration.isRegistrationError);

    const dispatch = useDispatch();

    const { register, handleSubmit, formState: {errors, isValid}, reset, watch, getValues, setValue}
        = useForm({mode: 'onChange', criteriaMode: 'all'});

    const [stepNumber, setStepNumber] = useState(1);
    const [topElBorderStyle, setTopElBorderStyle] =
        useState(`input__border ${!getValues('username') || errors.username && 'active'}`);
    const [bottomElBorderStyle, setBottomElBorderStyle] =
        useState(`input__border ${!getValues('password') || errors.password && 'active'}`);
    const [topElHint, setTopElHint] =
        useState('<span data-test-id="hint">Используйте для логина латинский алфавит и цифры</span>');
    const [bottomElHint, setBottomElHint] =
        useState('<span data-test-id="hint">Пароль не менее 8 символов, с заглавной буквой и цифрой</span>');
    const [isOpenEye, setIsOpenEye] = useState(false);
    const [isCheckPassword, setIsCheckPassword] = useState(false);
    const [phoneInput, setPhoneInput] = useState('');

    const labelStyle = (value) => `label_input ${watch(value) && 'active'}`;
    const eyeStyle = () => `password__eye ${isOpenEye && 'open'}`;
    const passwordType = () => isOpenEye ? 'text' : 'password';
    const openEye = () => setIsOpenEye(!isOpenEye);

    const dataIdForEye = () => isOpenEye ? 'eye-opened' : 'eye-closed';

    const onChangeUsername = () => {
        const v = getValues('username');
        const hasLatinLetter = REGEXP.hasLatinLetter.test(v);
        const hasCyrLetter = REGEXP.hasCyrLetter.test(v);
        const hasOnlyDigit = REGEXP.hasOnlyDigit.test(v);

        if (v) {
            setTopElHint(`<span data-test-id="hint">Используйте для логина
            <span class=${!hasLatinLetter && 'red-hint'}> латинский алфавит</span> и
            <span class=${!hasOnlyDigit && 'red-hint'}> цифры</span></span>`);
        } else {
            setTopElHint('<span data-test-id="hint">Используйте для логина латинский алфавит и цифры</span>');
            setTopElBorderStyle('input__border')
        }

        if (hasLatinLetter && !hasCyrLetter && hasOnlyDigit) {
            setTopElHint('<span data-test-id="hint">Используйте для логина латинский алфавит и цифры</span>');
            setTopElBorderStyle('input__border');
        }
    }

    const validateUsername = (v) => {
        const hasLatinLetter = REGEXP.hasLatinLetter.test(v);
        const hasCyrLetter = REGEXP.hasCyrLetter.test(v);
        const hasOnlyDigit = REGEXP.hasOnlyDigit.test(v);

        return hasLatinLetter && !hasCyrLetter && hasOnlyDigit;
    }

    const onBlurUsername = () => {
        if (!getValues('username')) {
            setTopElHint('<span class="red-hint" data-test-id="hint">Поле не может быть пустым</span>');
            setTopElBorderStyle('input__border active');
        } else if (errors.username) {
            setTopElHint('<span class="red-hint" data-test-id="hint">Используйте для логина латинский алфавит и цифры</span>');
            setTopElBorderStyle('input__border active');
        } else {
            setTopElHint('<span data-test-id="hint">Используйте для логина латинский алфавит и цифры</span>');
            setTopElBorderStyle('input__border');
        }
    }

    const onChangePassword = () => {
        const v = getValues('password');
        const hasRightLength = REGEXP.hasRightLength.test(v);
        const hasUpperLetter = REGEXP.hasUpperLetter.test(v);
        const hasOnlyDigit = REGEXP.hasOnlyDigit.test(v);

        if (v) {
            setBottomElHint(`<span data-test-id="hint">Пароль
            <span class=${!hasRightLength && 'red-hint'} data-test-id="hint">не менее 8 символов</span>,
            <span class=${!hasUpperLetter && 'red-hint'}>с заглавной буквой</span> и
            <span class=${!hasOnlyDigit && 'red-hint'}>цифрой</span></span>`);
        } else {
            setBottomElHint('<span data-test-id="hint">Пароль не менее 8 символов, с заглавной буквой и цифрой</span>');
            setBottomElBorderStyle('input__border')
        }

        if (hasRightLength && hasUpperLetter && hasOnlyDigit) {
            setBottomElHint('<span data-test-id="hint">Пароль не менее 8 символов, с заглавной буквой и цифрой</span>');
            setBottomElBorderStyle('input__border');
        }

        setIsCheckPassword(hasRightLength && hasUpperLetter && hasOnlyDigit);
    }

    const validatePassword = (v) => {
        const hasRightLength = REGEXP.hasRightLength.test(v);
        const hasUpperLetter = REGEXP.hasUpperLetter.test(v);
        const hasOnlyDigit = REGEXP.hasOnlyDigit.test(v);

        return hasRightLength && hasUpperLetter && hasOnlyDigit;
    }

    const onBlurPassword = () => {
        if (!getValues('password')) {
            setBottomElHint('<span class="red-hint" data-test-id="hint">Поле не может быть пустым</span>');
            setBottomElBorderStyle('input__border active');
        } else if (errors.password) {
            setBottomElHint('<span class="red-hint" data-test-id="hint">Пароль не менее 8 символов, с заглавной буквой и цифрой</span>');
            setBottomElBorderStyle('input__border active');
        } else {
            setBottomElHint('<span data-test-id="hint">Пароль не менее 8 символов, с заглавной буквой и цифрой</span>');
            setBottomElBorderStyle('input__border');
        }
    }

    const onChangeFirstName = () => {
        const v = getValues('firstName');

        if (v) {
            setTopElBorderStyle('input__border');
            setTopElHint('<span data-test-id="hint"></span>');
        }
    }

    const validateFirstName = (v) => {
        if (v) {
            return true;
        }

        return false;
    };

    const onBlurFirstName = () => {
        if (!getValues('firstName')) {
            setTopElHint('<span class="red-hint" data-test-id="hint">Поле не может быть пустым</span>');
            setTopElBorderStyle('input__border active');
        } else if (errors.firstName) {
            setTopElHint('<span class="red-hint" data-test-id="hint"></span>');
            setTopElBorderStyle('input__border active');
        } else {
            setTopElHint('<span data-test-id="hint"></span>');
            setTopElBorderStyle('input__border');
        }
    }

    const onChangeLastName = () => {
        const v = getValues('lastName');

        if (v) {
            setBottomElBorderStyle('input__border');
            setBottomElHint('');
        }
    }

    const validateLastName = (v) => {
        if (v) {
            return true;
        }

        return false;
    }

    const onBlurLastName = () => {
        if (!getValues('lastName')) {
            setBottomElHint('<span class="red-hint" data-test-id="hint">Поле не может быть пустым</span>');
            setBottomElBorderStyle('input__border active');
        } else if (errors.lastName) {
            setBottomElHint('<span class="red-hint" data-test-id="hint"></span>');
            setBottomElBorderStyle('input__border active');
        } else {
            setBottomElHint('<span data-test-id="hint"></span>');
            setBottomElBorderStyle('input__border');
        }
    }

    const onChangeEmail = () => {
        const v = getValues('email');
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
    }

    const validateEmail = (v) => {
        const isEmailValid = REGEXP.isEmailValid.test(v);

        return isEmailValid;
    }

    const onBlurEmail = () => {
        if (!getValues('email')) {
            setBottomElHint('<span class="red-hint" data-test-id="hint">Поле не может быть пустым</span>');
            setBottomElBorderStyle('input__border active');
        } else if (errors.email) {
            setBottomElHint('<span class="red-hint" data-test-id="hint">Введите корректный E-mail</span>');
            setBottomElBorderStyle('input__border active');
        } else {
            setBottomElHint('<span data-test-id="hint">Введите корректный E-mail</span>');
            setBottomElBorderStyle('input__border');
        }
    }

    const handlerToStepTwo = () => {
        if (isValid) {
            setStepNumber(stepNumber +1);
            setTopElHint('');
            setBottomElHint('');
        } else {
            const usernameValues = getValues('username');
            const passwordValues = getValues('password');

            if (!usernameValues || errors.username) {
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

    const onChangePhone = (event) => {
        const {value} = event.target;

        setValue('phone', value);
        setPhoneInput(value);
        const isPhone = REGEXP.isPhone.test(value);

        if (isPhone) {
            setTopElHint('<span data-test-id="hint">В формате +375 (xx) xxx-xx-xx</span>');
            setTopElBorderStyle('input__border');
        } else {
            setTopElHint('<span class="red-hint" data-test-id="hint">В формате +375 (xx) xxx-xx-xx</span>');
            setTopElBorderStyle('input__border active');
        }
    }

    const validatePhone = () => {
        const isPhone = REGEXP.isPhone.test(phoneInput);

        return isPhone;
    }

    const onBlurPhone = () => {
        if (!getValues('phone')) {
            setTopElHint('<span class="red-hint" data-test-id="hint">Поле не может быть пустым</span>');
            setTopElBorderStyle('input__border active');
        } else if (validatePhone()) {
            setTopElHint('<span data-test-id="hint">В формате +375 (xx) xxx-xx-xx</span>');
            setTopElBorderStyle('input__border');
        } else {
            setTopElHint('<span class="red-hint" data-test-id="hint">В формате +375 (xx) xxx-xx-xx</span>');
            setTopElBorderStyle('input__border active');
        }
    }

    const onSubmit = (data) => {
        dispatch(setRegistrationData(data));
        dispatch(startIsLoadingRegistration(data));
        reset();
        setPhoneInput('');
        setStepNumber(1);
        setTopElHint('<span data-test-id="hint">Используйте для логина латинский алфавит и цифры</span>');
        setTopElBorderStyle('input__border');
        setBottomElHint('<span data-test-id="hint">Пароль не менее 8 символов, с заглавной буквой и цифрой</span>');
        setBottomElBorderStyle('input__border');
    }

    const btnIsDisabledStepOne = () => !getValues('username') || errors.username || !getValues('password') || errors.password;
    const btnIsDisabledStepTwo = () => !getValues('firstName') || errors.firstName || !getValues('lastName') || errors.lastName;
    const btnIsDisabledStepThree = () => !getValues('phone') || !validatePhone() || !getValues('email') || errors.email;

    const submitBtnStepOneStyle = () => `submit__btn ${btnIsDisabledStepOne() && 'not-valid'}`;
    const submitBtnStepTwoStyle = () => `submit__btn ${btnIsDisabledStepTwo() && 'not-valid'}`;
    const submitBtnStepThreeStyle = () => `submit__btn ${btnIsDisabledStepThree() && 'not-valid'}`;

    return (

        <div className='form__wrapper' data-test-id='auth'>
            {isFormRegistration &&
                <form className='form__authorization' onSubmit={handleSubmit(onSubmit)} data-test-id='register-form'>
                    <div className='form__logo'>{FORM.textLogo}</div>
                    <div className='form__header'>
                        <div className='form__header_title'>{FORM.titleRegistration}</div>
                        <div className='form__header_steps'>{`${stepNumber} шаг из 3`}</div>
                    </div>

                    {stepNumber === 1 &&
                        <div className='form__data'>
                            <div className='form__data_login'>
                                <div className='login__wrapper'>
                                    <input className='input__field' id='username'
                                        {...register('username', {
                                            validate: (v) => validateUsername(v),
                                            onChange: () => onChangeUsername(),
                                            onBlur: () => onBlurUsername()})} />
                                    <label htmlFor="username" className={labelStyle('username')}>Придумайте логин для входа</label>
                                </div>
                                <div className={topElBorderStyle} />
                                <div className='input__field_hints'><div dangerouslySetInnerHTML={{ __html: topElHint}} /></div>
                            </div>
                            <div className='form__data_password'>
                                <div className='password__wrapper'>
                                    <input className='input__field' id='password' type={passwordType()}
                                        {...register('password', {
                                            validate: (v) => validatePassword(v),
                                            onChange: () => onChangePassword(),
                                            onBlur: () => onBlurPassword()})} />
                                    <label htmlFor="password" className={labelStyle('password')}>Пароль</label>
                                    {isCheckPassword && <div className='check-password ok' data-test-id='checkmark'/>}
                                    <div className={eyeStyle()} onClick={openEye} role='presentation'
                                        data-test-id={dataIdForEye()} />
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
                                        {...register('firstName', {
                                            validate: v => validateFirstName(v),
                                            onChange: () => onChangeFirstName(),
                                            onBlur: () => onBlurFirstName()})} />
                                    <label htmlFor="firstName" className={labelStyle('firstName')}>Имя</label>
                                </div>
                                <div className={topElBorderStyle} />
                                <div className='input__field_hints'><div dangerouslySetInnerHTML={{ __html: topElHint}} /></div>
                            </div>
                            <div className='form__data_password'>
                                <div className='password__wrapper'>
                                    <input className='input__field' id='lastName'
                                        {...register('lastName', {
                                            validate: v => validateLastName(v),
                                            onChange: () => onChangeLastName(),
                                            onBlur: () => onBlurLastName()})} />
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
                                    <MaskedInput className='input__field' id='phone' name='phone'
                                        onChange={onChangePhone}
                                        onBlur={onBlurPhone}
                                        value={phoneInput}
                                        mask={REGEXP.mask}
                                        placeholderChar='x'
                                        guide={true} keepCharPositions={true} />
                                    <label htmlFor="phone" className={labelStyle('phone')}>Номер телефона</label>
                                </div>
                                <div className={topElBorderStyle} />
                                <div className='input__field_hints'><div dangerouslySetInnerHTML={{ __html: topElHint}} /></div>
                            </div>
                            <div className='form__data_password'>
                                <div className='password__wrapper'>
                                    <input className='input__field' id='email'
                                        {...register('email', {
                                            validate: v => validateEmail(v),
                                            onChange: () => onChangeEmail(),
                                            onBlur: () => onBlurEmail()})} />
                                    <label htmlFor="email" className={labelStyle('email')}>E-mail</label>
                                </div>
                                <div className={bottomElBorderStyle} />
                                <div className='input__field_hints'><div dangerouslySetInnerHTML={{ __html: bottomElHint}} /></div>
                            </div>
                        </div>
                    }

                    {(stepNumber === 1 || stepNumber === 2) &&
                        <div className='form__submit'>
                            <button type='button'
                                className={stepNumber === 1 ? submitBtnStepOneStyle() : submitBtnStepTwoStyle()}
                                onClick={stepNumber === 1 ? handlerToStepTwo: handlerToStepThree}
                                disabled={stepNumber === 1 ? btnIsDisabledStepOne() : btnIsDisabledStepTwo()}>
                                    {stepNumber === 1 ? 'следующий шаг' : 'последний шаг'}
                            </button>
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
                            <button type='submit'
                                className={submitBtnStepThreeStyle()}
                                disabled={btnIsDisabledStepThree()}>
                                    зарегистрироваться
                            </button>
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
            }
            {isRegistrationOk && <RegistrationOk />}
            {isRegistrationError400 && <RegistrationError400 />}
            {isRegistrationError && <RegistrationError />}
        </div>

    );
};
