export const HEADER_TEXT = {
    HEADER_TEXT_1: 'Главная',
    HEADER_TEXT_2_1: 'Приветствуем тебя в CleverFit — приложении, ',
    HEADER_TEXT_2_2: ' которое поможет тебе добиться своей мечты!',
    HEADER_TEXT_3: 'Настройки',
}

export const CONTENT_TEXT = {
    CARD_1_TEXT_LINE_1: 'С CleverFit ты сможешь:',
    CARD_1_TEXT_LINE_2: '— планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;',
    CARD_1_TEXT_LINE_3: '— отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами;',
    CARD_1_TEXT_LINE_4: '— создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках;',
    CARD_1_TEXT_LINE_5: '— выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.',
    CARD_2_TEXT: 'CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!',
}

export const FOOTER_TEXT = {
    BTN_FEEDBACKS: 'Смотреть отзывы',
    BTN_ANDROID: 'Android OS',
    BTN_APPLE: 'Apple iOS',
    CARD_TITLE: 'Скачать на телефон',
    CARD_DESC: 'Доступно в PRO-тарифе',
}

export const ROUTE = {
    INDEX: '/',
    MAIN: '/main',
    AUTH: '/auth',
    REGISTRATION: '/auth/registration',
    CONFIRM: '/auth/confirm-email',
    CHANGE_PASS: '/auth/change-password',
    WRONG: '/*',
    ROUTE_RESULT: '/result/:result',
    RES: '/result',
    RES_OK: '/success',
    RES_ERROR_409: '/error-user-exist',
    RES_ERROR: '/error',
    RES_ERROR_LOGIN: '/error-login',
    RES_FORGOT_ERROR_404: '/error-check-email-no-exist',
    RES_FORGOT_ERROR: '/error-check-email',
    RES_ERROR_CHANGE_PASS: '/error-change-password',
    RES_SUCCESS_CHANGE_PASS: '/success-change-password',
    FEEDBACKS: '/feedbacks',
}

export const FORM_TEXT = {
    AUTH: 'Вход',
    REGISTRATION: 'Регистрация',
    REMEMBER: 'Запомнить меня',
    FORGOT: 'Забыли пароль?',
    ENTER: 'Войти',
    ENTER_GOOGLE: 'Войти через Google',
    RULE_PASS: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
    RULE_CONFIRM: 'Пароли не совпадают',
    PLACE_PASS: 'Пароль',
    PLACE_NEW_PASS: 'Новый пароль',
    PLACE_REPEAT_PASS: 'Повторите пароль',
}

export const REGEXP = {
    hasDigit: /[0-9]+/,
    hasLetter: /[a-zа-я]+/,
    hasUpperLetter: /[A-ZА-Я]+/,
    isEmailValid: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
}

export const API = {
    host: 'https://marathon-api.clevertec.ru',
    url_login: '/auth/login',
    url_registration: '/auth/registration',
    url_check_email: '/auth/check-email',
    url_confirm_email: '/auth/confirm-email',
    url_change_pass: '/auth/change-password',
    url_google_auth: '/auth/google',
    url_get_feedbacks: '/feedback',
}

export const API_MESSAGES = {
    EMAIL_NOT_FOUND: 'Email не найден',
}

export const TOKEN = 'cleverFitToken';
export const IS_REMEMBERED = 'cleverFitIsRemembered';

export const STATUS = {
    CODE_403: 403,
    CODE_404: 404,
    CODE_409: 409,
}

export const FEEDBACK_TEXT = {
    TITLE: 'Оставьте свой отзыв первым',
    DESC_1: 'Вы можете быть первым, кто оставит отзыв об этом фитнесс приложении.',
    DESC_2: 'Поделитесь своим мнением и опытом с другими пользователями,',
    DESC_3: 'и помогите им сделать правильный выбор.',
    BTN_NEW_FEEDBACK: 'Написать отзыв',
    BTN_EXPAND: 'Развернуть все отзывы',
    BTN_COLLAPSE: 'Свернуть все отзывы',
    ANONIMOUS_USER: 'Пользователь',
    BTN_BACK: 'Назад',
}

export const NUMBER_DATA = {
    QUAN_FEEDBACKS: 4,
}

export const MODAL_FEEDBACKS = {
    MODAL_WRONG: 'modal-wrong',
}
