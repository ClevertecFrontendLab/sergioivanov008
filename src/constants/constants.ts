import avatarImg from '~/assets/avatar_image.png';
import { FooterMenuItemType, NavDataType } from '~/components/types';

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

export const NAV_DATA: NavDataType[] = [
    {
        id: '01',
        category: 'Салаты',
        items: [
            { id: '001', title: 'Мясные салаты' },
            { id: '002', title: 'Рыбные салаты' },
            { id: '003', title: 'Овощные салаты' },
            { id: '004', title: 'Теплые салаты' },
        ],
    },
    {
        id: '02',
        category: 'Закуски',
        items: [
            { id: '005', title: 'Мясные закуски' },
            { id: '006', title: 'Рыбные закуски' },
            { id: '007', title: 'Овощные закуски' },
            { id: '008', title: 'Теплые закуски' },
            { id: '009', title: 'Бутерброды' },
            { id: '010', title: 'Фастфуд' },
        ],
    },
    {
        id: '03',
        category: 'Первые блюда',
        items: [
            { id: '011', title: 'Мясные супы' },
            { id: '012', title: 'Овощные супы' },
            { id: '013', title: 'Бульоны' },
            { id: '014', title: 'Холодные супы' },
            { id: '015', title: 'Диетические супы' },
        ],
    },
    {
        id: '04',
        category: 'Вторые блюда',
        items: [
            { id: '016', title: 'Мясные' },
            { id: '017', title: 'Рыбные' },
            { id: '018', title: 'Овощные' },
            { id: '019', title: 'Из птицы' },
            { id: '020', title: 'Из грибов' },
            { id: '021', title: 'Из субпродуктов' },
            { id: '022', title: 'На пару' },
            { id: '023', title: 'Пельмени, вареники' },
            { id: '024', title: 'Мучные гарниры' },
            { id: '025', title: 'Овощные гарниры' },
            { id: '026', title: 'Пицца' },
            { id: '027', title: 'Суши' },
        ],
    },
    {
        id: '05',
        category: 'Десерты и выпечка',
        items: [
            { id: '028', title: 'Блины и оладьи' },
            { id: '029', title: 'Пироги и пончики' },
            { id: '030', title: 'Торты' },
            { id: '031', title: 'Рулеты' },
            { id: '032', title: 'Кексы и маффины' },
            { id: '033', title: 'Сырники и ватрушки' },
            { id: '034', title: 'Из слоеного теста' },
            { id: '035', title: 'Из заварного теста' },
            { id: '036', title: 'Из дрожжевого теста' },
            { id: '037', title: 'Булочки и сдоба' },
            { id: '038', title: 'Хлеб' },
            { id: '039', title: 'Тесто на пиццу' },
            { id: '040', title: 'Кремы' },
        ],
    },
    {
        id: '06',
        category: 'Блюда на гриле',
        items: [
            { id: '041', title: 'Говядина' },
            { id: '042', title: 'Свинина' },
            { id: '043', title: 'Птица' },
            { id: '044', title: 'Рыба' },
            { id: '045', title: 'Грибы' },
            { id: '046', title: 'Овощи' },
        ],
    },
    {
        id: '07',
        category: 'Веганская кухня',
        items: [
            { id: '047', title: 'Закуски' },
            { id: '048', title: 'Первые блюда' },
            { id: '049', title: 'Вторые блюда' },
            { id: '050', title: 'Гарниры' },
            { id: '051', title: 'Десерты' },
            { id: '052', title: 'Выпечка' },
            { id: '053', title: 'Сыроедческие блюда' },
            { id: '054', title: 'Напитки' },
        ],
    },
    {
        id: '08',
        category: 'Детские блюда',
        items: [
            { id: '047', title: 'Первые блюда' },
            { id: '047', title: 'Вторые блюда' },
            { id: '047', title: 'Гарниры' },
            { id: '047', title: 'Выпечка' },
            { id: '047', title: 'Без глютена' },
            { id: '047', title: 'Без сахара' },
            { id: '047', title: 'Без аллергенов' },
            { id: '047', title: 'Блюда для прикорма' },
        ],
    },
    {
        id: '09',
        category: 'Лечебное питание',
        items: [
            { id: '048', title: 'Детская диета' },
            { id: '049', title: 'Диета №1' },
            { id: '050', title: 'Диета №2' },
            { id: '051', title: 'Диета №3' },
            { id: '052', title: 'Диета №5' },
            { id: '053', title: 'Диета №6' },
            { id: '054', title: 'Диета №7' },
            { id: '055', title: 'Диета №8' },
            { id: '056', title: 'Диета №9' },
            { id: '057', title: 'Диета №10' },
            { id: '058', title: 'Диета №11' },
            { id: '059', title: 'Диета №12' },
            { id: '060', title: 'Диета №13' },
            { id: '061', title: 'Диета №14' },
            { id: '062', title: 'Без глютена' },
            { id: '063', title: 'Без аллергенов' },
        ],
    },
    {
        id: '10',
        category: 'Национальные блюда',
        items: [
            { id: '064', title: 'Американская кухня' },
            { id: '065', title: 'Армянская кухня' },
            { id: '066', title: 'Греческая кухня' },
            { id: '067', title: 'Грузинская кухня' },
            { id: '068', title: 'Итальянская кухня' },
            { id: '069', title: 'Испанская кухня' },
            { id: '070', title: 'Китайская кухня' },
            { id: '071', title: 'Мексиканская кухня' },
            { id: '072', title: 'Паназиатская кухня' },
            { id: '073', title: 'Русская кухня' },
            { id: '074', title: 'Турецкая кухня' },
            { id: '075', title: 'Французская кухня' },
            { id: '076', title: 'Шведская кухня' },
            { id: '077', title: 'Японская кухня' },
            { id: '078', title: 'Другая кухня' },
        ],
    },
    {
        id: '11',
        category: 'Соусы',
        items: [
            { id: '079', title: 'Соусы мясные' },
            { id: '080', title: 'Соусы сырные' },
            { id: '081', title: 'Маринады' },
        ],
    },
    {
        id: '12',
        category: 'Домашние заготовки',
        items: [
            { id: '082', title: 'Мясные заготовки' },
            { id: '083', title: 'Рыбные заготовки' },
            { id: '084', title: 'Из огурцов' },
            { id: '085', title: 'Из томатов' },
            { id: '086', title: 'Из грибов' },
            { id: '087', title: 'Овощные заготовки' },
            { id: '088', title: 'Салаты, икра' },
            { id: '089', title: 'Из фруктов и ягод' },
        ],
    },
    {
        id: '13',
        category: 'Напитки',
        items: [
            { id: '082', title: 'Соки и фреши' },
            { id: '082', title: 'Смузи' },
            { id: '082', title: 'Компоты' },
            { id: '082', title: 'Кисели' },
            { id: '082', title: 'Кофе' },
            { id: '082', title: 'Лечебный чай' },
            { id: '082', title: 'Квас' },
            { id: '082', title: 'Коктейли' },
            { id: '082', title: 'Алкогольные' },
        ],
    },
];
