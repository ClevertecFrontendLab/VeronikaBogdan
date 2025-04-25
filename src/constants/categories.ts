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
        path: 'salads',
        children: [
            { label: 'Мясные салаты', path: 'meat-salads' },
            { label: 'Рыбные салаты', path: 'fish-salads' },
            { label: 'Овощные салаты', path: 'vegetable-salads' },
            { label: 'Теплые салаты', path: 'warm-salads' },
        ],
    },
    {
        icon: Snacks,
        label: 'Закуски',
        path: 'snacks',
        children: [
            { label: 'Мясные закуски', path: 'meat-snacks' },
            { label: 'Рыбные закуски', path: 'fish-snacks' },
            { label: 'Овощные закуски', path: 'vegetable-snacks' },
            { label: 'Теплые закуски', path: 'warm-snacks' },
            { label: 'Бутерброды', path: 'sandwiches' },
            { label: 'Фастфуд', path: 'fast-food' },
        ],
    },
    {
        icon: FirstDishes,
        label: 'Первые блюда',
        path: 'first-dish',
        children,
    },
    {
        icon: SecondDishes,
        label: 'Вторые блюда',
        path: 'second-dish',
        children: [
            { label: 'Мясные', path: 'meat' },
            { label: 'Рыбные', path: 'fish' },
            { label: 'Овощные', path: 'vegetables' },
            { label: 'Из птицы', path: 'poultry-dish' },
            { label: 'Из грибов', path: 'mushrooms-dish' },
            { label: 'Из субпродуктов', path: 'by-products-dish' },
            { label: 'На пару', path: 'steamed-dish' },
            { label: 'Пельмени, вареники', path: 'dumplings' },
            { label: 'Мучные гарниры', path: 'flour-side-dishes' },
            { label: 'Овощные гарниры', path: 'vegetable-side-dishes' },
            { label: 'Пицца', path: 'pizza' },
            { label: 'Суши', path: 'sushi' },
        ],
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
        children: [
            { label: 'Американская кухня', path: 'american' },
            { label: 'Армянская кухня', path: 'armenian' },
            { label: 'Греческая кухня', path: 'greek' },
            { label: 'Грузинская кухня', path: 'georgian' },
            { label: 'Итальянская кухня', path: 'italian' },
            { label: 'Испанская кухня', path: 'spanish' },
            { label: 'Китайская кухня', path: 'chinese' },
            { label: 'Мексиканская кухня', path: 'mexican' },
        ],
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
