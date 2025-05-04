export type Subcategory = {
    _id: string;
    title: string;
    category: string;
    rootCategoryId: string;
};

export type Category = {
    _id: string;
    title: string;
    description: string;
    category: string;
    icon: string;
    subCategories?: Subcategory[];
};

export type CategoriesResponse = {
    all: Category[] | [];
    categories: Category[] | [];
};
