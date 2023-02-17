import axios from 'axios';

import { API_URL_CET_CATEGORIES_FETCH, API_URL_GET_BOOK_FETCH,API_URL_GET_BOOKS_FETCH } from '../constants/constants';

export async function getCategories() {
    const responce = await axios.get(API_URL_CET_CATEGORIES_FETCH);

    return responce;
}

export async function getBooks() {
    const responce = await axios.get(API_URL_GET_BOOKS_FETCH);

    return responce;
}

export async function getBook(id) {
    const responce = await axios.get(`${API_URL_GET_BOOK_FETCH}${id}`);

    return responce;
}
