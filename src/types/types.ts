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

export type EmptyOkResponse = Record<string, never>;

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

export type ForgotPassOkResponse = {
    email: string,
    message: string,
}

export type ConfirmPassOkResponse = {
    email: string,
    message: string,
}

export type ChangePassOkResponse = {
    message: string,
}

export type Nullable<T> = T | null;

export type ErrorResponse = {
    statusCode: number,
    error: string,
    message: string,
}

export type FeedbackItem = {
    id: string,
    fullName: Nullable<string>,
    imageSrc: Nullable<string>,
    message: Nullable<string>,
    rating: number,
    createdAt: string,
}

export type GetFeedbacksOkResponse = Array<FeedbackItem>;

export type FeedbackItemProps = {
    item: FeedbackItem,
}

export type NewFeedbackPost = {
    message: string,
    rating: number,
  }

export type ModalFeedbacksItems = {
    [index: string]: JSX.Element,
}
