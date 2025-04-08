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

const children = [
    'Закуски',
    'Первые блюда',
    'Вторые блюда',
    'Гарниры',
    'Десерты',
    'Выпечка',
    'Сыроедческие блюда',
    'Напитки',
];

const CATEGORIES = [
    {
        icon: Salad,
        label: 'Салаты',
        children,
    },
    {
        icon: Snacks,
        label: 'Закуски',
        children,
    },
    {
        icon: FirstDishes,
        label: 'Первые блюда',
        children,
    },
    {
        icon: SecondDishes,
        label: 'Вторые блюда',
        children,
    },
    {
        icon: Bakery,
        label: 'Десерты, выпечка',
        children,
    },
    {
        icon: GrilledDishes,
        label: 'Блюда на гриле',
        children,
    },
    {
        icon: VeganCuisine,
        label: 'Веганская кухня',
        children,
    },
    {
        icon: Children,
        label: 'Детские блюда',
        children,
    },
    {
        icon: HealthyFood,
        label: 'Лечебное питание',
        children,
    },
    {
        icon: National,
        label: 'Национальные',
        children,
    },
    {
        icon: Sauces,
        label: 'Соусы',
        children,
    },
    {
        icon: Drinks,
        label: 'Напитки',
        children,
    },
    {
        icon: Homemade,
        label: 'Заготовки',
        children,
    },
];

export default CATEGORIES;
