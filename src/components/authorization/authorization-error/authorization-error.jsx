import { useDispatch, useSelector } from 'react-redux';

import { FORM } from '../../../constants/constants';
import { startIsLoadingAuth } from '../../../redux/slices/api-auth-slice';

import '../authorization-forms.css';

export const AuthorizationError = () => {
    const authData = useSelector(state => state.apiAuth.authData);

    const dispatch = useDispatch();

    const handlerErrorRepeat = () => {
        dispatch(startIsLoadingAuth(authData));
    }

    return (
        <div className='registration-ok' data-test-id='status-block' >
            <div className='form__logo form-ok'>{FORM.textLogo}</div>
            <div className='registration-ok__title'>{FORM.titleAuthError}</div>
            <div className='registration-ok__text'>{FORM.textRecoveryError}</div>
            <div className='submit__btn' onClick={handlerErrorRepeat} role='presentation'>
                {FORM.textErrorRepeat}
            </div>
        </div>
    );
};
