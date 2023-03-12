import { Link } from 'react-router-dom';

import { FORM } from '../../../constants/constants';

import '../authorization-forms.css';

export const RecoveryOk = () => (
    <div className='registration-ok' data-test-id='status-block' >
        <div className='form__logo form-ok'>{FORM.textLogo}</div>
        <div className='registration-ok__title'>{FORM.titleRecoveryOk}</div>
        <div className='registration-ok__text'>{FORM.textRecoveryOk}</div>
        <button type='button' className='submit__btn'>
            <Link to='/auth' className='link__inside-btn'>{FORM.textEnter}</Link>
        </button>
    </div>
);
