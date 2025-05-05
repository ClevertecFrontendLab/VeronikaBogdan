import { Category, Subcategory } from '~/query/types/categories';

export const getCategory = (categories?: Category[], category?: string) =>
    categories?.find((categoryItem) => categoryItem.category === category);

export const getCategoryById = (categories?: Category[], categoryId?: string) =>
    categories?.find((categoryItem) => categoryItem._id === categoryId);

export const getSubcategories = (categories?: Category[], category?: string) =>
    categories?.find((categoryMenu) => categoryMenu.category === category)?.subCategories || [];

export const getSubcategory = (subcategories?: Subcategory[], subcategory?: string) =>
    subcategories?.find((category) => category.category === subcategory);

export const getSingleSubcategory = (
    categories?: Category[],
    category?: string,
    subcategory?: string,
) => getSubcategory(getSubcategories(categories, category), subcategory);
