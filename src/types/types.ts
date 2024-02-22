export type AuthPageProps = {
    isThisAuthPage: boolean,
}

export type LoginRegistrationData = {
    email: string,
    password: string
}

export type RegistrationOkResponse = Record<string, never>;

export type RegistrationErrorResponse = {
    statusCode: number,
    error: string,
    message: string
}

export interface FormItems {
    [index: string]: {
        icon: JSX.Element,
        title: JSX.Element,
        main: JSX.Element,
        btn: JSX.Element,
    }
}

export type LoginOkResponse = {
    accessToken: string,
}

export type LoginErrorResponse = {
    statusCode: number,
    error: string,
    message: string
}

export type LoginResponses = LoginOkResponse | LoginErrorResponse;
