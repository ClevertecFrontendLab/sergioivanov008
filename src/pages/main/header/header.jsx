import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import avatarImg from '../../../assets/header/avatar.png';
import { GREETING_TEXT, HEADER_TITLE } from '../../../constants/constants';
import { toggleOpenBurger, toggleOpenSmallMenu } from '../../../redux/slices/menu-slice';
import { Menu } from '../menu';
import { SmallMenu } from '../small-menu';

import './header.css';

export const Header = () => {
    const dispatch = useDispatch();

    const openBurger = useSelector(state => state.menu.openBurger);
    const openSmallMenu = useSelector(state => state.menu.openSmallMenu);

    const toggleBodyNotScrollable = () => {
        const body = document.querySelector('body');

        body.classList.toggle('body_not-scrollable');
    }

    const toggleBurger = () => {
        dispatch(toggleOpenBurger(!openBurger));
        // toggleBodyNotScrollable();
    }

    const burgerMenuStyle = openBurger ? 'burger-menu close' : 'burger-menu';
    const coverElementStyle = openBurger ? 'cover-element' : 'cover-element hidden';

    const handlerSmallMenu = () => {
        dispatch(toggleOpenSmallMenu(!openSmallMenu));
    }

    return (
        <header className='header'>
            <div to='/' className='header__logo'>
                <Link to='/' className='logo-image' />
                <div
                    className={coverElementStyle}
                    onClick={toggleBurger}
                    role='presentation' />
                <div
                    className={burgerMenuStyle}
                    onClick={toggleBurger}
                    data-test-id='button-burger'
                    role='presentation' />
                <Menu
                    isItBurger={true}
                    dataTestId='burger-navigation' />
            </div>
            <div className='header__person'>
                {openSmallMenu && <SmallMenu />}
                <div className='header-title'>{HEADER_TITLE}</div>
                <div className='person' onClick={handlerSmallMenu} role='presentation'>
                    <div className='person_greeting'>{GREETING_TEXT}</div>
                    <img className='avatar-image' src={avatarImg} alt="avatar" />
                </div>
            </div>
        </header>
    );
}
