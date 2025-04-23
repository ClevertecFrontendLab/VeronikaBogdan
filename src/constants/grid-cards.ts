import Recipe1 from '~/assets/png/new-recipies/recipe1.png';
import Recipe2 from '~/assets/png/new-recipies/recipe2.png';
import Recipe3 from '~/assets/png/new-recipies/recipe3.png';
import Recipe4 from '~/assets/png/new-recipies/recipe4.png';
import RecommendationWoman from '~/assets/png/recommendation1.png';
import RecommendationMan from '~/assets/png/recommendation2.png';
import Children from '~/assets/svg/categories/children.svg';
import GrilledDishes from '~/assets/svg/categories/grilled-dishes.svg';
import National from '~/assets/svg/categories/national.svg';
import Salad from '~/assets/svg/categories/salad.svg';
import SecondDishes from '~/assets/svg/categories/second-dishes.svg';

export const VEGAN_CARDS = [
    {
        id: '0',
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, - вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт добавления томатной пасты.',
        category: ['vegan', 'second-dish'],
        subcategory: ['snacks', 'vegetables'],
        image: '/public/images/recepies/recipe1.png',
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
                image: '/public/images/recepies/recipe1.png',
            },
            {
                stepNumber: 2,
                description: 'Обжарить лук до золотистого цвета.',
                image: '/public/images/recepies/recipe1.png',
            },
            {
                stepNumber: 3,
                description: 'Добавить картошку, перец и фасоль, залить соусом.',
                image: '/public/images/recepies/recipe1.png',
            },
            {
                stepNumber: 4,
                description: 'Тушить на медленном огне 30 минут.',
                image: '/public/images/recepies/recipe1.png',
            },
        ],
        meat: '',
        side: 'potatoes',
    },
    {
        id: '1',
        title: 'Картофельные рулетики с грибами',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов. Готовится это блюдо без яиц, без мяса и без сыра, из самых простых ингредиентов, а получается очень вкусно и сытно. Постный рецепт картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и даже на праздничный стол!',
        category: ['vegan', 'snacks'],
        subcategory: ['snacks', 'warm-snacks'],
        image: '/public/images/recepies/recipe2.png',
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
                image: '/public/images/recepies/recipe2.png',
            },
            {
                stepNumber: 2,
                description: 'Обжарить грибы до готовности.',
                image: '/public/images/recepies/recipe2.png',
            },
            {
                stepNumber: 3,
                description: 'Сформировать рулетики и обжарить.',
                image: '/public/images/recepies/recipe2.png',
            },
        ],
        side: 'potatoes',
    },
    {
        id: '2',
        title: 'Овощная лазанья из лаваша',
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья готовится с овощным соусом и соусом бешамель, а вместо листов для лазаньи используется тонкий лаваш.',
        category: ['vegan', 'second-dish', 'national'],
        subcategory: ['second-dish', 'vegetables', 'italian', 'snacks'],
        image: '/public/images/recepies/recipe3.png',
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
                image: '/public/images/recepies/recipe3.png',
            },
            {
                stepNumber: 2,
                description: 'Сложить слои лазаньи.',
                image: '/public/images/recepies/recipe3.png',
            },
            {
                stepNumber: 3,
                description: 'Запекать 30 минут.',
                image: '/public/images/recepies/recipe3.png',
            },
        ],
    },
    {
        id: '3',
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        category: ['vegan', 'second-dish'],
        subcategory: ['second-dish', 'poultry-dish'],
        image: '/public/images/recepies/recipe4.png',
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
                image: '/public/images/recepies/recipe4.png',
            },
            {
                stepNumber: 2,
                description: 'Сформировать тефтели и запечь.',
                image: '/public/images/recepies/recipe4.png',
            },
            {
                stepNumber: 3,
                description: 'Подавать с соусом.',
                image: '/public/images/recepies/recipe4.png',
            },
        ],
    },
    {
        id: '4',
        title: 'Чесночная картошка',
        description:
            'Такая картошечка украсит любой семейный обед! Все будут в полном восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
        category: ['vegan', 'second-dish'],
        subcategory: ['side-dishes', 'second-dish', 'vegetables'],
        image: '/public/images/recepies/recipe5.png',
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
                image: '/public/images/recepies/recipe5.png',
            },
            {
                stepNumber: 2,
                description: 'Обжарить с чесноком.',
                image: '/public/images/recepies/recipe5.png',
            },
            {
                stepNumber: 3,
                description: 'Подавать горячей.',
                image: '/public/images/recepies/recipe5.png',
            },
        ],
        side: 'potatoes',
    },
    {
        id: '5',
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных блюд.',
        category: ['vegan'],
        subcategory: ['second-dish', 'snacks'],
        image: '/public/images/recepies/recipe6.png',
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
                image: '/public/images/recepies/recipe6.png',
            },
            {
                stepNumber: 2,
                description: 'Смешать с мукой и сформировать котлеты.',
                image: '/public/images/recepies/recipe6.png',
            },
            {
                stepNumber: 3,
                description: 'Обжарить до золотистой корочки.',
                image: '/public/images/recepies/recipe6.png',
            },
        ],
    },
    {
        id: '6',
        title: 'Овощное рагу',
        description: 'Сытное рагу из сезонных овощей, приправленное травами.',
        category: ['vegan', 'second-dish'],
        subcategory: ['side-dishes', 'vegetables', 'snacks'],
        image: '/public/images/recepies/recipe6.png',
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
                image: '/public/images/recepies/recipe6.png',
            },
            {
                stepNumber: 2,
                description: 'Обжарить на сковороде.',
                image: '/public/images/recepies/recipe6.png',
            },
            {
                stepNumber: 3,
                description: 'Добавить специи и тушить до готовности.',
                image: '/public/images/recepies/recipe6.png',
            },
        ],
    },
];

