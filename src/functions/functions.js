import { MONTHES } from '../constants/constants';

export const getDateForFeedback = (date) => {
    const dateForParse = new Date(date);
    const day = dateForParse.getDate();
    const month = MONTHES[dateForParse.getMonth()];
    const year = dateForParse.getFullYear();

    return `${day} ${month} ${year}`;
};

export const toggleBodyNotScrollable = (set) => {
    const body = document.querySelector('body');

    if (set) {
        body.classList.add('body_not-scrollable')
    } else {
        body.classList.remove('body_not-scrollable');
    }
};

export const sortAscendDescend = (curArr, sort) => {
    const tempArr = curArr.sort((a, b) => {
        if (a.rating > b.rating) {
            return 1;
        }
        if (a.rating < b.rating) {
            return -1;
        }
        if (a.rating === 0) {
            return 1;
        }
        if (a.rating === null) {
            return -1;
        }

        return 0;
    });

    return sort ? tempArr.reverse() : tempArr;
};

export const getTitleWithHighlight = (searchQuery, title) => {
    const curRegexp = new RegExp(searchQuery, 'ig');
    const replacer = (match) => `<span class='highlight-text' data-test-id='highlight-matches'>${match}</span>`;

    return searchQuery !== '' && title.replace(curRegexp, replacer);
};

export const isItNumber = (value) => typeof value === 'number' && !Number.isNaN(value);
