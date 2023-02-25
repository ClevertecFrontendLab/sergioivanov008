import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { CATEGORY_ALL, MENU_ALLBOOKS } from '../../../constants/constants';
import { getBooksFetch } from '../../../redux/slices/books-slice';

import './book-list-mini.css';

export const BookListMini = () => {
    const book = useSelector(state => state.book.book);
    const {title} = book;
    const canUse = useSelector(state => state.book.canUse);
    const categories = useSelector(state => state.categories.categories);
    const dispatch = useDispatch();

    const { category } = useParams();
    let backLink = '';

    if (category === CATEGORY_ALL) {
        backLink = MENU_ALLBOOKS;
    } else {
        backLink = categories.find((el) => el.path === category).name;
    }

    const handlerBacklink = () => {
        dispatch(getBooksFetch());
    }

    return (
        <nav className='book-list-mini_navigation'>
            <div className='book-list-mini'>
                <div className='book-list-mini_wrapper'>
                    <Link
                        to={`/books/${category}`}
                        className='book-list-mini_category'
                        onClick={handlerBacklink}
                        data-test-id='breadcrumbs-link'
                        role='presentation'>
                            {backLink}
                    </Link>
                    <span className='book-slash'>/</span>
                    <span className='book-list-mini_book-name' data-test-id='book-name'>{canUse && title}</span>
                </div>
            </div>
        </nav>
    );
}
