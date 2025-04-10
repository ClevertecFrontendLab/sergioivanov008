import appetizersImg from '~/assets/icons/Appetizers.png';
import hildrensDishesImg from '~/assets/icons/ChildrensDishes.png';
import dessertsPastriesImg from '~/assets/icons/DessertsPastries.png';
import drinksImg from '~/assets/icons/Drinks.png';
import firstCoursesImg from '~/assets/icons/FirstCourses.png';
import grilledDishesImg from '~/assets/icons/GrilledDishes.png';
import healthyNutritionImg from '~/assets/icons/HealthyNutrition.png';
import mainCoursesImg from '~/assets/icons/MainCourses.png';
import nationalDishesImg from '~/assets/icons/NationalDishes.png';
import PreparationsImg from '~/assets/icons/Preparations.png';
import saladsImg from '~/assets/icons/Salads.png';
import saucesImg from '~/assets/icons/Sauces.png';
import veganCuisineImg from '~/assets/icons/VeganCuisine.png';
import avatarImg1 from '~/assets/images/avatar_image1.png';
import avatarImg2 from '~/assets/images/avatar_image2.png';
import avatarImg3 from '~/assets/images/avatar_image3.png';
import avatarImg4 from '~/assets/images/avatar_image4.png';
import recipe1Img from '~/assets/images/new_recipe_1.png';
import recipe2Img from '~/assets/images/new_recipe_2.png';
import recipe3Img from '~/assets/images/new_recipe_3.png';
import recipe4Img from '~/assets/images/new_recipe_4.png';
import recipe5Img from '~/assets/images/new_recipe_5.png';
import recipe6Img from '~/assets/images/new_recipe_6.png';
import recipe7Img from '~/assets/images/new_recipe_7.png';
import recipe8Img from '~/assets/images/new_recipe_8.png';
import tastyest101Img from '~/assets/images/tastyest_101.png';
import tastyest102Img from '~/assets/images/tastyest_102.png';
import tastyest103Img from '~/assets/images/tastyest_103.png';
import tastyest104Img from '~/assets/images/tastyest_104.png';
import tastyest105Img from '~/assets/images/tastyest_105.png';
import tastyest106Img from '~/assets/images/tastyest_106.png';
import tastyest107Img from '~/assets/images/tastyest_107.png';
import tastyest108Img from '~/assets/images/tastyest_108.png';
import vegan101Img from '~/assets/images/vegan_101.png';
import vegan102Img from '~/assets/images/vegan_102.png';
import vegan103Img from '~/assets/images/vegan_103.png';
import vegan104Img from '~/assets/images/vegan_104.png';
import vegan105Img from '~/assets/images/vegan_105.png';
import vegan106Img from '~/assets/images/vegan_106.png';
import vegan107Img from '~/assets/images/vegan_107.png';
import vegan108Img from '~/assets/images/vegan_108.png';
import {
    AvatarContentType,
    BlogsItemType,
    CategoryDbType,
    FooterMenuItemType,
    NavDataType,
    PageDbType,
    RecipeItemType,
} from '~/components/types';

export const AVATAR_DATA: AvatarContentType = {
    image: avatarImg1,
    name: 'Екатерина Константинопольская',
    nickName: '@bake_and_pie',
};

