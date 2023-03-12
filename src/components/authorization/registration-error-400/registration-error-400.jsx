import { useDispatch } from 'react-redux';

import { FORM } from '../../../constants/constants';
import { setIsFormRegistration } from '../../../redux/slices/api-registration-slice';

import '../authorization-forms.css';

export const RegistrationError400 = () => {
    const dispatch = useDispatch();

    const handlerErrorBack = () => {
        dispatch(setIsFormRegistration());
    }

    return (
        <div className='registration-ok' data-test-id='status-block' >
            <div className='form__logo form-ok'>{FORM.textLogo}</div>
            <div className='registration-ok__title'>{FORM.titleRegistratonError}</div>
            <div className='registration-ok__text'>{FORM.textRegistratonError400}</div>
            <div to='/auth' className='submit__btn' onClick={handlerErrorBack} role='presentation'>
                {FORM.textErrorBack}
            </div>
        </div>
    );
};
