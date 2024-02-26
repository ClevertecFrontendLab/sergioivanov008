export type AuthPageProps = {
    isThisAuthPage: boolean,
}

export type LoginRegistrationData = {
    email: string,
    password: string
}

export type ForgotPassData = {
    email: string,
}

export type ConfirmPassData = {
    email: string,
    code: string,
}

export type ChangePassData = {
    password: string,
    confirmPassword: string,
}

export type RegistrationOkResponse = Record<string, never>;

export type RegistrationErrorResponse = {
    statusCode: number,
    error: string,
    message: string
}

export type FormItems = {
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

export type ForgotPassOkResponse = {
    email: string,
    message: string,
}

export type ForgotPassErrorResponse = {
    statusCode: number,
    error: string,
    message: string,
}

export type ConfirmPassOkResponse = {
    email: string,
    message: string,
}

export type ConfirmPassErrorResponse = {
    statusCode: number,
    error: string,
    message: string,
}

export type ChangePassOkResponse = {
    message: string,
}

export type ChangePassErrorResponse = {
    statusCode: number,
    error: string,
    message: string,
}