export const OTHER_CARDS = [
    {
        id: '7',
        title: 'Лапша с курицей и шафраном',
        description: 'Ароматная лапша с курицей и шафраном, идеальное сочетание для сытного обеда.',
        category: ['second-dish'],
        subcategory: ['poultry-dish'],
        image: '/public/images/recepies/recipe8.png',
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
                image: '/public/images/recepies/recipe8.png',
            },
            {
                stepNumber: 2,
                description: 'Обжарить курицу с луком и шафраном.',
                image: '/public/images/recepies/recipe8.png',
            },
            {
                stepNumber: 3,
                description: 'Смешать лапшу с курицей и подавать.',
                image: '/public/images/recepies/recipe8.png',
            },
        ],
    },
    {
        id: '8',
        title: 'Гриль-салат с овощами',
        description: 'Салат с обжаренными на гриле овощами и легкой заправкой.',
        category: ['salads'],
        subcategory: ['warm-salads'],
        image: '/public/images/recepies/recipe12.png',
        bookmarks: 10,
        likes: 80,
        date: '2023-03-20T00:00:00Z',
        time: '25 минут',
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
                image: '/public/images/recepies/recipe12.png',
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: '/public/images/recepies/recipe12.png',
            },
        ],
    },
    {
        id: '9',
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        category: ['bakery'],
        subcategory: ['desserts'],
        image: '/public/images/recepies/recipe11.png',
        bookmarks: 10,
        likes: 80,
        date: '2024-02-25T00:00:00Z',
        time: '25 минут',
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
                image: '/public/images/recepies/recipe11.png',
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: '/public/images/recepies/recipe11.png',
            },
        ],
    },
];

export const ALL_CARDS = [...OTHER_CARDS, ...VEGAN_CARDS];

export const GRID_CARDS_CATEGORY = [
    {
        key: 0,
        image: Recipe1,
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        badge: 'Национальные',
        icon: National,
        favorite: 85,
        like: 152,
        recommend: null,
    },
    {
        key: 1,
        image: Recipe2,
        title: 'Картофельные рулетики с грибами',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
        badge: 'Детские блюда',
        icon: Children,
        favorite: 85,
        like: 152,
        recommend: null,
    },
    {
        key: 2,
        image: Recipe3,
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badge: 'Национальные',
        icon: National,
        favorite: 124,
        like: 324,
        recommend: null,
    },
    {
        key: 3,
        image: Recipe4,
        title: 'Овощная лазанья из лаваша',
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
        badge: 'Блюда на гриле',
        icon: GrilledDishes,
        favorite: 85,
        like: 152,
        recommend: null,
    },
    {
        key: 4,
        image: Recipe1,
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        badge: 'Национальные',
        icon: National,
        favorite: 124,
        like: 324,
        recommend: null,
    },
    {
        key: 5,
        image: Recipe2,
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        badge: 'Национальные',
        icon: National,
        favorite: 85,
        like: 152,
        recommend: null,
    },
    {
        key: 6,
        image: Recipe3,
        title: 'Чесночная картошка',
        description:
            'Такая картошечка украсит любой семейный обед! Все будут в полном  восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
        badge: 'Национальные',
        icon: National,
        favorite: 124,
        like: 324,
        recommend: null,
    },
    {
        key: 7,
        image: Recipe4,
        title: 'Пури',
        description:
            'Пури - это индийские жареные лепешки, которые готовятся из пресного  теста. Рецепт лепешек пури требует самых доступных ингредиентов, и  времени на приготовление хрустящих лепешек уйдет мало.',
        badge: 'Национальные',
        icon: National,
        favorite: 85,
        like: 152,
        recommend: null,
    },
];

