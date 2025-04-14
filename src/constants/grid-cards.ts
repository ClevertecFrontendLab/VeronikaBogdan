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
