import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { MENU_ITEM_ALLBOOKS, MENU_ITEM_OFERTA, MENU_ITEM_RULES } from '../../../constants/constants';
import { toggleAllBooksActive, toggleOpenBurger, toggleOpenCategory } from '../../../redux/slices/menu-slice';

import './menu.css';

export const Menu = (props) => {
    const dispatch = useDispatch();
    const openCategory = useSelector(state => state.menu.openCategory);
    const allBooksActive = useSelector(state => state.menu.allBooksActive);
    const openBurger = useSelector(state => state.menu.openBurger);
    const categories = useSelector(state => state.categories.categories);
    const canUse = useSelector(state => state.main.canUseCategoriesAndBooks);

    const toggleMenu = () => {
        dispatch(toggleOpenCategory(!openCategory));
        dispatch(toggleAllBooksActive(true));
    }

    const closeMenu = () => {
        dispatch(toggleOpenCategory(false));
        dispatch(toggleAllBooksActive(false));
        dispatch(toggleOpenBurger(false));
    }

    const allBookUnactive = () => {
        dispatch(toggleAllBooksActive(false));
        dispatch(toggleOpenBurger(false));
    }

    let menuArrowStyle = openCategory ? 'menu-arrow' : 'menu-arrow close';

    menuArrowStyle = allBooksActive ? menuArrowStyle : `${menuArrowStyle} non-active`;

    const menuStyle = props.isItBurger ? `menu-burger ${openBurger && 'show'}` : 'menu';
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
                    { canUse &&
                        categories.map((el) => (
                            // <NavLink
                            //     to={`/books/${el.category}`}
                            //     className='book-category'
                            //     onClick={allBookUnactive}
                            //     data-test-id={el.category === 'books' ? idForBooks : 'empty'}
                            //     key={el.id}
                            // >
                            //     <div className='book-category-name'>
                            //         {el.categoryName}
                            //         <span className='book-category-count'>{el.categoryCount ? el.categoryCount : ''}</span>
                            //     </div>
                            // </NavLink>
                            <NavLink
                                to={`/books/${el.path}`}
                                className='book-category'
                                onClick={allBookUnactive}
                                data-test-id={el.category === 'books' ? idForBooks : 'empty'}
                                key={el.id}
                            >
                                <div className='book-category-name'>
                                    {el.name}
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
