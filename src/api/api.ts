import axios from "axios";
import {
    ChangePassData,
    ChangePassOkResponse,
    ConfirmPassData,
    ConfirmPassOkResponse,
    EmptyOkResponse,
    ErrorResponse,
    ForgotPassData,
    ForgotPassOkResponse,
    GetFeedbacksOkResponse,
    LoginOkResponse,
    LoginRegistrationData,
    NewFeedbackPost,
} from "../types/types";
import { API } from "@constants/constants";
import { getToken } from "@utils/utils";

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

    newConfig.headers.Authorization = `Bearer ${getToken()}`;

    return newConfig;
});

$api.interceptors.response.use((config) => {
    const newConfig = config;

    newConfig.headers.Authorization = `Bearer ${getToken()}`;

    return newConfig;
});

export async function userRegistration(data: LoginRegistrationData): Promise<EmptyOkResponse | ErrorResponse> {
    const response = await $apiBase.post(API.url_registration, data);
    const outData = await response.data;

    return outData;
}

export async function userLogin(data: LoginRegistrationData): Promise<LoginOkResponse | ErrorResponse> {
    const response = await $apiBase.post(API.url_login, data);
    const outData = await response.data;

    return outData;
}

export async function forgotPassword(data: ForgotPassData): Promise<ForgotPassOkResponse | ErrorResponse> {
    const response = await $apiBase.post(API.url_check_email, data);
    const outData = await response.data;

    return outData;
}

export async function confirmPassword(data: ConfirmPassData): Promise<ConfirmPassOkResponse | ErrorResponse> {
    const response = await $apiBase.post(API.url_confirm_email, data);
    const outData = await response.data;

    return outData;
}

export async function changePassword(data: ChangePassData): Promise<ChangePassOkResponse | ErrorResponse> {
    const response = await $apiBase.post(API.url_change_pass, data);
    const outData = await response.data;

    return outData;
}

export async function getFeedbacks(): Promise<GetFeedbacksOkResponse | ErrorResponse> {
    const response = await $api.get(API.url_feedback);
    const outData = await response.data;

    return outData;
}

export async function postNewFeedback(data: NewFeedbackPost): Promise<EmptyOkResponse | ErrorResponse> {
    const response = await $api.post(API.url_feedback, data);
    const outData = await response.data;

    return outData;
}
