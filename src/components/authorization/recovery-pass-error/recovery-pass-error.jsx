import { useDispatch, useSelector } from 'react-redux';

import { FORM } from '../../../constants/constants';
import { startIsLoadingRecoveryPass } from '../../../redux/slices/api-recovery-pass-slice';

import '../authorization-forms.css';

export const RecoveryPassError = () => {
    const recoveryPassData = useSelector(state => state.apiRecoveryPass.recoveryPassData);

    const dispatch = useDispatch();

    const handlerErrorRepeat = () => {
        dispatch(startIsLoadingRecoveryPass(recoveryPassData));
    }

    return (
        <div className='registration-ok' data-test-id='status-block' >
            <div className='form__logo form-ok'>{FORM.textLogo}</div>
            <div className='registration-ok__title'>{FORM.titleRegistratonError}</div>
            <div className='registration-ok__text'>{FORM.textRecoveryError}</div>
            <div className='submit__btn' onClick={handlerErrorRepeat} role='presentation'>
                {FORM.textErrorRepeat}
            </div>
        </div>
    );
};
