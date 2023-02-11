import { useState } from 'react';

import { PLACEHOLDER, RATING_TITLE } from '../../../constants/constants';

import './navigation-list.css';

export const NavigationList = (props) => {
    const [fullSearchView, setFullSearchView] = useState(false);

    const changeFullSearchView = () => {
        setFullSearchView(!fullSearchView);
    }

    const changeViewTable = () => {
        props.setListView(true);
    }

    const changeViewList = () => {
        props.setListView(false);
    }

    const isActiveTable = props.listView ? 'active' : '';
    const isActivelist = props.listView ? '' : 'active';

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
                <div className='sort-rating'>
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
