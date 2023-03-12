import { Link } from 'react-router-dom';

import { FORM } from '../../../constants/constants';

import '../authorization-forms.css';

export const RecoveryOk = () => (
    <div className='registration-ok' >
        <div className='form__logo form-ok'>{FORM.textLogo}</div>
        <div className='registration-ok__title'>{FORM.titleRecoveryOk}</div>
        <div className='registration-ok__text'>{FORM.textRecoveryOk}</div>
        <Link to='/auth' className='submit__btn' >{FORM.textEnter}</Link>
    </div>
);
