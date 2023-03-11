export const HEADER_TITLE = 'Библиотека';
export const GREETING_TEXT = 'Привет, Иван!';
export const COPIRIGHT_CLEVERLAND = '© 2020-2023 Cleverland. ';
export const COPIRIGHT_TEXT = 'Все права защищены.';
export const BTN_RATE = 'оценить книгу';
export const BTN_BOOK = 'забронировать';
export const MENU_ITEM_ALLBOOKS = 'Витрина книг';
export const MENU_ALLBOOKS = 'Все книги';
export const MENU_ITEM_RULES = 'Правила пользования';
export const MENU_ITEM_OFERTA = 'Договор оферты';
export const RATING_TITLE = 'По рейтингу';
export const RATING_NONE = 'ещё нет оценок';
export const PLACEHOLDER = 'Поиск книги или автора…';
export const BOOK_FEEDBACKS = 'отзывы';
export const COMMON_ABOUT = 'О книге';
export const COMMON_ORDER_BTN = 'забронировать';
export const BOOK_RATING_NAME = 'рейтинг';
export const BOOK_DETAIL_INFORMATION = 'Подробная информация';
export const BOOK_DETAIL_PUBLISH = 'Издательство';
export const BOOK_DETAIL_ISSUE_YEAR = 'Год издания';
export const BOOK_DETAIL_PAGES = 'Страниц';
export const BOOK_DETAIL_COVER = 'Переплёт';
export const BOOK_DETAIL_FORMAT = 'Формат';
export const BOOK_DETAIL_CATEGORIES = 'Жанр';
export const BOOK_DETAIL_WEIGHT = 'Вес';
export const BOOK_DETAIL_ISBN = 'ISBN';
export const BOOK_DETAIL_PRODUCER = 'Изготовитель';
export const TOAST_MESSAGE = 'Что-то пошло не так. Обновите страницу через некоторое время.';
export const MONTHES = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
export const CATEGORY_ALL = 'all';
export const MESSAGE_NOT_BOOKS = 'В этой категории книг ещё нет';
export const MESSAGE_NOT_FOUND_BOOKS = 'По запросу ничего не найдено';
export const REGEXP = {
    hasLatinLetter: /[a-zA-Z]+/,
    hasCyrLetter: /[а-яА-Я]+/,
    hasOnlyDigit: /\d+/,
    hasRightLength: /[a-zA-Zа-яА-Я0-9]{8,}/,
    hasUpperLetter: /[A-ZА-Я]+/,
    isEmailValid: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
    isPhone: /(\+375)\s\((29|33|25|44)\)\s[1-9]\d\d-\d\d-\d\d/,
    mask: ['+','3','7','5',' ','(',/\d/,/\d/,')',' ',/\d/,/\d/,/\d/,'-',/\d/,/\d/,'-',/\d/,/\d/],
};
export const FORM = {
    textLogo: 'Cleverland',
    textLogin: 'Логин',
    textPassword: 'Пароль',
    textEnter: 'вход',
    titleRegistratonOk: 'Регистрация успешна',
    titleRegistratonError: 'Данные не сохранились',
    textRegistratonOk: 'Регистрация прошла успешно. Зайдите в личный кабинет, используя свои логин и пароль',
    textRegistratonError400: 'Такой логин или e-mail уже записан в системе. Попробуйте зарегистрироваться по другому логину или e-mail',
    textRegistratonError: 'Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз',
    textErrorBack: 'назад к регистрации',
    textErrorRepeat: 'повторить',
    titleAuth: 'Вход в личный кабинет',
    titleRegistration: 'Регистрация',
    titleForgotPass: 'Восстановление пароля',
    textStaticHint: 'На это email  будет отправлено письмо с инструкциями по восстановлению пароля',
    titleForgotPassOk: 'Письмо выслано',
    textForgotPassOk: 'Перейдите в вашу почту, чтобы воспользоваться подсказками по восстановлению пароля',

};
export const API = {
    host: 'https://strapi.cleverland.by',
    url_auth: '/api/auth/local',
    url_registration: '/api/auth/local/register',
    url_forgotPassword: '/api/auth/forgot-password',
    url_resetPassword: '/api/auth/reset-password',
    url_getBookFetch: '/api/books/',
    url_getCategoriesFetch: '/api/categories',
    url_getBooksFetch: '/api/books',
};
export const SMALL_MENU = {
    textItem_profile: 'Профиль',
    textItem_exit: 'Выход',
};
