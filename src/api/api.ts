import axios from "axios";
import {
    ConfirmPassData,
    ConfirmPassErrorResponse,
    ConfirmPassOkResponse,
    ForgotPassData,
    ForgotPassErrorResponse,
    ForgotPassOkResponse,
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

export async function forgotPassword(data: ForgotPassData): Promise<ForgotPassOkResponse | ForgotPassErrorResponse> {
    const response = await $apiBase.post(API.url_check_email, data);
    const outData = await response.data;

    return outData;
}

export async function confirmPassword(data: ConfirmPassData): Promise<ConfirmPassOkResponse | ConfirmPassErrorResponse> {
    const response = await $apiBase.post(API.url_confirm_email, data);
    const outData = await response.data;

    return outData;
}
