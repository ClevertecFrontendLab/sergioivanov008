import iconFacebook from '../../../assets/footer/Icon_facebook.png';
import iconInstagram from '../../../assets/footer/Icon_instagram.png';
import iconLinkedin from '../../../assets/footer/Icon_linkedin.png';
import iconVk from '../../../assets/footer/Icon_vk.png';
import { COPIRIGHT_CLEVERLAND, COPIRIGHT_TEXT } from '../../../constants/constants';

import './footer.css';

export const Footer = () => (
    <footer className='footer'>
        <div className='footer__copiright'>{COPIRIGHT_CLEVERLAND}<span>{COPIRIGHT_TEXT}</span></div>
        <div className='footer__icon-social'>
            <img className='footer__icon-social_img' src={iconFacebook} alt="Icon_facebook" />
            <img className='footer__icon-social_img' src={iconInstagram} alt="Icon_instagram" />
            <img className='footer__icon-social_img' src={iconVk} alt="Icon_vk" />
            <img className='footer__icon-social_img' src={iconLinkedin} alt="Icon_linkedin" />
        </div>
    </footer>
);
