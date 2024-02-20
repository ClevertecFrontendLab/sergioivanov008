import axios from "axios";
import { RegistrationData, RegistrationErrorResponse, RegistrationOkResponse } from "../types/types";
import { API } from "@constants/constants";

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

$api.interceptors.response.use((config) => {
    const newConfig = config;

    newConfig.headers.Authorization = `Bearer ${localStorage.getItem('cleverToken')}`;

    return newConfig;
});

export async function userRegistration(data: RegistrationData): Promise<RegistrationOkResponse | RegistrationErrorResponse> {
    const response = await $apiBase.post(API.url_registration, data);
    const outData = await response.data;
    
    return outData;
}
