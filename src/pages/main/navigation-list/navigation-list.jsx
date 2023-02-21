import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PLACEHOLDER, RATING_TITLE } from '../../../constants/constants';
import { setSortDescend, toggleListView } from '../../../redux/slices/book-list-slice';

import './navigation-list.css';

export const NavigationList = () => {
    const [fullSearchView, setFullSearchView] = useState(false);
    const listView = useSelector(state => state.bookList.listView);
    const sortDescend = useSelector(state => state.bookList.sortDescend);
    const dispatch = useDispatch();

    const changeFullSearchView = () => {
        setFullSearchView(!fullSearchView);
    }

    const changeViewTable = () => {
        dispatch(toggleListView(true));
    }

    const changeViewList = () => {
        dispatch(toggleListView(false));
    }

    const changeSort = () => {
        dispatch(setSortDescend(!sortDescend));
    }

    const isActiveTable = listView ? 'active' : '';
    const isActivelist = listView ? '' : 'active';

    const navigationListStyle = fullSearchView ? 'navigation-list short' : 'navigation-list';

    return (
        <section className={navigationListStyle}>
            <div className='books-search'>
                <input
                    className="books-search-input"
                    placeholder={PLACEHOLDER}
                    data-test-id='input-search' />
                <div
                    className='books-search-button'
                    onClick={changeFullSearchView}
                    data-test-id='button-search-open'
                    role='presentation' />
                <div
                    className='search-close'
                    onClick={changeFullSearchView}
                    data-test-id='button-search-close'
                    role='presentation' />
            </div>
            <div className='books-sorting'>
                <div className='sort-rating' onClick={changeSort} role='presentation'>
                    <div className={`sort-rating_icon ${sortDescend ? '' : 'ascend'}`} />
                    <div className='sort-rating_title'>{RATING_TITLE}</div>
                </div>
                <div className='btns-view'>
                    <div
                        className={`sort-btn btn-table ${isActiveTable}`}
                        data-test-id='button-menu-view-window'
                        onClick={changeViewTable}
                        role='presentation'>
                        {}
                    </div>
                    <div
                        className={`sort-btn btn-list ${isActivelist}`}
                        data-test-id='button-menu-view-list'
                        onClick={changeViewList}
                        role='presentation'>
                        {}
                    </div>
                </div>
            </div>
        </section>
    );
}
