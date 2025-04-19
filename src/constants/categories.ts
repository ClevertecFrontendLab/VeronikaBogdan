import Bakery from '~/assets/svg/categories/bakery.svg';
import Children from '~/assets/svg/categories/children.svg';
import Drinks from '~/assets/svg/categories/drinks.svg';
import FirstDishes from '~/assets/svg/categories/first-dishes.svg';
import GrilledDishes from '~/assets/svg/categories/grilled-dishes.svg';
import HealthyFood from '~/assets/svg/categories/healthy-food.svg';
import Homemade from '~/assets/svg/categories/homemade.svg';
import National from '~/assets/svg/categories/national.svg';
import Salad from '~/assets/svg/categories/salad.svg';
import Sauces from '~/assets/svg/categories/sauces.svg';
import SecondDishes from '~/assets/svg/categories/second-dishes.svg';
import Snacks from '~/assets/svg/categories/snacks.svg';
import VeganCuisine from '~/assets/svg/categories/vegan-cuisine.svg';

export const children = [
    {
        label: 'Закуски',
        path: 'snacks',
    },
    {
        label: 'Первые блюда',
        path: 'first-dishes',
    },
    {
        label: 'Вторые блюда',
        path: 'second-dishes',
    },
    {
        label: 'Гарниры',
        path: 'side-dishes',
    },
    {
        label: 'Десерты',
        path: 'desserts',
    },
    {
        label: 'Выпечка',
        path: 'bakery',
    },
    {
        label: 'Сыроедческие блюда',
        path: 'raw-food-dishes',
    },
    {
        label: 'Напитки',
        path: 'drinks',
    },
];

const CATEGORIES = [
    {
        icon: Salad,
        label: 'Салаты',
        path: 'salad',
        children,
    },
    {
        icon: Snacks,
        label: 'Закуски',
        path: 'snacks',
        children,
    },
    {
        icon: FirstDishes,
        label: 'Первые блюда',
        path: 'first-dishes',
        children,
    },
    {
        icon: SecondDishes,
        label: 'Вторые блюда',
        path: 'second-dishes',
        children,
    },
    {
        icon: Bakery,
        label: 'Десерты, выпечка',
        path: 'bakery',
        children,
    },
    {
        icon: GrilledDishes,
        label: 'Блюда на гриле',
        path: 'grilled-dishes',
        children,
    },
    {
        icon: VeganCuisine,
        label: 'Веганская кухня',
        path: 'vegan',
        testId: 'vegan-cuisine',
        children,
    },
    {
        icon: Children,
        label: 'Детские блюда',
        path: 'children',
        children,
    },
    {
        icon: HealthyFood,
        label: 'Лечебное питание',
        path: 'healthy-food',
        children,
    },
    {
        icon: National,
        label: 'Национальные',
        path: 'national',
        children,
    },
    {
        icon: Sauces,
        label: 'Соусы',
        path: 'sauces',
        children,
    },
    {
        icon: Drinks,
        label: 'Напитки',
        path: 'drinks',
        children,
    },
    {
        icon: Homemade,
        label: 'Заготовки',
        path: 'homemade',
        children,
    },
];

export default CATEGORIES;
