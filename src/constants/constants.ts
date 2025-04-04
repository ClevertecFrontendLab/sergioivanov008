import avatarImg from '~/assets/avatar_image.png';
import { FooterMenuItemType } from '~/components/types';

export const AVATAR_DATA = {
    imgSrc: avatarImg,
    imgAlt: 'Avatar image',
    name: 'Екатерина Константинопольская',
    nickName: '@bake_and_pie',
};

export const BTN_TEXT = {
    addRecipe: 'Записать рецепт',
};

export const FOOTER_MENU: FooterMenuItemType[] = [
    {
        id: '01',
        type: 'home',
        text: 'Главная',
        isActive: true,
    },
    {
        id: '02',
        type: 'search',
        text: 'Поиск',
    },
    {
        id: '03',
        type: 'addRecipe',
        text: 'Записать',
    },
    {
        id: '04',
        type: 'addRecipe',
        text: 'Мой профиль',
    },
];

export const NAV_FOOTER = {
    textLight: 'Версия программы 03.25',
    text: `Все права защищены,\n
           ученический файл,\n
           ©Клевер Технолоджи, 2025`,
    btnText: 'Выйти',
};
