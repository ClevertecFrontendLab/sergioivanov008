import axios from "axios";
import {
    LoginErrorResponse,
    LoginOkResponse,
    LoginRegistrationData,
    RegistrationErrorResponse,
    RegistrationOkResponse
} from "../types/types";
import { API, TOKEN } from "@constants/constants";

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

    newConfig.headers.Authorization = `Bearer ${localStorage.getItem(TOKEN)}`;

    return newConfig;
});

$api.interceptors.response.use((config) => {
    const newConfig = config;

    newConfig.headers.Authorization = `Bearer ${localStorage.getItem(TOKEN)}`;

    return newConfig;
});

export async function userRegistration(data: LoginRegistrationData): Promise<RegistrationOkResponse | RegistrationErrorResponse> {
    const response = await $apiBase.post(API.url_registration, data);
    const outData = await response.data;

    return outData;
}

export async function userLogin(data: LoginRegistrationData): Promise<LoginOkResponse | LoginErrorResponse> {
    const response = await $apiBase.post(API.url_login, data);
    const outData = await response.data;

    return outData;
}
