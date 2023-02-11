import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { MENU_ITEM_ALLBOOKS, MENU_ITEM_OFERTA, MENU_ITEM_RULES } from '../../../constants/constants';
import categories from '../../../mock-data/mock-category.json';

import './menu.css';

export const Menu = (props) => {
    const [openCategory, setOpenCategory] = useState(props.openCategory ? true : false);
    const [allBooksActive, setAllBooksActive] = useState(props.allBooksActive ? true : false);
    const [isShowBurger, setIsShowBurger] = useState(false);

    useEffect(() => {
        setIsShowBurger(props.openBurger);
    }, [props.openBurger])

    const ifItBurger = () => {
        if (props.toggleBurger) {
            props.toggleBurger();
        }
    }

    const toggleMenu = () => {
        setOpenCategory(!openCategory);
        setAllBooksActive(true);
    }

    const closeMenu = () => {
        setOpenCategory(false);
        setAllBooksActive(false);
        ifItBurger();
    }

    const allBookUnactive = () => {
        setAllBooksActive(false);
        ifItBurger();
    }

    let menuArrowStyle = openCategory ? 'menu-arrow' : 'menu-arrow close';

    menuArrowStyle = allBooksActive ? menuArrowStyle : `${menuArrowStyle} non-active`

    const menuStyle = isShowBurger ? 'menu-burger' : 'menu';
    const bookCategoryListStyle = openCategory ? 'book-category-list' : 'book-category-list hidden';
    const idForBooks = props.isItBurger ? 'burger-books' : 'navigation-books';

    return (
        <nav
            className={menuStyle}
            data-test-id={props.isItBurger ? 'burger-navigation' : 'empty'}
        >
            <div className='menu-item'>
                <NavLink
                    to='/'
                    className='menu-main-item menu-all-books'
                    onClick={toggleMenu}
                    data-test-id={props.isItBurger ? 'burger-showcase' : 'navigation-showcase'}
                >
                    {MENU_ITEM_ALLBOOKS}
                    <div className={menuArrowStyle} />
                </NavLink>

                <div className={bookCategoryListStyle}>
                    {
                        categories.map((el) => (
                            <NavLink
                                to={`/books/${el.category}`}
                                className='book-category'
                                onClick={allBookUnactive}
                                data-test-id={el.category === 'books' ? idForBooks : 'empty'}
                                key={el.id}
                            >
                                <div className='book-category-name'>
                                    {el.categoryName}
                                    <span className='book-category-count'>{el.categoryCount ? el.categoryCount : ''}</span>
                                </div>
                            </NavLink>
                        ))
                    }
                </div>
            </div>

            <NavLink
                to='/rules'
                className='menu-main-item'
                onClick={closeMenu}
                data-test-id={props.isItBurger ? 'burger-terms' : 'navigation-terms'}
            >
                {MENU_ITEM_RULES}
            </NavLink>
            <NavLink
                to='/oferta'
                className='menu-main-item'
                onClick={closeMenu}
                data-test-id={props.isItBurger ? 'burger-contract' : 'navigation-contract'}
            >
                {MENU_ITEM_OFERTA}
            </NavLink>
        </nav>
    );
}
