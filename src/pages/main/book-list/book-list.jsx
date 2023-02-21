import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { CATEGORY_ALL, MESSAGE_NOT_BOOKS } from '../../../constants/constants';
import { sortAscendDescend } from '../../../functions/functions';
import { BookCard } from '../book-card';

import './book-list.css';

export const BookList = () => {
    const { category } = useParams();
    const books = useSelector(state => state.books.books);
    const canUseBooks = useSelector(state => state.books.canUse);
    const categories = useSelector(state => state.categories.categories);
    const canUseCategories = useSelector(state => state.categories.canUse);
    const listView = useSelector(state => state.bookList.listView);
    const sortDescend = useSelector(state => state.bookList.sortDescend);

    let curView = '';
    let curBooks = [...books];

    if (canUseBooks && canUseCategories) {
        if (category === CATEGORY_ALL) {
            curBooks = sortAscendDescend(curBooks, sortDescend);
        } else {
            const curCategory = categories.find((el) => el.path === category).name;

            curBooks = curBooks.filter((el) => el.categories[0] === curCategory);
            curBooks = sortAscendDescend(curBooks, sortDescend);
        }
    }

    if (curBooks.length === 0) {
        curView = 'book-list_none';
    } else {
        curView = listView ? 'book-list_table' : 'book-list_list';
    }

    return (
        <section className={curView}>
            { curBooks.length > 0 ?
                curBooks.map((el) => (
                    <BookCard book={el} key={el.id} />
                )) :
                <div data-test-id='empty-category'>{MESSAGE_NOT_BOOKS}</div>
            }
        </section>
    );
}