export const GRID_CARDS_JUISIEST = [
    {
        key: 0,
        image: Recipe3,
        title: 'Лапша с курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badge: 'Вторые блюда',
        icon: SecondDishes,
        favorite: 258,
        like: 342,
        recommend: {
            user: 'Alex Cook',
            photo: RecommendationMan,
        },
    },
    {
        key: 1,
        image: Recipe3,
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badge: 'Национальные',
        icon: National,
        favorite: 124,
        like: 324,
        recommend: null,
    },
    {
        key: 2,
        image: Recipe2,
        title: 'Пряная ветчина по итальянски',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badge: 'Вторые блюда',
        icon: SecondDishes,
        favorite: 159,
        like: 257,
        recommend: {
            user: 'Елена Высоцкая',
            photo: RecommendationWoman,
        },
    },
    {
        key: 3,
        image: Recipe1,
        title: 'Кнели со спагетти',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badge: 'Вторые блюда',
        icon: SecondDishes,
        favorite: 85,
        like: 152,
        recommend: null,
    },
    {
        key: 1,
        image: Recipe2,
        title: 'Картофельные рулетики с грибами',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
        badge: 'Детские блюда',
        icon: Children,
        favorite: 85,
        like: 152,
        recommend: null,
    },
    {
        key: 3,
        image: Recipe4,
        title: 'Овощная лазанья из лаваша',
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
        badge: 'Блюда на гриле',
        icon: GrilledDishes,
        favorite: 85,
        like: 152,
        recommend: null,
    },
    {
        key: 4,
        image: Recipe1,
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        badge: 'Национальные',
        icon: National,
        favorite: 124,
        like: 324,
        recommend: null,
    },
    {
        key: 5,
        image: Recipe2,
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        badge: 'Национальные',
        icon: National,
        favorite: 85,
        like: 152,
        recommend: null,
    },
    {
        key: 6,
        image: Recipe3,
        title: 'Чесночная картошка',
        description:
            'Такая картошечка украсит любой семейный обед! Все будут в полном  восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
        badge: 'Национальные',
        icon: National,
        favorite: 124,
        like: 324,
        recommend: null,
    },
    {
        key: 7,
        image: Recipe4,
        title: 'Пури',
        description:
            'Пури - это индийские жареные лепешки, которые готовятся из пресного  теста. Рецепт лепешек пури требует самых доступных ингредиентов, и  времени на приготовление хрустящих лепешек уйдет мало.',
        badge: 'Национальные',
        icon: National,
        favorite: 85,
        like: 152,
        recommend: null,
    },
];

const JUICIEST_MAIN_PAGE = [
    {
        key: 0,
        image: Recipe1,
        title: 'Кнели со спагетти',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badge: 'Вторые блюда',
        icon: SecondDishes,
        favorite: 85,
        like: 152,
        recommend: null,
    },
    {
        key: 1,
        image: Recipe2,
        title: 'Пряная ветчина по итальянски',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badge: 'Вторые блюда',
        icon: SecondDishes,
        favorite: 159,
        like: 257,
        recommend: {
            user: 'Елена Высоцкая',
            photo: RecommendationWoman,
        },
    },
    {
        key: 2,
        image: Recipe3,
        title: 'Лапша с курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badge: 'Вторые блюда',
        icon: SecondDishes,
        favorite: 258,
        like: 342,
        recommend: {
            user: 'Alex Cook',
            photo: RecommendationMan,
        },
    },
    {
        key: 3,
        image: Recipe4,
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badge: 'Салаты',
        icon: Salad,
        favorite: 124,
        like: 324,
        recommend: null,
    },
];

export default JUICIEST_MAIN_PAGE;