export const BTN_TEXT = {
    addRecipe: 'Записать рецепт',
    allSelection: 'Вся подборка',
    allAuthors: 'Все авторы',
    save: 'Сохранить',
    cook: 'Готовить',
    loadMore: 'Загрузить еще',
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
        isImage: true,
        image: avatarImg1,
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
        image: saladsImg,
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
        image: appetizersImg,
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
        image: firstCoursesImg,
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
        image: mainCoursesImg,
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
        category: 'Десерты, выпечка',
        image: dessertsPastriesImg,
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
        image: grilledDishesImg,
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
        image: veganCuisineImg,
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
        image: hildrensDishesImg,
        items: [
            { id: '055', title: 'Первые блюда' },
            { id: '056', title: 'Вторые блюда' },
            { id: '057', title: 'Гарниры' },
            { id: '058', title: 'Выпечка' },
            { id: '059', title: 'Без глютена' },
            { id: '060', title: 'Без сахара' },
            { id: '061', title: 'Без аллергенов' },
            { id: '062', title: 'Блюда для прикорма' },
        ],
    },
    {
        id: '09',
        category: 'Лечебное питание',
        image: healthyNutritionImg,
        items: [
            { id: '063', title: 'Детская диета' },
            { id: '064', title: 'Диета №1' },
            { id: '065', title: 'Диета №2' },
            { id: '066', title: 'Диета №3' },
            { id: '067', title: 'Диета №5' },
            { id: '068', title: 'Диета №6' },
            { id: '069', title: 'Диета №7' },
            { id: '070', title: 'Диета №8' },
            { id: '071', title: 'Диета №9' },
            { id: '072', title: 'Диета №10' },
            { id: '073', title: 'Диета №11' },
            { id: '074', title: 'Диета №12' },
            { id: '075', title: 'Диета №13' },
            { id: '076', title: 'Диета №14' },
            { id: '077', title: 'Без глютена' },
            { id: '078', title: 'Без аллергенов' },
        ],
    },
    {
        id: '10',
        category: 'Национальные',
        image: nationalDishesImg,
        items: [
            { id: '079', title: 'Американская кухня' },
            { id: '080', title: 'Армянская кухня' },
            { id: '081', title: 'Греческая кухня' },
            { id: '082', title: 'Грузинская кухня' },
            { id: '083', title: 'Итальянская кухня' },
            { id: '084', title: 'Испанская кухня' },
            { id: '085', title: 'Китайская кухня' },
            { id: '086', title: 'Мексиканская кухня' },
            { id: '087', title: 'Паназиатская кухня' },
            { id: '088', title: 'Русская кухня' },
            { id: '089', title: 'Турецкая кухня' },
            { id: '090', title: 'Французская кухня' },
            { id: '091', title: 'Шведская кухня' },
            { id: '092', title: 'Японская кухня' },
            { id: '093', title: 'Другая кухня' },
        ],
    },
    {
        id: '11',
        category: 'Соусы',
        image: saucesImg,
        items: [
            { id: '094', title: 'Соусы мясные' },
            { id: '095', title: 'Соусы сырные' },
            { id: '096', title: 'Маринады' },
        ],
    },
    {
        id: '12',
        category: 'Напитки',
        image: drinksImg,
        items: [
            { id: '097', title: 'Соки и фреши' },
            { id: '098', title: 'Смузи' },
            { id: '099', title: 'Компоты' },
            { id: '100', title: 'Кисели' },
            { id: '101', title: 'Кофе' },
            { id: '102', title: 'Лечебный чай' },
            { id: '103', title: 'Квас' },
            { id: '104', title: 'Коктейли' },
            { id: '105', title: 'Алкогольные' },
        ],
    },
    {
        id: '13',
        category: 'Заготовки',
        image: PreparationsImg,
        items: [
            { id: '106', title: 'Мясные заготовки' },
            { id: '107', title: 'Рыбные заготовки' },
            { id: '108', title: 'Из огурцов' },
            { id: '109', title: 'Из томатов' },
            { id: '110', title: 'Из грибов' },
            { id: '111', title: 'Овощные заготовки' },
            { id: '112', title: 'Салаты, икра' },
            { id: '113', title: 'Из фруктов и ягод' },
        ],
    },
];

export const CATEGORY_LIST = [
    'salaty',
    'zakuski',
    'pervieBluda',
    'vtorieBluda',
    'deserty',
    'gril',
    'vegan',
    'detskie',
    'lechebnoe',
    'nacional',
    'soucy',
    'napitki',
    'zagotovki',
];

export const CATEGORY_DB: CategoryDbType = {
    salaty: {
        id: '01',
        category: 'Салаты',
        image: saladsImg,
    },
    zakuski: {
        id: '02',
        category: 'Закуски',
        image: appetizersImg,
    },
    pervieBluda: {
        id: '03',
        category: 'Первые блюда',
        image: firstCoursesImg,
    },
    vtorieBluda: {
        id: '04',
        category: 'Вторые блюда',
        image: mainCoursesImg,
    },
    deserty: {
        id: '05',
        category: 'Десерты, выпечка',
        image: dessertsPastriesImg,
    },
    gril: {
        id: '06',
        category: 'Блюда на гриле',
        image: grilledDishesImg,
    },
    vegan: {
        id: '07',
        category: 'Веганская кухня',
        image: veganCuisineImg,
    },
    detskie: {
        id: '08',
        category: 'Детские блюда',
        image: hildrensDishesImg,
    },
    lechebnoe: {
        id: '09',
        category: 'Лечебное питание',
        image: healthyNutritionImg,
    },
    nacional: {
        id: '10',
        category: 'Национальные',
        image: nationalDishesImg,
    },
    soucy: {
        id: '11',
        category: 'Соусы',
        image: saucesImg,
    },
    napitki: {
        id: '12',
        category: 'Напитки',
        image: drinksImg,
    },
    zagotovki: {
        id: '13',
        category: 'Заготовки',
        image: PreparationsImg,
    },
};

