import { FORM } from '../../../constants/constants';

import '../authorization-forms.css';

export const ForgotPassOk = () => (
    <div className='registration-ok forgot-pass' >
        <div className='form__logo form-ok'>{FORM.textLogo}</div>
        <div className='registration-ok__title'>{FORM.titleForgotPassOk}</div>
        <div className='registration-ok__text'>{FORM.textForgotPassOk}</div>
    </div>
);
