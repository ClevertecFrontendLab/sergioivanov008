import { MONTHES } from '../constants/constants';

export const getDateForFeedback = (date) => {
    const dateForParse = new Date(date);
    const day = dateForParse.getDate();
    const month = MONTHES[dateForParse.getMonth()];
    const year = dateForParse.getFullYear();

    return `${day} ${month} ${year}`;
}