export const NEW_RECIPES_DATA: RecipeItemType[] = [
    {
        id: '01',
        image: recipe1Img,
        title: 'Солянка с грибами',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeType: 'pervieBluda',
        recipeProps: [{ id: '01', type: 'pin', value: '1' }],
    },
    {
        id: '02',
        image: recipe2Img,
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и ...',
        badgeType: 'vegan',
        recipeProps: [
            { id: '01', type: 'pin', value: '2' },
            { id: '02', type: 'like', value: '1' },
        ],
    },
    {
        id: '03',
        image: recipe3Img,
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        badgeType: 'deserty',
        recipeProps: [{ id: '01', type: 'like', value: '1' }],
    },
    {
        id: '04',
        image: recipe4Img,
        title: 'Салат "Здоровье"',
        description:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) ...',
        badgeType: 'salaty',
    },
    {
        id: '05',
        image: recipe3Img,
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        badgeType: 'deserty',
        recipeProps: [{ id: '01', type: 'like', value: '1' }],
    },
    {
        id: '06',
        image: recipe3Img,
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        badgeType: 'deserty',
        recipeProps: [{ id: '01', type: 'like', value: '1' }],
    },
    {
        id: '07',
        image: recipe3Img,
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        badgeType: 'deserty',
        recipeProps: [{ id: '01', type: 'like', value: '1' }],
    },
    {
        id: '08',
        image: recipe3Img,
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        badgeType: 'deserty',
        recipeProps: [{ id: '01', type: 'like', value: '1' }],
    },
    {
        id: '09',
        image: recipe3Img,
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        badgeType: 'deserty',
        recipeProps: [{ id: '01', type: 'like', value: '1' }],
    },
    {
        id: '10',
        image: recipe3Img,
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        badgeType: 'deserty',
        recipeProps: [{ id: '01', type: 'like', value: '1' }],
    },
];

export const TITLES = {
    newRecipes: 'Новые рецепты',
    tastyest: 'Самое сочное ',
    blogs: 'Кулинарные блоги',
    vegan: 'Веганская кухня',
};

export const TASTYEST_DATA: RecipeItemType[] = [
    {
        id: '01',
        image: recipe5Img,
        title: 'Кнели со спагетти',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeType: 'vtorieBluda',
        recipeProps: [
            { id: '01', type: 'pin', value: '85' },
            { id: '02', type: 'like', value: '152' },
        ],
    },
    {
        id: '02',
        image: recipe6Img,
        title: 'Пряная ветчина по итальянски',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeType: 'vtorieBluda',
        recipeProps: [
            { id: '01', type: 'pin', value: '159' },
            { id: '02', type: 'like', value: '257' },
        ],
        recomendation: {
            id: '01',
            image: avatarImg2,
            name: 'Елена Высоцкая',
        },
    },
    {
        id: '03',
        image: recipe7Img,
        title: 'Лапша с курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeType: 'vtorieBluda',
        recipeProps: [
            { id: '01', type: 'pin', value: '258' },
            { id: '02', type: 'like', value: '342' },
        ],
        recomendation: {
            id: '02',
            image: avatarImg3,
            name: 'Alex Cook',
        },
    },
    {
        id: '04',
        image: recipe8Img,
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeType: 'nacional',
        recipeProps: [
            { id: '01', type: 'pin', value: '124' },
            { id: '02', type: 'like', value: '324' },
        ],
    },
];

