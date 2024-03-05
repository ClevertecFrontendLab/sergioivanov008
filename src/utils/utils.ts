import { IS_REMEMBERED, NUMBER_DATA, REGEXP, TOKEN } from "@constants/constants";
import { Nullable } from "../types/types";

export const toggleBodyNotScrollable = (set: boolean) => {
    if (set) {
        document.body.classList.add('body_not-scrollable');
    } else {
        document.body.classList.remove('body_not-scrollable');
    }
};

export const checkPasswordIsValid = (v: string) => {
    const isLenPassValid = v.length >= 8;
    const isDigitPassValid = REGEXP.hasDigit.test(v);
    const isLetterPassValid = REGEXP.hasLetter.test(v);
    const isUpperLetterPassValid = REGEXP.hasUpperLetter.test(v);
    const isPasswordValid = isLenPassValid && isDigitPassValid && isLetterPassValid && isUpperLetterPassValid;

    return isPasswordValid;
}

export const checkEmailIsValid = (v: string) => {
    const isEmailValid = REGEXP.isEmailValid.test(v);

    return isEmailValid;
}

export const getIsRemembered = (): boolean => {
    let isRememberMe = false;
    
    if (localStorage.getItem(IS_REMEMBERED)) {
        isRememberMe = JSON.parse(localStorage.getItem(IS_REMEMBERED) as string);
    }

    return isRememberMe;
}

export const getDateForFeedback = (date: string): string => {
    const dateForParse = new Date(date);
    const day = dateForParse.getDate().toString().padStart(2, '0');
    const month = dateForParse.getMonth().toString().padStart(2, '0');
    const year = dateForParse.getFullYear().toString();

    return `${day}.${month}.${year}`;
};

export const clearLocalStorage = (): void => {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(IS_REMEMBERED);
    sessionStorage.removeItem(TOKEN);
}

export const getModalWidth = (width: number): number => {
    return width >= NUMBER_DATA.BREAK_WIDTH
        ? NUMBER_DATA.MODAL_MAX_WIDTH
        : NUMBER_DATA.MODAL_MIN_WIDTH;
}

export const getToken = (): Nullable<string> => {
    let token: Nullable<string>;

    if (getIsRemembered()) {
        token = localStorage.getItem(TOKEN);
    } else {
        token = sessionStorage.getItem(TOKEN);
    }

    return token;
}
