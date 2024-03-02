import { IS_REMEMBERED, REGEXP } from "@constants/constants";

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
    let isRememberMe = true;
    if (localStorage.getItem(IS_REMEMBERED)) {
        isRememberMe = JSON.parse(localStorage.getItem(IS_REMEMBERED) as string);
    }

    return isRememberMe;
}
