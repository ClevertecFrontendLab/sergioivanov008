import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';

import { MENU_ALLBOOKS, MENU_ITEM_ALLBOOKS, MENU_ITEM_OFERTA, MENU_ITEM_RULES, SMALL_MENU } from '../../../constants/constants';
import { setIsAuth } from '../../../redux/slices/api-auth-slice';
import { toggleIsActiveBooks, toggleOpenBurger, toggleOpenCategory } from '../../../redux/slices/menu-slice';

import './menu.css';

export const Menu = (props) => {
    const dispatch = useDispatch();

    const openCategory = useSelector(state => state.menu.openCategory);
    const openBurger = useSelector(state => state.menu.openBurger);
    const categories = useSelector(state => state.categories.categories);
    const canUse = useSelector(state => state.main.canUseCategoriesAndBooks);
    const isActiveBooks = useSelector(state => state.menu.isActiveBooks);
    const books = useSelector(state => state.books.books);

    const toggleMenu = () => {
        dispatch(toggleOpenCategory(!openCategory));
    }

    const toggleMenuActive = () => {
        dispatch(toggleIsActiveBooks(true));
    }

    const closeMenu = () => {
        dispatch(toggleOpenCategory(false));
        dispatch(toggleOpenBurger(false));
        dispatch(toggleIsActiveBooks(false));
    }

    const allBookUnactive = () => {
        dispatch(toggleOpenBurger(false));
        dispatch(toggleIsActiveBooks(true));
    }

    const handlerExit = () => {
        dispatch(toggleOpenBurger(false));
        dispatch(setIsAuth(false));

        localStorage.removeItem('cleverToken');

        return <Navigate to='/auth' />;
    }

    const checkCount = (curCategories) => books.filter((el) => el.categories[0] === curCategories).length;
    const isActiveBooksCategory = () => isActiveBooks ? 'active' : '';
    const menuArrowStyle = () => openCategory ? 'menu-arrow' : 'menu-arrow close';
    const menuStyle = () => props.isItBurger ? `menu-burger ${openBurger && 'show'}` : 'menu';
    const bookCategoryListStyle = () => openCategory ? 'book-category-list' : 'book-category-list hidden';
    const idForBooks = () => props.isItBurger ? 'burger-books' : 'navigation-books';
    const idForCategory = (category) => props.isItBurger ? `burger-${category}` : `navigation-${category}`;
    const idForCount = (category) => props.isItBurger ? `burger-book-count-for-${category}` : `navigation-book-count-for-${category}`;
    const idForRules = () => props.isItBurger ? 'burger-terms' : 'navigation-terms';
    const idForOferta = () => props.isItBurger ? 'burger-contract' : 'navigation-contract';

    return (
        <nav
            className={menuStyle()}
            data-test-id={props.isItBurger ? 'burger-navigation' : 'empty'}
        >
            <div className='menu-item'>
                <div className={`menu-all-books ${isActiveBooksCategory()}`}>
                    <NavLink
                        to='/'
                        className='menu-main-item'
                        onClick={toggleMenuActive}
                        data-test-id={props.isItBurger ? 'burger-showcase' : 'navigation-showcase'}
                    >
                        {MENU_ITEM_ALLBOOKS}
                    </NavLink>
                    <div className={menuArrowStyle()}
                            onClick={toggleMenu}
                            role='presentation'/>
                </div>

                <div className={bookCategoryListStyle()}>
                    {canUse &&
                        <NavLink
                            to='/books/all'
                            className='book-category'
                            onClick={allBookUnactive}
                            data-test-id={idForBooks()}
                        >
                            <div className='book-category-name'>
                                {MENU_ALLBOOKS}
                            </div>
                        </NavLink>
                        }
                    { canUse &&
                        categories.map((el) => (
                            <NavLink
                                to={`/books/${el.path}`}
                                className='book-category'
                                onClick={allBookUnactive}
                                key={el.id}
                            >
                                <div className='book-category-name'>
                                    <span data-test-id={idForCategory(el.path)}>
                                        {el.name}
                                    </span>
                                    <span
                                        data-test-id={idForCount(el.path)}
                                        className='book-category-count'>
                                            {checkCount(el.name)}
                                    </span>
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
                data-test-id={idForRules()}
            >
                {MENU_ITEM_RULES}
            </NavLink>
            <NavLink
                to='/oferta'
                className='menu-main-item'
                onClick={closeMenu}
                data-test-id={idForOferta()}
            >
                {MENU_ITEM_OFERTA}
            </NavLink>
                <div className='menu-main__line'/>
                <div className='menu-main-item'>
                    {SMALL_MENU.textItem_profile}
                </div>
                <div
                    role='presentation'
                    to='/auth'
                    className='menu-main-item'
                    onClick={handlerExit}
                    data-test-id={props.isItBurger ? 'exit-button' : 'empty'} >
                    {SMALL_MENU.textItem_exit}
                </div>
        </nav>
    );
}
