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
import allRecipes7 from '~/assets/images/all_recipes_7.png';
import avatarAuthor1Img from '~/assets/images/avatar_author_1.png';
import avatarImg1 from '~/assets/images/avatar_image1.png';
import avatarImg2 from '~/assets/images/avatar_image2.png';
import avatarImg3 from '~/assets/images/avatar_image3.png';
import avatarImg4 from '~/assets/images/avatar_image4.png';
import juiciest101Img from '~/assets/images/juiciest_101.png';
import juiciest102Img from '~/assets/images/juiciest_102.png';
import juiciest103Img from '~/assets/images/juiciest_103.png';
import juiciest104Img from '~/assets/images/juiciest_104.png';
import juiciest105Img from '~/assets/images/juiciest_105.png';
import juiciest106Img from '~/assets/images/juiciest_106.png';
import juiciest107Img from '~/assets/images/juiciest_107.png';
import juiciest108Img from '~/assets/images/juiciest_108.png';
import recipe1Img from '~/assets/images/new_recipe_1.png';
import recipe2Img from '~/assets/images/new_recipe_2.png';
import recipe3Img from '~/assets/images/new_recipe_3.png';
import recipe4Img from '~/assets/images/new_recipe_4.png';
import recipe5Img from '~/assets/images/new_recipe_5.png';
import recipe6Img from '~/assets/images/new_recipe_6.png';
import recipe7Img from '~/assets/images/new_recipe_7.png';
import recipe8Img from '~/assets/images/new_recipe_8.png';
import step1Img from '~/assets/images/step_1.png';
import step2Img from '~/assets/images/step_2.png';
import step3Img from '~/assets/images/step_3.png';
import step4Img from '~/assets/images/step_4.png';
import step5Img from '~/assets/images/step_5.png';
import step6Img from '~/assets/images/step_6.png';
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
    FilterCustomItemType,
    FilterCustomType,
    FooterMenuItemType,
    NavDataType,
    PageDbType,
    RecipeItemFullType,
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
    saveToBookmarks: 'Сохранить в закладки',
    rateRecipe: 'Оценить рецепт',
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
        categoryView: 'Салаты',
        categoryNav: 'salads',
        testId: 'salads',
        image: saladsImg,
        items: [
            { id: '001', title: 'Мясные салаты', subcategoryNav: 'meat-salads' },
            { id: '002', title: 'Рыбные салаты', subcategoryNav: 'fish-salads' },
            { id: '003', title: 'Овощные салаты', subcategoryNav: 'vegetables-salads' },
            { id: '004', title: 'Теплые салаты', subcategoryNav: 'warm-salads' },
        ],
    },
    {
        id: '02',
        categoryView: 'Закуски',
        categoryNav: 'snacks',
        testId: 'snacks',
        image: appetizersImg,
        items: [
            { id: '005', title: 'Мясные закуски', subcategoryNav: 'meat-snacks' },
            { id: '006', title: 'Рыбные закуски', subcategoryNav: 'fish-snacks' },
            { id: '007', title: 'Овощные закуски', subcategoryNav: 'vegetables-snacks' },
            { id: '008', title: 'Теплые закуски', subcategoryNav: 'warm-snacks' },
            { id: '009', title: 'Бутерброды', subcategoryNav: 'buterbrody' },
            { id: '010', title: 'Фастфуд', subcategoryNav: 'fastfood' },
        ],
    },
    {
        id: '03',
        categoryView: 'Первые блюда',
        categoryNav: 'perviebluda',
        testId: 'perviebluda',
        image: firstCoursesImg,
        items: [
            { id: '011', title: 'Мясные супы', subcategoryNav: 'meat-soups' },
            { id: '012', title: 'Овощные супы', subcategoryNav: 'vegetables-soups' },
            { id: '013', title: 'Бульоны', subcategoryNav: 'buliony' },
            { id: '014', title: 'Холодные супы', subcategoryNav: 'cold-soups' },
            { id: '015', title: 'Диетические супы', subcategoryNav: 'dietic-soups' },
        ],
    },
    {
        id: '04',
        categoryView: 'Вторые блюда',
        categoryNav: 'second-dish',
        testId: 'second-dish',
        image: mainCoursesImg,
        items: [
            { id: '016', title: 'Мясные', subcategoryNav: 'meat' },
            { id: '017', title: 'Рыбные', subcategoryNav: 'fish' },
            { id: '018', title: 'Овощные', subcategoryNav: 'vegetables' },
            { id: '019', title: 'Из птицы', subcategoryNav: 'poultry-dish' },
            { id: '020', title: 'Из грибов', subcategoryNav: 'iz-gribov' },
            { id: '021', title: 'Из субпродуктов', subcategoryNav: 'iz-subproductov' },
            { id: '022', title: 'На пару', subcategoryNav: 'na-paru' },
            { id: '023', title: 'Пельмени, вареники', subcategoryNav: 'pelmeni-vareniki' },
            { id: '024', title: 'Мучные гарниры', subcategoryNav: 'muchnye-side-dishes' },
            { id: '025', title: 'Овощные гарниры', subcategoryNav: 'vegetables-side-dishes' },
            { id: '026', title: 'Пицца', subcategoryNav: 'pizza' },
            { id: '027', title: 'Суши', subcategoryNav: 'sushi' },
        ],
    },
    {
        id: '05',
        categoryView: 'Десерты, выпечка',
        categoryNav: 'deserty',
        testId: 'deserty',
        image: dessertsPastriesImg,
        items: [
            { id: '028', title: 'Блины и оладьи', subcategoryNav: 'bliny-oladii' },
            { id: '029', title: 'Пироги и пончики', subcategoryNav: 'pirogi-ponchiki' },
            { id: '030', title: 'Торты', subcategoryNav: 'torty' },
            { id: '031', title: 'Рулеты', subcategoryNav: 'rulety' },
            { id: '032', title: 'Кексы и маффины', subcategoryNav: 'keksy-maffiny' },
            { id: '033', title: 'Сырники и ватрушки', subcategoryNav: 'syrniki-vatrushki' },
            { id: '034', title: 'Из слоеного теста', subcategoryNav: 'iz-sloenogo-testa' },
            { id: '035', title: 'Из заварного теста', subcategoryNav: 'iz-zavarnogo-testa' },
            { id: '036', title: 'Из дрожжевого теста', subcategoryNav: 'iz-droggevogo-testa' },
            { id: '037', title: 'Булочки и сдоба', subcategoryNav: 'bulochki-sdoba' },
            { id: '038', title: 'Хлеб', subcategoryNav: 'hleb' },
            { id: '039', title: 'Тесто на пиццу', subcategoryNav: 'testo-na-pizzu' },
            { id: '040', title: 'Кремы', subcategoryNav: 'kremy' },
        ],
    },
    {
        id: '06',
        categoryView: 'Блюда на гриле',
        categoryNav: 'gril',
        testId: 'gril',
        image: grilledDishesImg,
        items: [
            { id: '041', title: 'Говядина', subcategoryNav: 'goviadina' },
            { id: '042', title: 'Свинина', subcategoryNav: 'svinina' },
            { id: '043', title: 'Птица', subcategoryNav: 'poultry-dish' },
            { id: '044', title: 'Рыба', subcategoryNav: 'fish' },
            { id: '045', title: 'Грибы', subcategoryNav: 'griby' },
            { id: '046', title: 'Овощи', subcategoryNav: 'vegetables' },
        ],
    },
    {
        id: '07',
        categoryView: 'Веганская кухня',
        categoryNav: 'vegan',
        testId: 'vegan-cuisine',
        image: veganCuisineImg,
        items: [
            { id: '047', title: 'Закуски', subcategoryNav: 'snacks' },
            { id: '048', title: 'Первые блюда', subcategoryNav: 'pervye-bluda' },
            { id: '049', title: 'Вторые блюда', subcategoryNav: 'second-dish' },
            { id: '050', title: 'Гарниры', subcategoryNav: 'side-dishes' },
            { id: '051', title: 'Десерты', subcategoryNav: 'deserty' },
            { id: '052', title: 'Выпечка', subcategoryNav: 'vypechka' },
            { id: '053', title: 'Сыроедческие блюда', subcategoryNav: 'syroednye-bluda' },
            { id: '054', title: 'Напитки', subcategoryNav: 'napitki' },
        ],
    },
    {
        id: '08',
        categoryView: 'Детские блюда',
        categoryNav: 'detskie',
        testId: 'detskie',
        image: hildrensDishesImg,
        items: [
            { id: '055', title: 'Первые блюда', subcategoryNav: 'pervye-bluda' },
            { id: '056', title: 'Вторые блюда', subcategoryNav: 'second-dish' },
            { id: '057', title: 'Гарниры', subcategoryNav: 'side-dishes' },
            { id: '058', title: 'Выпечка', subcategoryNav: 'vypechka' },
            { id: '059', title: 'Без глютена', subcategoryNav: 'bez-glutena' },
            { id: '060', title: 'Без сахара', subcategoryNav: 'bez-sahara' },
            { id: '061', title: 'Без аллергенов', subcategoryNav: 'bez-allergenov' },
            { id: '062', title: 'Блюда для прикорма', subcategoryNav: 'bluda-dla-prikorma' },
        ],
    },
    {
        id: '09',
        categoryView: 'Лечебное питание',
        categoryNav: 'lechebnoe',
        testId: 'lechebnoe',
        image: healthyNutritionImg,
        items: [
            { id: '063', title: 'Детская диета', subcategoryNav: 'detskaja-dieta' },
            { id: '064', title: 'Диета №1', subcategoryNav: 'dieta-1' },
            { id: '065', title: 'Диета №2', subcategoryNav: 'dieta-2' },
            { id: '066', title: 'Диета №3', subcategoryNav: 'dieta-3' },
            { id: '067', title: 'Диета №5', subcategoryNav: 'dieta-5' },
            { id: '068', title: 'Диета №6', subcategoryNav: 'dieta-6' },
            { id: '069', title: 'Диета №7', subcategoryNav: 'dieta-7' },
            { id: '070', title: 'Диета №8', subcategoryNav: 'dieta-8' },
            { id: '071', title: 'Диета №9', subcategoryNav: 'dieta-9' },
            { id: '072', title: 'Диета №10', subcategoryNav: 'dieta-10' },
            { id: '073', title: 'Диета №11', subcategoryNav: 'dieta-11' },
            { id: '074', title: 'Диета №12', subcategoryNav: 'dieta-12' },
            { id: '075', title: 'Диета №13', subcategoryNav: 'dieta-13' },
            { id: '076', title: 'Диета №14', subcategoryNav: 'dieta-14' },
            { id: '077', title: 'Без глютена', subcategoryNav: 'bez-glutena' },
            { id: '078', title: 'Без аллергенов', subcategoryNav: 'bez-allergenov' },
        ],
    },
    {
        id: '10',
        categoryView: 'Национальные',
        categoryNav: 'nacional',
        testId: 'nacional',
        image: nationalDishesImg,
        items: [
            { id: '079', title: 'Американская кухня', subcategoryNav: 'american' },
            { id: '080', title: 'Армянская кухня', subcategoryNav: 'armian' },
            { id: '081', title: 'Греческая кухня', subcategoryNav: 'greece' },
            { id: '082', title: 'Грузинская кухня', subcategoryNav: 'georgia' },
            { id: '083', title: 'Итальянская кухня', subcategoryNav: 'italian' },
            { id: '084', title: 'Испанская кухня', subcategoryNav: 'spain' },
            { id: '085', title: 'Китайская кухня', subcategoryNav: 'china' },
            { id: '086', title: 'Мексиканская кухня', subcategoryNav: 'mexican' },
            { id: '087', title: 'Паназиатская кухня', subcategoryNav: 'panasia' },
            { id: '088', title: 'Русская кухня', subcategoryNav: 'russian' },
            { id: '089', title: 'Турецкая кухня', subcategoryNav: 'turkish' },
            { id: '090', title: 'Французская кухня', subcategoryNav: 'french' },
            { id: '091', title: 'Шведская кухня', subcategoryNav: 'sweden' },
            { id: '092', title: 'Японская кухня', subcategoryNav: 'japan' },
            { id: '093', title: 'Другая кухня', subcategoryNav: 'other' },
        ],
    },
    {
        id: '11',
        categoryView: 'Соусы',
        categoryNav: 'soucy',
        testId: 'soucy',
        image: saucesImg,
        items: [
            { id: '094', title: 'Соусы мясные', subcategoryNav: 'meat-soucy' },
            { id: '095', title: 'Соусы сырные', subcategoryNav: 'cheese-soucy' },
            { id: '096', title: 'Маринады', subcategoryNav: 'marinady' },
        ],
    },
    {
        id: '12',
        categoryView: 'Напитки',
        categoryNav: 'napitki',
        testId: 'napitki',
        image: drinksImg,
        items: [
            { id: '097', title: 'Соки и фреши', subcategoryNav: 'soki-freshi' },
            { id: '098', title: 'Смузи', subcategoryNav: 'smuzi' },
            { id: '099', title: 'Компоты', subcategoryNav: 'kompoty' },
            { id: '100', title: 'Кисели', subcategoryNav: 'kiseli' },
            { id: '101', title: 'Кофе', subcategoryNav: 'coffee' },
            { id: '102', title: 'Лечебный чай', subcategoryNav: 'medical-tea' },
            { id: '103', title: 'Квас', subcategoryNav: 'kvas' },
            { id: '104', title: 'Коктейли', subcategoryNav: 'cocktails' },
            { id: '105', title: 'Алкогольные', subcategoryNav: 'alcohol' },
        ],
    },
    {
        id: '13',
        categoryView: 'Заготовки',
        categoryNav: 'zagotovki',
        testId: 'zagotovki',
        image: PreparationsImg,
        items: [
            { id: '106', title: 'Мясные заготовки', subcategoryNav: 'meat-zagotovki' },
            { id: '107', title: 'Рыбные заготовки', subcategoryNav: 'fish-zagotovki' },
            { id: '108', title: 'Из огурцов', subcategoryNav: 'iz-ogurcov' },
            { id: '109', title: 'Из томатов', subcategoryNav: 'iz-tomatov' },
            { id: '110', title: 'Из грибов', subcategoryNav: 'iz-gribov' },
            { id: '111', title: 'Овощные заготовки', subcategoryNav: 'vegetables-zagotovki' },
            { id: '112', title: 'Салаты, икра', subcategoryNav: 'salads-ikra' },
            { id: '113', title: 'Из фруктов и ягод', subcategoryNav: 'iz-fructov-jagod' },
        ],
    },
];

