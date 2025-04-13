import Recipe1 from '~/assets/png/new-recipies/recipe1.png';
import Recipe2 from '~/assets/png/new-recipies/recipe2.png';
import Recipe3 from '~/assets/png/new-recipies/recipe3.png';
import Recipe4 from '~/assets/png/new-recipies/recipe4.png';
import RecommendationWoman from '~/assets/png/recommendation1.png';
import RecommendationMan from '~/assets/png/recommendation2.png';

const JUICIEST_MAIN_PAGE = [
    {
        key: 0,
        image: Recipe1,
        title: 'Кнели со спагетти',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badge: 'Вторые блюда',
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
        favorite: 124,
        like: 324,
        recommend: null,
    },
];

export default JUICIEST_MAIN_PAGE;
