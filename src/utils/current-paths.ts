import CATEGORIES, { Subcategory } from '~/constants/categories';

export const getCategory = (category?: string) =>
    CATEGORIES.find((categoryItem) => categoryItem.path === category);

export const getSubcategories = (category?: string) =>
    CATEGORIES.find((categoryMenu) => categoryMenu.path === category)?.children || [];

export const getSubcategory = (subcategories: Subcategory[], subcategory?: string) =>
    subcategories.find((category) => category.path === subcategory);

export const getSingleSubcategory = (category?: string, subcategory?: string) =>
    getSubcategory(getSubcategories(category), subcategory);
