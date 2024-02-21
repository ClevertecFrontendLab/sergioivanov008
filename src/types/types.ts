export type AuthPageProps = {
    isThisAuthPage: boolean,
}

export type RegistrationData = {
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
