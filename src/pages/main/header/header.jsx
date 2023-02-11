import { useState } from 'react';
import { Link } from 'react-router-dom';

import avatarImg from '../../../assets/header/avatar.png';
import { GREETING_TEXT, HEADER_TITLE } from '../../../constants/constants';
import { Menu } from '../menu';

import './header.css';

export const Header = () => {
    const [openBurger, setOpenBurger] = useState(false);

    const toggleBodyNotScrollable = () => {
        const body = document.querySelector('body');

        body.classList.toggle('body_not-scrollable');
    }

    const toggleBurger = () => {
        setOpenBurger(!openBurger);
        toggleBodyNotScrollable();
    }

    const burgerMenuStyle = openBurger ? 'burger-menu close' : 'burger-menu';
    const coverElementStyle = openBurger ? 'cover-element' : 'cover-element hidden';

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
                    toggleBurger={toggleBurger}
                    openBurger={openBurger}
                    openCategory={true}
                    allBooksActive={true}
                    isItBurger={true}
                    dataTestId='burger-navigation' />
            </div>
            <div className='header__person'>
                <div className='header-title'>{HEADER_TITLE}</div>
                <div className='person'>
                    <div className='person_greeting'>{GREETING_TEXT}</div>
                    <img className='avatar-image' src={avatarImg} alt="avatar" />
                </div>
            </div>
        </header>
    );
}