export const CATEGORY_LIST = [
    'salads',
    'snacks',
    'perviebluda',
    'second-dish',
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

export const TITLES = {
    newRecipes: 'Новые рецепты',
    juiciest: 'Самое сочное ',
    blogs: 'Кулинарные блоги',
};

export const JUICIEST_DATA: RecipeItemFullType[] = [
    {
        id: '01',
        image: recipe5Img,
        title: 'Кнели со спагетти',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: ['second-dish'],
        subcategory: ['snacks', 'vegetables'],
        bookmarks: 85,
        likes: 152,
        portions: 2,
        nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
        ingredients: [
            { title: 'картошка', count: '3', measureUnit: 'шт.' },
            { title: 'грибы', count: '200', measureUnit: 'г' },
            { title: 'мука', count: '100', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        time: '25 минут',
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: 'url',
            },
        ],
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
    {
        id: '02',
        image: recipe6Img,
        title: 'Пряная ветчина по итальянски',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: ['second-dish'],
        subcategory: ['snacks', 'vegetables'],
        bookmarks: 159,
        likes: 257,
        recomendation: {
            id: '01',
            image: avatarImg2,
            name: 'Елена Высоцкая',
        },
        portions: 2,
        nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
        ingredients: [
            { title: 'картошка', count: '3', measureUnit: 'шт.' },
            { title: 'грибы', count: '200', measureUnit: 'г' },
            { title: 'мука', count: '100', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        time: '25 минут',
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: 'url',
            },
        ],
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
    {
        id: '03',
        image: recipe7Img,
        title: 'Лапша с курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: ['second-dish'],
        subcategory: ['snacks', 'vegetables'],
        bookmarks: 258,
        likes: 342,
        recomendation: {
            id: '02',
            image: avatarImg3,
            name: 'Alex Cook',
        },
        portions: 2,
        nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
        ingredients: [
            { title: 'картошка', count: '3', measureUnit: 'шт.' },
            { title: 'грибы', count: '200', measureUnit: 'г' },
            { title: 'мука', count: '100', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        time: '25 минут',
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: 'url',
            },
        ],
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
    {
        id: '04',
        image: recipe8Img,
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: ['nacional'],
        subcategory: ['snacks', 'vegetables'],
        bookmarks: 124,
        likes: 324,
        portions: 2,
        nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
        ingredients: [
            { title: 'картошка', count: '3', measureUnit: 'шт.' },
            { title: 'грибы', count: '200', measureUnit: 'г' },
            { title: 'мука', count: '100', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        time: '25 минут',
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: 'url',
            },
        ],
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
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
    recommend: 'рекомендует',
    searchPlaceholder: 'Название или ингредиент...',
    switchPlaceholder: 'Исключить аллергены',
    mainPage: 'Главная',
    allergenPlaceholder: 'Выберите из списка...',
    inputAllergenPlaceholder: 'Другой аллерген',
    filterTitle: 'Фильтр',
};

export const PAGE_DB: PageDbType = {
    home: {
        id: '100',
        title: 'Приятного аппетита!',
        desc: '',
    },
    juiciest: {
        id: '101',
        title: 'Самое сочное',
        desc: '',
    },
    filtered: {
        id: '102',
        title: '',
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
                category: ['second-dish'],
                subcategory: ['snacks', 'vegetables'],
                bookmarks: 1,
                likes: 1,
                portions: 2,
                nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
                ingredients: [
                    { title: 'картошка', count: '3', measureUnit: 'шт.' },
                    { title: 'грибы', count: '200', measureUnit: 'г' },
                    { title: 'мука', count: '100', measureUnit: 'г' },
                    { title: 'специи', count: '0', measureUnit: 'по вкусу' },
                ],
                time: '25 минут',
                steps: [
                    {
                        stepNumber: 1,
                        description: 'Обжарить овощи на гриле.',
                        image: 'url',
                    },
                    {
                        stepNumber: 2,
                        description: 'Смешать с заправкой и подавать.',
                        image: 'url',
                    },
                ],
                author: {
                    image: avatarAuthor1Img,
                    firstName: 'Сергей',
                    lastName: 'Разумов',
                    nickName: '@serge25',
                    subscribers: 125,
                },
            },
            {
                id: '02',
                title: 'Капустные котлеты',
                description:
                    'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
                category: ['second-dish'],
                subcategory: ['snacks', 'vegetables'],
                bookmarks: 2,
                likes: 1,
                portions: 2,
                nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
                ingredients: [
                    { title: 'картошка', count: '3', measureUnit: 'шт.' },
                    { title: 'грибы', count: '200', measureUnit: 'г' },
                    { title: 'мука', count: '100', measureUnit: 'г' },
                    { title: 'специи', count: '0', measureUnit: 'по вкусу' },
                ],
                time: '25 минут',
                steps: [
                    {
                        stepNumber: 1,
                        description: 'Обжарить овощи на гриле.',
                        image: 'url',
                    },
                    {
                        stepNumber: 2,
                        description: 'Смешать с заправкой и подавать.',
                        image: 'url',
                    },
                ],
                author: {
                    image: avatarAuthor1Img,
                    firstName: 'Сергей',
                    lastName: 'Разумов',
                    nickName: '@serge25',
                    subscribers: 125,
                },
            },
        ],
        pinRecipes: [
            {
                id: '01',
                title: 'Стейк для вегетарианцев',
                description:
                    'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
                category: ['second-dish'],
                subcategory: ['snacks', 'vegetables'],
                portions: 2,
                nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
                ingredients: [
                    { title: 'картошка', count: '3', measureUnit: 'шт.' },
                    { title: 'грибы', count: '200', measureUnit: 'г' },
                    { title: 'мука', count: '100', measureUnit: 'г' },
                    { title: 'специи', count: '0', measureUnit: 'по вкусу' },
                ],
                time: '25 минут',
                steps: [
                    {
                        stepNumber: 1,
                        description: 'Обжарить овощи на гриле.',
                        image: 'url',
                    },
                    {
                        stepNumber: 2,
                        description: 'Смешать с заправкой и подавать.',
                        image: 'url',
                    },
                ],
                author: {
                    image: avatarAuthor1Img,
                    firstName: 'Сергей',
                    lastName: 'Разумов',
                    nickName: '@serge25',
                    subscribers: 125,
                },
            },
            {
                id: '02',
                title: 'Котлеты из гречки и фасоли',
                description:
                    'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
                category: ['second-dish'],
                subcategory: ['snacks', 'vegetables'],
                portions: 2,
                nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
                ingredients: [
                    { title: 'картошка', count: '3', measureUnit: 'шт.' },
                    { title: 'грибы', count: '200', measureUnit: 'г' },
                    { title: 'мука', count: '100', measureUnit: 'г' },
                    { title: 'специи', count: '0', measureUnit: 'по вкусу' },
                ],
                time: '25 минут',
                steps: [
                    {
                        stepNumber: 1,
                        description: 'Обжарить овощи на гриле.',
                        image: 'url',
                    },
                    {
                        stepNumber: 2,
                        description: 'Смешать с заправкой и подавать.',
                        image: 'url',
                    },
                ],
                author: {
                    image: avatarAuthor1Img,
                    firstName: 'Сергей',
                    lastName: 'Разумов',
                    nickName: '@serge25',
                    subscribers: 125,
                },
            },
            {
                id: '03',
                title: 'Сырный суп с лапшой и брокколи',
                description:
                    'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
                category: ['perviebluda'],
                subcategory: ['snacks', 'vegetables'],
                portions: 2,
                nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
                ingredients: [
                    { title: 'картошка', count: '3', measureUnit: 'шт.' },
                    { title: 'грибы', count: '200', measureUnit: 'г' },
                    { title: 'мука', count: '100', measureUnit: 'г' },
                    { title: 'специи', count: '0', measureUnit: 'по вкусу' },
                ],
                time: '25 минут',
                steps: [
                    {
                        stepNumber: 1,
                        description: 'Обжарить овощи на гриле.',
                        image: 'url',
                    },
                    {
                        stepNumber: 2,
                        description: 'Смешать с заправкой и подавать.',
                        image: 'url',
                    },
                ],
                author: {
                    image: avatarAuthor1Img,
                    firstName: 'Сергей',
                    lastName: 'Разумов',
                    nickName: '@serge25',
                    subscribers: 125,
                },
            },
        ],
    },
    salads: {
        id: '01',
        title: 'Салаты',
        desc: '',
    },
    snacks: {
        id: '02',
        title: 'Закуски',
        desc: '',
    },
    perviebluda: {
        id: '03',
        title: 'Первые блюда',
        desc: '',
    },
    'second-dish': {
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
                category: ['detskie'],
                subcategory: ['snacks', 'vegetables'],
                bookmarks: 1,
                likes: 1,
                portions: 2,
                nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
                ingredients: [
                    { title: 'картошка', count: '3', measureUnit: 'шт.' },
                    { title: 'грибы', count: '200', measureUnit: 'г' },
                    { title: 'мука', count: '100', measureUnit: 'г' },
                    { title: 'специи', count: '0', measureUnit: 'по вкусу' },
                ],
                time: '25 минут',
                steps: [
                    {
                        stepNumber: 1,
                        description: 'Обжарить овощи на гриле.',
                        image: 'url',
                    },
                    {
                        stepNumber: 2,
                        description: 'Смешать с заправкой и подавать.',
                        image: 'url',
                    },
                ],
                author: {
                    image: avatarAuthor1Img,
                    firstName: 'Сергей',
                    lastName: 'Разумов',
                    nickName: '@serge25',
                    subscribers: 125,
                },
            },
            {
                id: '02',
                title: 'Нежный сливочно-сырный крем для кексов',
                description:
                    'Сливочно-сырным кремом можно украсить кексы, либо другую выпечку, а также этим кремом можно наполнить заварные пирожные.',
                category: ['detskie'],
                subcategory: ['snacks', 'vegetables'],
                bookmarks: 2,
                likes: 1,
                portions: 2,
                nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
                ingredients: [
                    { title: 'картошка', count: '3', measureUnit: 'шт.' },
                    { title: 'грибы', count: '200', measureUnit: 'г' },
                    { title: 'мука', count: '100', measureUnit: 'г' },
                    { title: 'специи', count: '0', measureUnit: 'по вкусу' },
                ],
                time: '25 минут',
                steps: [
                    {
                        stepNumber: 1,
                        description: 'Обжарить овощи на гриле.',
                        image: 'url',
                    },
                    {
                        stepNumber: 2,
                        description: 'Смешать с заправкой и подавать.',
                        image: 'url',
                    },
                ],
                author: {
                    image: avatarAuthor1Img,
                    firstName: 'Сергей',
                    lastName: 'Разумов',
                    nickName: '@serge25',
                    subscribers: 125,
                },
            },
        ],
        pinRecipes: [
            {
                id: '01',
                title: 'Домашние сырные палочки',
                description:
                    'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
                category: ['detskie'],
                subcategory: ['snacks', 'vegetables'],
                portions: 2,
                nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
                ingredients: [
                    { title: 'картошка', count: '3', measureUnit: 'шт.' },
                    { title: 'грибы', count: '200', measureUnit: 'г' },
                    { title: 'мука', count: '100', measureUnit: 'г' },
                    { title: 'специи', count: '0', measureUnit: 'по вкусу' },
                ],
                time: '25 минут',
                steps: [
                    {
                        stepNumber: 1,
                        description: 'Обжарить овощи на гриле.',
                        image: 'url',
                    },
                    {
                        stepNumber: 2,
                        description: 'Смешать с заправкой и подавать.',
                        image: 'url',
                    },
                ],
                author: {
                    image: avatarAuthor1Img,
                    firstName: 'Сергей',
                    lastName: 'Разумов',
                    nickName: '@serge25',
                    subscribers: 125,
                },
            },
            {
                id: '02',
                title: 'Панкейки',
                description:
                    'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
                category: ['nacional'],
                subcategory: ['snacks', 'vegetables'],
                portions: 2,
                nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
                ingredients: [
                    { title: 'картошка', count: '3', measureUnit: 'шт.' },
                    { title: 'грибы', count: '200', measureUnit: 'г' },
                    { title: 'мука', count: '100', measureUnit: 'г' },
                    { title: 'специи', count: '0', measureUnit: 'по вкусу' },
                ],
                time: '25 минут',
                steps: [
                    {
                        stepNumber: 1,
                        description: 'Обжарить овощи на гриле.',
                        image: 'url',
                    },
                    {
                        stepNumber: 2,
                        description: 'Смешать с заправкой и подавать.',
                        image: 'url',
                    },
                ],
                author: {
                    image: avatarAuthor1Img,
                    firstName: 'Сергей',
                    lastName: 'Разумов',
                    nickName: '@serge25',
                    subscribers: 125,
                },
            },
            {
                id: '03',
                title: 'Воздушное банановое печенье на сковороде',
                description:
                    'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
                category: ['vegan'],
                subcategory: ['snacks', 'vegetables'],
                portions: 2,
                nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
                ingredients: [
                    { title: 'картошка', count: '3', measureUnit: 'шт.' },
                    { title: 'грибы', count: '200', measureUnit: 'г' },
                    { title: 'мука', count: '100', measureUnit: 'г' },
                    { title: 'специи', count: '0', measureUnit: 'по вкусу' },
                ],
                time: '25 минут',
                steps: [
                    {
                        stepNumber: 1,
                        description: 'Обжарить овощи на гриле.',
                        image: 'url',
                    },
                    {
                        stepNumber: 2,
                        description: 'Смешать с заправкой и подавать.',
                        image: 'url',
                    },
                ],
                author: {
                    image: avatarAuthor1Img,
                    firstName: 'Сергей',
                    lastName: 'Разумов',
                    nickName: '@serge25',
                    subscribers: 125,
                },
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

export const JUICIEST_DATA_FULL: RecipeItemFullType[] = [
    {
        id: '01',
        image: juiciest101Img,
        title: 'Лапша с курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: ['second-dish'],
        subcategory: ['snacks', 'vegetables'],
        bookmarks: 258,
        likes: 342,
        recomendation: {
            id: '02',
            image: avatarImg3,
            name: 'Alex Cook',
        },
        portions: 2,
        nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
        ingredients: [
            { title: 'картошка', count: '3', measureUnit: 'шт.' },
            { title: 'грибы', count: '200', measureUnit: 'г' },
            { title: 'мука', count: '100', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        time: '25 минут',
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: 'url',
            },
        ],
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
    {
        id: '02',
        image: juiciest102Img,
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: ['nacional'],
        subcategory: ['snacks', 'vegetables'],
        bookmarks: 124,
        likes: 324,
        portions: 2,
        nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
        ingredients: [
            { title: 'картошка', count: '3', measureUnit: 'шт.' },
            { title: 'грибы', count: '200', measureUnit: 'г' },
            { title: 'мука', count: '100', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        time: '25 минут',
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: 'url',
            },
        ],
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
    {
        id: '03',
        image: juiciest103Img,
        title: 'Пряная ветчина по итальянски',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: ['second-dish'],
        subcategory: ['snacks', 'vegetables'],
        bookmarks: 159,
        likes: 257,
        recomendation: {
            id: '01',
            image: avatarImg2,
            name: 'Елена Высоцкая',
        },
        portions: 2,
        nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
        ingredients: [
            { title: 'картошка', count: '3', measureUnit: 'шт.' },
            { title: 'грибы', count: '200', measureUnit: 'г' },
            { title: 'мука', count: '100', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        time: '25 минут',
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: 'url',
            },
        ],
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
    {
        id: '04',
        image: juiciest104Img,
        title: 'Кнели со спагетти',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: ['second-dish'],
        subcategory: ['snacks', 'vegetables'],
        bookmarks: 124,
        likes: 231,
        portions: 2,
        nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
        ingredients: [
            { title: 'картошка', count: '3', measureUnit: 'шт.' },
            { title: 'грибы', count: '200', measureUnit: 'г' },
            { title: 'мука', count: '100', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        time: '25 минут',
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: 'url',
            },
        ],
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
    {
        id: '05',
        image: juiciest105Img,
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        category: ['second-dish'],
        subcategory: ['snacks', 'vegetables'],
        bookmarks: 120,
        likes: 180,
        portions: 2,
        nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
        ingredients: [
            { title: 'картошка', count: '3', measureUnit: 'шт.' },
            { title: 'грибы', count: '200', measureUnit: 'г' },
            { title: 'мука', count: '100', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        time: '25 минут',
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: 'url',
            },
        ],
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
    {
        id: '06',
        image: juiciest106Img,
        title: 'Картофельные рулетики с грибами',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
        category: ['detskie'],
        subcategory: ['snacks', 'vegetables'],
        bookmarks: 85,
        likes: 180,
        portions: 2,
        nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
        ingredients: [
            { title: 'картошка', count: '3', measureUnit: 'шт.' },
            { title: 'грибы', count: '200', measureUnit: 'г' },
            { title: 'мука', count: '100', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        time: '25 минут',
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: 'url',
            },
        ],
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
    {
        id: '07',
        image: juiciest107Img,
        title: 'Овощная лазанья из лаваша',
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
        category: ['gril'],
        subcategory: ['snacks', 'vegetables'],
        bookmarks: 85,
        likes: 182,
        portions: 2,
        nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
        ingredients: [
            { title: 'картошка', count: '3', measureUnit: 'шт.' },
            { title: 'грибы', count: '200', measureUnit: 'г' },
            { title: 'мука', count: '100', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        time: '25 минут',
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: 'url',
            },
        ],
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
    {
        id: '08',
        image: juiciest108Img,
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        category: ['second-dish'],
        subcategory: ['snacks', 'vegetables'],
        bookmarks: 85,
        likes: 150,
        portions: 2,
        nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
        ingredients: [
            { title: 'картошка', count: '3', measureUnit: 'шт.' },
            { title: 'грибы', count: '200', measureUnit: 'г' },
            { title: 'мука', count: '100', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        time: '25 минут',
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: 'url',
            },
        ],
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
];

export const VEGAN_DATA_FULL: RecipeItemFullType[] = [
    {
        id: '01',
        image: vegan101Img,
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        category: ['nacional'],
        subcategory: ['snacks', 'vegetables'],
        bookmarks: 85,
        likes: 152,
        portions: 2,
        nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
        ingredients: [
            { title: 'картошка', count: '3', measureUnit: 'шт.' },
            { title: 'грибы', count: '200', measureUnit: 'г' },
            { title: 'мука', count: '100', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        time: '25 минут',
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: 'url',
            },
        ],
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
    {
        id: '02',
        image: vegan102Img,
        title: 'Картофельные рулетики с грибами',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
        category: ['detskie'],
        subcategory: ['snacks', 'vegetables'],
        bookmarks: 124,
        likes: 324,
        portions: 2,
        nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
        ingredients: [
            { title: 'картошка', count: '3', measureUnit: 'шт.' },
            { title: 'грибы', count: '200', measureUnit: 'г' },
            { title: 'мука', count: '100', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        time: '25 минут',
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: 'url',
            },
        ],
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
    {
        id: '03',
        image: vegan103Img,
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: ['nacional'],
        subcategory: ['snacks', 'vegetables'],
        bookmarks: 124,
        likes: 324,
        portions: 2,
        nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
        ingredients: [
            { title: 'картошка', count: '3', measureUnit: 'шт.' },
            { title: 'грибы', count: '200', measureUnit: 'г' },
            { title: 'мука', count: '100', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        time: '25 минут',
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: 'url',
            },
        ],
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
    {
        id: '04',
        image: vegan104Img,
        title: 'Овощная лазанья из лаваша',
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
        category: ['gril'],
        subcategory: ['snacks', 'vegetables'],
        bookmarks: 85,
        likes: 152,
        portions: 2,
        nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
        ingredients: [
            { title: 'картошка', count: '3', measureUnit: 'шт.' },
            { title: 'грибы', count: '200', measureUnit: 'г' },
            { title: 'мука', count: '100', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        time: '25 минут',
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: 'url',
            },
        ],
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
    {
        id: '05',
        image: vegan105Img,
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        category: ['second-dish'],
        subcategory: ['snacks', 'vegetables'],
        bookmarks: 85,
        likes: 152,
        portions: 2,
        nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
        ingredients: [
            { title: 'картошка', count: '3', measureUnit: 'шт.' },
            { title: 'грибы', count: '200', measureUnit: 'г' },
            { title: 'мука', count: '100', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        time: '25 минут',
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: 'url',
            },
        ],
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
    {
        id: '06',
        image: vegan106Img,
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        category: ['second-dish'],
        subcategory: ['snacks', 'vegetables'],
        bookmarks: 85,
        likes: 152,
        portions: 2,
        nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
        ingredients: [
            { title: 'картошка', count: '3', measureUnit: 'шт.' },
            { title: 'грибы', count: '200', measureUnit: 'г' },
            { title: 'мука', count: '100', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        time: '25 минут',
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: 'url',
            },
        ],
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
    {
        id: '07',
        image: vegan107Img,
        title: 'Чесночная картошка',
        description:
            'Такая картошечка украсит любой семейный обед! Все будут в полном  восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
        category: ['nacional'],
        subcategory: ['snacks', 'vegetables'],
        bookmarks: 124,
        likes: 324,
        portions: 2,
        nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
        ingredients: [
            { title: 'картошка', count: '3', measureUnit: 'шт.' },
            { title: 'грибы', count: '200', measureUnit: 'г' },
            { title: 'мука', count: '100', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        time: '25 минут',
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: 'url',
            },
        ],
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
    {
        id: '08',
        image: vegan108Img,
        title: 'Пури',
        description:
            'Пури - это индийские жареные лепешки, которые готовятся из пресного  теста. Рецепт лепешек пури требует самых доступных ингредиентов, и  времени на приготовление хрустящих лепешек уйдет мало.',
        category: ['nacional'],
        subcategory: ['snacks', 'vegetables'],
        bookmarks: 124,
        likes: 324,
        portions: 2,
        nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
        ingredients: [
            { title: 'картошка', count: '3', measureUnit: 'шт.' },
            { title: 'грибы', count: '200', measureUnit: 'г' },
            { title: 'мука', count: '100', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        time: '25 минут',
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: 'url',
            },
        ],
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
];

export const ALL_RECIPES: RecipeItemFullType[] = [
    {
        id: '0',
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, - вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт добавления томатной пасты.',
        category: ['vegan', 'second-dish'],
        subcategory: ['snacks', 'vegetables'],
        image: vegan101Img,
        bookmarks: 85,
        likes: 152,
        date: '2025-02-28T00:00:00Z',
        time: '40 минут',
        portions: 2,
        nutritionValue: { calories: 250, proteins: 5, fats: 8, carbohydrates: 40 },
        ingredients: [
            { title: 'картошка', count: '4', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '2', measureUnit: 'шт.' },
            { title: 'фасоль', count: '200', measureUnit: 'г' },
            { title: 'томатный соус', count: '200', measureUnit: 'мл' },
            { title: 'лук', count: '1', measureUnit: 'шт.' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Нарезать картошку и перец.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Обжарить лук до золотистого цвета.',
                image: 'url',
            },
            {
                stepNumber: 3,
                description: 'Добавить картошку, перец и фасоль, залить соусом.',
                image: 'url',
            },
            {
                stepNumber: 4,
                description: 'Тушить на медленном огне 30 минут.',
                image: 'url',
            },
        ],
        meat: '',
        side: 'potatoes',
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
    {
        id: '1',
        title: 'Картофельные рулетики с грибами',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов. Готовится это блюдо без яиц, без мяса и без сыра, из самых простых ингредиентов, а получается очень вкусно и сытно. Постный рецепт картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и даже на праздничный стол!',
        category: ['vegan', 'snacks'],
        subcategory: ['snacks', 'warm-snacks'],
        image: vegan102Img,
        bookmarks: 85,
        likes: 1152,
        date: '2024-02-20T00:00:00Z',
        time: '30 минут',
        portions: 2,
        nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
        ingredients: [
            { title: 'картошка', count: '3', measureUnit: 'шт.' },
            { title: 'грибы', count: '200', measureUnit: 'г' },
            { title: 'мука', count: '100', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Отварить картошку и сделать пюре.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Обжарить грибы до готовности.',
                image: 'url',
            },
            {
                stepNumber: 3,
                description: 'Сформировать рулетики и обжарить.',
                image: 'url',
            },
        ],
        side: 'potatoes',
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
    {
        id: '2',
        title: 'Овощная лазанья из лаваша',
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья готовится с овощным соусом и соусом бешамель, а вместо листов для лазаньи используется тонкий лаваш.',
        category: ['vegan', 'second-dish', 'national'],
        subcategory: ['second-dish', 'vegetables', 'italian', 'snacks'],
        image: vegan103Img,
        bookmarks: 85,
        likes: 152,
        date: '2023-01-25T00:00:00Z',
        time: '1 час',
        portions: 1,
        nutritionValue: { calories: 300, proteins: 12, fats: 8, carbohydrates: 45 },
        ingredients: [
            { title: 'лаваш', count: '3', measureUnit: 'листов' },
            { title: 'овощной соус', count: '300', measureUnit: 'мл' },
            { title: 'соус бешамель', count: '200', measureUnit: 'мл' },
            { title: 'сыр', count: '100', measureUnit: 'г' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Приготовить соусы.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Сложить слои лазаньи.',
                image: 'url',
            },
            {
                stepNumber: 3,
                description: 'Запекать 30 минут.',
                image: 'url',
            },
        ],
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
    {
        id: '3',
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        category: ['vegan', 'second-dish'],
        subcategory: ['second-dish', 'poultry-dish'],
        image: vegan104Img,
        bookmarks: 85,
        likes: 152,
        date: '2023-02-15T00:00:00Z',
        time: '50 минут',
        portions: 4,
        nutritionValue: { calories: 200, proteins: 10, fats: 5, carbohydrates: 30 },
        ingredients: [
            { title: 'булгур', count: '150', measureUnit: 'г' },
            { title: 'чечевица', count: '100', measureUnit: 'г' },
            { title: 'томатный соус', count: '200', measureUnit: 'мл' },
            { title: 'лук', count: '1', measureUnit: 'шт.' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Смешать булгур и чечевицу.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Сформировать тефтели и запечь.',
                image: 'url',
            },
            {
                stepNumber: 3,
                description: 'Подавать с соусом.',
                image: 'url',
            },
        ],
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
    {
        id: '4',
        title: 'Чесночная картошка',
        description:
            'Такая картошечка украсит любой семейный обед! Все будут в полном восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
        category: ['vegan', 'second-dish'],
        subcategory: ['side-dishes', 'second-dish', 'vegetables'],
        image: vegan105Img,
        bookmarks: 124,
        likes: 342,
        date: '2024-03-01T00:00:00Z',
        time: '30 минут',
        portions: 2,
        nutritionValue: { calories: 220, proteins: 4, fats: 7, carbohydrates: 35 },
        ingredients: [
            { title: 'картошка', count: '6', measureUnit: 'шт.' },
            { title: 'чеснок', count: '5', measureUnit: 'зубчиков' },
            { title: 'масло', count: '50', measureUnit: 'мл' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Очистить и нарезать картошку.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Обжарить с чесноком.',
                image: 'url',
            },
            {
                stepNumber: 3,
                description: 'Подавать горячей.',
                image: 'url',
            },
        ],
        side: 'potatoes',
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
    {
        id: '5',
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных блюд.',
        category: ['vegan'],
        subcategory: ['second-dish', 'snacks'],
        image: vegan106Img,
        bookmarks: 2,
        likes: 1,
        date: '2024-02-05T00:00:00Z',
        time: '35 минут',
        portions: 4,
        nutritionValue: { calories: 150, proteins: 5, fats: 4, carbohydrates: 20 },
        ingredients: [
            { title: 'капуста', count: '300', measureUnit: 'г' },
            { title: 'мука', count: '50', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Нарезать капусту и отварить.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Смешать с мукой и сформировать котлеты.',
                image: 'url',
            },
            {
                stepNumber: 3,
                description: 'Обжарить до золотистой корочки.',
                image: 'url',
            },
        ],
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
    {
        id: '6',
        title: 'Овощное рагу',
        description: 'Сытное рагу из сезонных овощей, приправленное травами.',
        category: ['vegan', 'second-dish'],
        subcategory: ['side-dishes', 'vegetables', 'snacks'],
        image: vegan107Img,
        bookmarks: 8,
        likes: 60,
        date: '2023-03-12T00:00:00Z',
        time: '1 час',
        portions: 2,
        nutritionValue: { calories: 200, proteins: 5, fats: 8, carbohydrates: 30 },
        ingredients: [
            { title: 'цуккини', count: '1', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '1', measureUnit: 'шт.' },
            { title: 'морковь', count: '1', measureUnit: 'шт.' },
            { title: 'картошка', count: '2', measureUnit: 'шт.' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Нарезать все овощи.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Обжарить на сковороде.',
                image: 'url',
            },
            {
                stepNumber: 3,
                description: 'Добавить специи и тушить до готовности.',
                image: 'url',
            },
        ],
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
    {
        id: '7',
        title: 'Лапша с курицей и шафраном',
        description: 'Ароматная лапша с курицей и шафраном, идеальное сочетание для сытного обеда.',
        category: ['second-dish'],
        subcategory: ['poultry-dish'],
        image: allRecipes7,
        bookmarks: 258,
        likes: 1342,
        date: '2024-03-08T00:00:00Z',
        time: '40 минут',
        portions: 4,
        nutritionValue: { calories: 400, proteins: 30, fats: 15, carbohydrates: 50 },
        ingredients: [
            { title: 'лапша', count: '200', measureUnit: 'г' },
            { title: 'курица', count: '300', measureUnit: 'г' },
            { title: 'шафран', count: '1', measureUnit: 'ч. л.' },
            { title: 'лук', count: '1', measureUnit: 'шт.' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Отварить лапшу.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Обжарить курицу с луком и шафраном.',
                image: 'url',
            },
            {
                stepNumber: 3,
                description: 'Смешать лапшу с курицей и подавать.',
                image: 'url',
            },
        ],
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
    {
        id: '8',
        title: 'Гриль-салат с овощами',
        description: 'Салат с обжаренными на гриле овощами и легкой заправкой.',
        category: ['salads'],
        subcategory: ['warm-salads'],
        image: recipe5Img,
        bookmarks: 10,
        likes: 80,
        date: '2023-03-20T00:00:00Z',
        time: '25 минут',
        portions: 2,
        nutritionValue: { calories: 150, proteins: 4, fats: 6, carbohydrates: 20 },
        ingredients: [
            { title: 'цуккини', count: '1', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '1', measureUnit: 'шт.' },
            { title: 'баклажан', count: '1', measureUnit: 'шт.' },
            { title: 'оливковое масло', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: 'url',
            },
        ],
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
    {
        id: '9',
        title: 'Солянка с грибами',
        description: 'Салат с обжаренными на гриле овощами и легкой заправкой.',
        category: ['salads'],
        subcategory: ['warm-salads'],
        image: recipe1Img,
        bookmarks: 10,
        likes: 80,
        date: '2015-04-01T00:00:00Z',
        time: '25 минут',
        portions: 2,
        nutritionValue: { calories: 150, proteins: 4, fats: 6, carbohydrates: 20 },
        ingredients: [
            { title: 'цуккини', count: '1', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '1', measureUnit: 'шт.' },
            { title: 'баклажан', count: '1', measureUnit: 'шт.' },
            { title: 'оливковое масло', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: 'url',
            },
        ],
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
    {
        id: '10',
        title: 'Капустные котлеты',
        description: 'Салат с обжаренными на гриле овощами и легкой заправкой.',
        category: ['salads'],
        subcategory: ['warm-salads'],
        image: recipe2Img,
        bookmarks: 10,
        likes: 80,
        date: '2015-04-02T00:00:00Z',
        time: '25 минут',
        portions: 2,
        nutritionValue: { calories: 150, proteins: 4, fats: 6, carbohydrates: 20 },
        ingredients: [
            { title: 'цуккини', count: '1', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '1', measureUnit: 'шт.' },
            { title: 'баклажан', count: '1', measureUnit: 'шт.' },
            { title: 'оливковое масло', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: 'url',
            },
        ],
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
    {
        id: '11',
        title: 'Оладьи на кефире "Пышные"',
        description: 'Салат с обжаренными на гриле овощами и легкой заправкой.',
        category: ['salads'],
        subcategory: ['warm-salads'],
        image: recipe3Img,
        bookmarks: 10,
        likes: 80,
        date: '2015-04-03T00:00:00Z',
        time: '25 минут',
        portions: 2,
        nutritionValue: { calories: 150, proteins: 4, fats: 6, carbohydrates: 20 },
        ingredients: [
            { title: 'цуккини', count: '1', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '1', measureUnit: 'шт.' },
            { title: 'баклажан', count: '1', measureUnit: 'шт.' },
            { title: 'оливковое масло', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: 'url',
            },
        ],
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
    {
        id: '12',
        title: 'Салат "Здоровье"',
        description: 'Салат с обжаренными на гриле овощами и легкой заправкой.',
        category: ['salads'],
        subcategory: ['warm-salads'],
        image: recipe4Img,
        bookmarks: 10,
        likes: 80,
        date: '2015-04-04T00:00:00Z',
        time: '25 минут',
        portions: 2,
        nutritionValue: { calories: 150, proteins: 4, fats: 6, carbohydrates: 20 },
        ingredients: [
            { title: 'цуккини', count: '1', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '1', measureUnit: 'шт.' },
            { title: 'баклажан', count: '1', measureUnit: 'шт.' },
            { title: 'оливковое масло', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: step1Img,
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: step2Img,
            },
            {
                stepNumber: 3,
                description: 'Смешать с заправкой и подавать.',
                image: step3Img,
            },
            {
                stepNumber: 4,
                description: 'Смешать с заправкой и подавать.',
                image: step4Img,
            },
            {
                stepNumber: 5,
                description: 'Смешать с заправкой и подавать.',
            },
            {
                stepNumber: 6,
                description: 'Смешать с заправкой и подавать.',
                image: step5Img,
            },
            {
                stepNumber: 7,
                description: 'Смешать с заправкой и подавать.',
            },
            {
                stepNumber: 8,
                description: 'Смешать с заправкой и подавать.',
                image: step6Img,
            },
        ],
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
    {
        id: '13',
        title: 'Лапша с курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: ['second-dish', 'nacional', 'detskie'],
        subcategory: ['warm-salads'],
        image: recipe4Img,
        bookmarks: 10,
        likes: 80,
        date: '2015-04-04T00:00:00Z',
        time: '20 минут',
        portions: 4,
        nutritionValue: { calories: 358, proteins: 23, fats: 20, carbohydrates: 54 },
        ingredients: [
            { title: 'зелёного лука', count: '1', measureUnit: 'пучок' },
            { title: 'репчатого лука', count: '1', measureUnit: 'шт' },
            { title: 'чеснока', count: '1', measureUnit: 'зубчик' },
            { title: 'куриного филе', count: '500', measureUnit: 'г' },
            { title: 'масла или жира', count: '40', measureUnit: 'г' },
            { title: 'спагетти', count: '250', measureUnit: 'г' },
            { title: 'молотого шафрана', count: '1', measureUnit: 'щепотка' },
            { title: 'молотой корицы', count: '1', measureUnit: 'щепотка' },
            { title: 'муки', count: '1', measureUnit: 'ст л' },
            { title: 'сливок', count: '250', measureUnit: 'мл' },
            { title: 'куриного бульона из кубика', count: '200', measureUnit: 'мл' },
            { title: 'нарезанной петрушки', count: '2', measureUnit: 'ст л' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: step1Img,
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: step2Img,
            },
            {
                stepNumber: 3,
                description: 'Смешать с заправкой и подавать.',
                image: step3Img,
            },
            {
                stepNumber: 4,
                description: 'Смешать с заправкой и подавать.',
                image: step4Img,
            },
            {
                stepNumber: 5,
                description: 'Смешать с заправкой и подавать.',
            },
            {
                stepNumber: 6,
                description: 'Смешать с заправкой и подавать.',
                image: step5Img,
            },
            {
                stepNumber: 7,
                description: 'Смешать с заправкой и подавать.',
            },
            {
                stepNumber: 8,
                description: 'Смешать с заправкой и подавать.',
                image: step6Img,
            },
        ],
        author: {
            image: avatarAuthor1Img,
            firstName: 'Сергей',
            lastName: 'Разумов',
            nickName: '@serge25',
            subscribers: 125,
        },
    },
];

export const NUTRITION_INFO_TEXT = {
    title: '* Калорийность на 1 порцию',
    values: [
        { id: '01', title: 'калорийность', key: 'calories', dimension: 'ккал' },
        { id: '02', title: 'белки', key: 'proteins', dimension: 'грамм' },
        { id: '03', title: 'жиры', key: 'fats', dimension: 'грамм' },
        { id: '04', title: 'углеводы', key: 'carbohydrates', dimension: 'грамм' },
    ],
};

export const INGREDIENTS_INFO_TEXT = {
    titleLeft: 'ИНГРЕДИЕНТЫ',
    titleRight: 'ПОРЦИЙ',
};

export const COOKINGSTEPS_INFO_TEXT = {
    title: 'Шаги приготовления',
    step: 'Шаг',
};

export const AUTHOR_INFO_TEXT = {
    author: 'Автор рецепта',
    button: 'Подписаться',
};

export const ALLERGENS = [
    { id: '01', key: 'Молочные продукты' },
    { id: '02', key: 'Яйцо' },
    { id: '03', key: 'Рыба' },
    { id: '04', key: 'Моллюски' },
    { id: '05', key: 'Орехи' },
    { id: '06', key: 'Томат (помидор)' },
    { id: '07', key: 'Цитрусовые' },
    { id: '08', key: 'Клубника (ягоды)' },
    { id: '09', key: 'Шоколад' },
];

export const CATEGORY_FILTER = [
    { key: 'salads', value: 'Салаты' },
    { key: 'snacks', value: 'Закуски' },
    { key: 'perviebluda', value: 'Первые блюда' },
    { key: 'second-dish', value: 'Вторые блюда' },
    { key: 'deserty', value: 'Десерты, выпечка' },
    { key: 'gril', value: 'Блюда на гриле' },
    { key: 'vegan', value: 'Веганская кухня' },
    { key: 'detskie', value: 'Детские блюда' },
    { key: 'lechebnoe', value: 'Лечебное питание' },
    { key: 'nacional', value: 'Национальные' },
    { key: 'soucy', value: 'Соусы' },
    { key: 'napitki', value: 'Напитки' },
    { key: 'zagotovki', value: 'Заготовки' },
];

export const AUTHOR_FILTER = [
    { key: '@serge25', value: 'Сергей Разумов' },
    { key: '@ivan25', value: 'Иван Иванов' },
    { key: '@petr25', value: 'Петр Петров' },
];

export const FILTER_CUSTOM: Record<FilterCustomType, FilterCustomItemType> = {
    category: { title: 'Категория', list: CATEGORY_FILTER },
    author: { title: 'Поиск по автору', list: AUTHOR_FILTER },
};
