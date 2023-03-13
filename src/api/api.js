import axios from 'axios';

import { API } from '../constants/constants';

const $api = axios.create({
    withCredentials: true,
    baseURL: API.host,
});

const $apiBase = axios.create({
    withCredentials: true,
    baseURL: API.host,
});

$api.interceptors.request.use((config) => {
    const newConfig = config;

    newConfig.headers.Authorization = `Bearer ${localStorage.getItem('cleverToken')}`;

    return newConfig;
});

export async function userAuth (data) {
    const response = await $apiBase.post(API.url_auth, data);

    return response;
}

export async function userRegistration(data) {
    const response = await $apiBase.post(API.url_registration, data);

    return response;
}

export async function userForgotPassword(data) {
    const response = await $apiBase.post(API.url_forgotPassword, data);

    return response;
}

export async function userResetPassword(data) {
    const response = await $apiBase.post(API.url_resetPassword, data);

    return response;
}

export async function getCategories() {
    const responce = await $api.get(API.url_getCategoriesFetch);

    return responce;
}

export async function getBooks() {
    const responce = await $api.get(API.url_getBooksFetch);

    return responce;
}

export async function getBook(id) {
    const responce = await $api.get(`${API.url_getBookFetch}${id}`);

    return responce;
}
