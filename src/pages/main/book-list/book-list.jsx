import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { CATEGORY_ALL, MESSAGE_NOT_BOOKS, MESSAGE_NOT_FOUND_BOOKS } from '../../../constants/constants';
import { sortAscendDescend } from '../../../functions/functions';
import { setActualBooks } from '../../../redux/slices/book-list-slice';
import { BookCard } from '../book-card';

import './book-list.css';

export const BookList = () => {
    const { category } = useParams();
    const dispatch = useDispatch();

    const books = useSelector(state => state.books.books);
    const canUseBooks = useSelector(state => state.books.canUse);
    const categories = useSelector(state => state.categories.categories);
    const canUseCategories = useSelector(state => state.categories.canUse);
    const listView = useSelector(state => state.bookList.listView);
    const sortDescend = useSelector(state => state.bookList.sortDescend);
    const actualBooks = useSelector(state => state.bookList.actualBooks);
    const searchQuery = useSelector(state => state.bookList.searchQuery);

    const [curView, setCurView] = useState('');

    useEffect(() => {
        if (canUseBooks && canUseCategories) {
            const tempArr = [...books];
            let sortArr = [];

            if (category === CATEGORY_ALL) {
                sortArr = sortAscendDescend(tempArr, sortDescend);
            } else if (category !== CATEGORY_ALL) {
                const curCategory = categories.find((el) => el.path === category).name;
                const filteredBooks = tempArr.filter((el) => el.categories[0] === curCategory);

                sortArr = sortAscendDescend(filteredBooks, sortDescend);
            }
            sortArr = sortArr.filter((el) => el.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1);

            dispatch(setActualBooks(sortArr));
        }
    }, [canUseBooks, canUseCategories, dispatch, books, category, categories, sortDescend, searchQuery]);

    useEffect(() => {
        if (actualBooks.length === 0) {
            setCurView('book-list_none');
        } else {
            setCurView(listView ? 'book-list_table' : 'book-list_list');
        }
    }, [actualBooks.length, listView]);

    const idForEmptyContent = () => searchQuery === '' ? 'empty-category' : 'search-result-not-found';
    const emptyContentMessage = () => searchQuery === '' ? MESSAGE_NOT_BOOKS : MESSAGE_NOT_FOUND_BOOKS;

    return (
        <section className={curView}>
            { actualBooks.length > 0 ?
                actualBooks.map((el) => (
                    <BookCard book={el} key={el.id} />
                )) :
                <div data-test-id={idForEmptyContent()}>
                    <span>{emptyContentMessage()}</span>
                </div>
            }
        </section>
    );
}