export const BLOGS_DATA: BlogsItemType[] = [
    {
        id: '01',
        avatarData: {
            image: avatarImg2,
            name: 'Елена Высоцкая',
            nickName: '@elenapovar',
        },
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        id: '02',
        avatarData: {
            image: avatarImg3,
            name: 'Alex Cook',
            nickName: '@funtasticooking',
        },
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        id: '03',
        avatarData: {
            image: avatarImg4,
            name: 'Екатерина Константинопольская',
            nickName: '@bake_and_pie',
        },
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
];

export const TEXT = {
    vegan: 'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.',
    recommend: 'рекомендует',
    searchPlaceholder: 'Название или ингредиент...',
    switchPlaceholder: 'Исключить мои аллергены',
};

export const VEGAN_PIN_DATA: RecipeItemType[] = [
    {
        id: '01',
        title: 'Домашние сырные палочки',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeType: 'detskie',
    },
    {
        id: '02',
        title: 'Панкейки',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeType: 'nacional',
    },
    {
        id: '03',
        title: 'Воздушное банановое печенье на сковороде',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeType: 'vegan',
    },
];

export const TASTYEST_PIN_DATA: RecipeItemType[] = [
    {
        id: '01',
        title: 'Стейк для вегетарианцев',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeType: 'vtorieBluda',
    },
    {
        id: '02',
        title: 'Котлеты из гречки и фасоли',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeType: 'vtorieBluda',
    },
    {
        id: '03',
        title: 'Сырный суп с лапшой и брокколи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeType: 'pervieBluda',
    },
];

export const PAGE_DB: PageDbType = {
    home: {
        id: '100',
        title: 'Приятного аппетита!',
        desc: '',
    },
    tastyest: {
        id: '101',
        title: 'Самое сочное',
        desc: '',
    },
    vegan: {
        id: '07',
        title: 'Веганская кухня',
        desc: 'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.',
        recipes: [
            {
                id: '01',
                title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
                description:
                    'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
                badgeType: 'vtorieBluda',
                recipeProps: [
                    { id: '01', type: 'pin', value: '1' },
                    { id: '02', type: 'like', value: '1' },
                ],
            },
            {
                id: '02',
                title: 'Капустные котлеты',
                description:
                    'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
                badgeType: 'vtorieBluda',
                recipeProps: [
                    { id: '01', type: 'pin', value: '2' },
                    { id: '02', type: 'like', value: '1' },
                ],
            },
        ],
        pinRecipes: [
            {
                id: '01',
                title: 'Стейк для вегетарианцев',
                description:
                    'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
                badgeType: 'vtorieBluda',
            },
            {
                id: '02',
                title: 'Котлеты из гречки и фасоли',
                description:
                    'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
                badgeType: 'vtorieBluda',
            },
            {
                id: '03',
                title: 'Сырный суп с лапшой и брокколи',
                description:
                    'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
                badgeType: 'pervieBluda',
            },
        ],
    },
    salaty: {
        id: '01',
        title: 'Салаты',
        desc: '',
    },
    zakuski: {
        id: '02',
        title: 'Закуски',
        desc: '',
    },
    pervieBluda: {
        id: '03',
        title: 'Первые блюда',
        desc: '',
    },
    vtorieBluda: {
        id: '04',
        title: 'Вторые блюда',
        desc: '',
    },
    deserty: {
        id: '05',
        title: 'Десерты, выпечка',
        desc: 'Без них невозможно представить себе ни современную, ни традиционную  кулинарию. Пироги и печенья, блины, пончики, вареники и, конечно, хлеб - рецепты изделий из теста многообразны и невероятно популярны.',
        recipes: [
            {
                id: '01',
                title: 'Бананово-молочное желе',
                description:
                    'Молочное желе – это просто, вкусно и полезно, ведь для его приготовления в качестве основы используется молоко.',
                badgeType: 'detskie',
                recipeProps: [
                    { id: '01', type: 'pin', value: '1' },
                    { id: '02', type: 'like', value: '1' },
                ],
            },
            {
                id: '02',
                title: 'Нежный сливочно-сырный крем для кексов',
                description:
                    'Сливочно-сырным кремом можно украсить кексы, либо другую выпечку, а также этим кремом можно наполнить заварные пирожные.',
                badgeType: 'detskie',
                recipeProps: [
                    { id: '01', type: 'pin', value: '2' },
                    { id: '02', type: 'like', value: '1' },
                ],
            },
        ],
        pinRecipes: [
            {
                id: '01',
                title: 'Домашние сырные палочки',
                description:
                    'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
                badgeType: 'detskie',
            },
            {
                id: '02',
                title: 'Панкейки',
                description:
                    'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
                badgeType: 'nacional',
            },
            {
                id: '03',
                title: 'Воздушное банановое печенье на сковороде',
                description:
                    'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
                badgeType: 'vegan',
            },
        ],
    },
    gril: {
        id: '06',
        title: 'Блюда на гриле',
        desc: '',
    },
    detskie: {
        id: '08',
        title: 'Детские блюда',
        desc: '',
    },
    lechebnoe: {
        id: '09',
        title: 'Лечебное питание',
        desc: '',
    },
    nacional: {
        id: '10',
        title: 'Национальные',
        desc: '',
    },
    soucy: {
        id: '11',
        title: 'Соусы',
        desc: '',
    },
    napitki: {
        id: '12',
        title: 'Напитки',
        desc: '',
    },
    zagotovki: {
        id: '13',
        title: 'Заготовки',
        desc: '',
    },
};

export const TASTYEST_DATA_FULL: RecipeItemType[] = [
    {
        id: '01',
        image: tastyest101Img,
        title: 'Лапша с курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeType: 'vtorieBluda',
        recipeProps: [
            { id: '01', type: 'pin', value: '258' },
            { id: '02', type: 'like', value: '342' },
        ],
        recomendation: {
            id: '02',
            image: avatarImg3,
            name: 'Alex Cook',
        },
    },
    {
        id: '02',
        image: tastyest102Img,
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeType: 'nacional',
        recipeProps: [
            { id: '01', type: 'pin', value: '124' },
            { id: '02', type: 'like', value: '324' },
        ],
    },
    {
        id: '03',
        image: tastyest103Img,
        title: 'Пряная ветчина по итальянски',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeType: 'vtorieBluda',
        recipeProps: [
            { id: '01', type: 'pin', value: '159' },
            { id: '02', type: 'like', value: '257' },
        ],
        recomendation: {
            id: '01',
            image: avatarImg2,
            name: 'Елена Высоцкая',
        },
    },
    {
        id: '04',
        image: tastyest104Img,
        title: 'Кнели со спагетти',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeType: 'vtorieBluda',
        recipeProps: [
            { id: '01', type: 'pin', value: '124' },
            { id: '02', type: 'like', value: '231' },
        ],
    },
    {
        id: '05',
        image: tastyest105Img,
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        badgeType: 'vtorieBluda',
        recipeProps: [
            { id: '01', type: 'pin', value: '120' },
            { id: '02', type: 'like', value: '180' },
        ],
    },
    {
        id: '06',
        image: tastyest106Img,
        title: 'Картофельные рулетики с грибами',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
        badgeType: 'detskie',
        recipeProps: [
            { id: '01', type: 'pin', value: '85' },
            { id: '02', type: 'like', value: '180' },
        ],
    },
    {
        id: '07',
        image: tastyest107Img,
        title: 'Овощная лазанья из лаваша',
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
        badgeType: 'gril',
        recipeProps: [
            { id: '01', type: 'pin', value: '85' },
            { id: '02', type: 'like', value: '182' },
        ],
    },
    {
        id: '08',
        image: tastyest108Img,
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        badgeType: 'vtorieBluda',
        recipeProps: [
            { id: '01', type: 'pin', value: '85' },
            { id: '02', type: 'like', value: '150' },
        ],
    },
];

export const VEGAN_DATA_FULL: RecipeItemType[] = [
    {
        id: '01',
        image: vegan101Img,
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        badgeType: 'nacional',
        recipeProps: [
            { id: '01', type: 'pin', value: '85' },
            { id: '02', type: 'like', value: '152' },
        ],
    },
    {
        id: '02',
        image: vegan102Img,
        title: 'Картофельные рулетики с грибами',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
        badgeType: 'detskie',
        recipeProps: [
            { id: '01', type: 'pin', value: '124' },
            { id: '02', type: 'like', value: '324' },
        ],
    },
    {
        id: '03',
        image: vegan103Img,
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeType: 'nacional',
        recipeProps: [
            { id: '01', type: 'pin', value: '124' },
            { id: '02', type: 'like', value: '324' },
        ],
    },
    {
        id: '04',
        image: vegan104Img,
        title: 'Овощная лазанья из лаваша',
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
        badgeType: 'gril',
        recipeProps: [
            { id: '01', type: 'pin', value: '85' },
            { id: '02', type: 'like', value: '152' },
        ],
    },
    {
        id: '05',
        image: vegan105Img,
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        badgeType: 'vtorieBluda',
        recipeProps: [
            { id: '01', type: 'pin', value: '85' },
            { id: '02', type: 'like', value: '152' },
        ],
    },
    {
        id: '06',
        image: vegan106Img,
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        badgeType: 'vtorieBluda',
        recipeProps: [
            { id: '01', type: 'pin', value: '85' },
            { id: '02', type: 'like', value: '152' },
        ],
    },
    {
        id: '07',
        image: vegan107Img,
        title: 'Чесночная картошка',
        description:
            'Такая картошечка украсит любой семейный обед! Все будут в полном  восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
        badgeType: 'nacional',
        recipeProps: [
            { id: '01', type: 'pin', value: '124' },
            { id: '02', type: 'like', value: '324' },
        ],
    },
    {
        id: '08',
        image: vegan108Img,
        title: 'Пури',
        description:
            'Пури - это индийские жареные лепешки, которые готовятся из пресного  теста. Рецепт лепешек пури требует самых доступных ингредиентов, и  времени на приготовление хрустящих лепешек уйдет мало.',
        badgeType: 'nacional',
        recipeProps: [
            { id: '01', type: 'pin', value: '124' },
            { id: '02', type: 'like', value: '324' },
        ],
    },
];
