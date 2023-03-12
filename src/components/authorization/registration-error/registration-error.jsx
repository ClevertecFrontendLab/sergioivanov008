import { useDispatch, useSelector } from 'react-redux';

import { FORM } from '../../../constants/constants';
import { startIsLoadingRegistration } from '../../../redux/slices/api-registration-slice';

import '../authorization-forms.css';

export const RegistrationError = () => {
    const registrationData = useSelector(state => state.apiRegistration.registrationData);

    const dispatch = useDispatch();

    const handlerErrorRepeat = () => {
        dispatch(startIsLoadingRegistration(registrationData));
    }

    return (
        <div className='registration-ok' data-test-id='status-block' >
            <div className='form__logo form-ok'>{FORM.textLogo}</div>
            <div className='registration-ok__title'>{FORM.titleRegistratonError}</div>
            <div className='registration-ok__text'>{FORM.textRegistratonError}</div>
            <div to='/auth' className='submit__btn' onClick={handlerErrorRepeat} role='presentation'>
                {FORM.textErrorRepeat}
            </div>
        </div>
    );
};
